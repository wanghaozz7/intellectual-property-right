THREE.OrbitControls = function (object, domElement) {
	this.object = object;
	this.domElement = (domElement !== undefined) ? domElement : document;
	this.enabled = true;
	this.target = new THREE.Vector3();
	this.center = this.target;
	this.noZoom = false;
	this.zoomSpeed = 1.0;
	this.minDistance = 0;
	this.maxDistance = Infinity;
	this.noRotate = false;
	this.rotateSpeed = 1.0;
	this.noPan = false;
	this.keyPanSpeed = 7.0;
	this.autoRotate = false;
	this.autoRotateSpeed = 2.0;
	this.minPolarAngle = 0;
	this.maxPolarAngle = Math.PI;
	this.noKeys = false;
	this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };
	var scope = this;
	var EPS = 0.000001;
	var rotateStart = new THREE.Vector2();
	var rotateEnd = new THREE.Vector2();
	var rotateDelta = new THREE.Vector2();
	var panStart = new THREE.Vector2();
	var panEnd = new THREE.Vector2();
	var panDelta = new THREE.Vector2();
	var dollyStart = new THREE.Vector2();
	var dollyEnd = new THREE.Vector2();
	var dollyDelta = new THREE.Vector2();
	var phiDelta = 0;
	var thetaDelta = 0;
	var scale = 1;
	var pan = new THREE.Vector3();
	var lastPosition = new THREE.Vector3();
	var STATE = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_DOLLY: 4, TOUCH_PAN: 5 };
	var state = STATE.NONE;
	var changeEvent = { type: 'change' };
	this.rotateLeft = function (angle) {
		if (angle === undefined) { angle = getAutoRotationAngle(); }
		thetaDelta -= angle;
	};
	this.rotateUp = function (angle) {
		if (angle === undefined) { angle = getAutoRotationAngle(); }
		phiDelta -= angle;
	};
	this.panLeft = function (distance) { var panOffset = new THREE.Vector3(); var te = this.object.matrix.elements; panOffset.set(te[0], te[1], te[2]); panOffset.multiplyScalar(-distance); pan.add(panOffset); }; this.panUp = function (distance) { var panOffset = new THREE.Vector3(); var te = this.object.matrix.elements; panOffset.set(te[4], te[5], te[6]); panOffset.multiplyScalar(distance); pan.add(panOffset); }; this.pan = function (delta) { var element = scope.domElement === document ? scope.domElement.body : scope.domElement; if (scope.object.fov !== undefined) { var position = scope.object.position; var offset = position.clone().sub(scope.target); var targetDistance = offset.length(); targetDistance *= Math.tan((scope.object.fov / 2) * Math.PI / 180.0); scope.panLeft(2 * delta.x * targetDistance / element.clientHeight); scope.panUp(2 * delta.y * targetDistance / element.clientHeight); } else if (scope.object.top !== undefined) { scope.panLeft(delta.x * (scope.object.right - scope.object.left) / element.clientWidth); scope.panUp(delta.y * (scope.object.top - scope.object.bottom) / element.clientHeight); } else { console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.'); } }; this.dollyIn = function (dollyScale) {
		if (dollyScale === undefined) { dollyScale = getZoomScale(); }
		scale /= dollyScale;
	};
	this.dollyOut = function (dollyScale) {
		if (dollyScale === undefined) { dollyScale = getZoomScale(); }
		scale *= dollyScale;
	};
	this.update = function () {
		var position = this.object.position;
		var offset = position.clone().sub(this.target);
		var theta = Math.atan2(offset.x, offset.z);
		var phi = Math.atan2(Math.sqrt(offset.x * offset.x + offset.z * offset.z), offset.y);
		if (this.autoRotate) { this.rotateLeft(getAutoRotationAngle()); }
		theta += thetaDelta;
		phi += phiDelta;
		phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, phi));
		phi = Math.max(EPS, Math.min(Math.PI - EPS, phi));
		var radius = offset.length() * scale;
		radius = Math.max(this.minDistance, Math.min(this.maxDistance, radius));
		this.target.add(pan);
		offset.x = radius * Math.sin(phi) * Math.sin(theta);
		offset.y = radius * Math.cos(phi);
		offset.z = radius * Math.sin(phi) * Math.cos(theta); position.copy(this.target).add(offset);
		this.object.lookAt(this.target);
		thetaDelta = 0;
		phiDelta = 0;
		scale = 1;
		pan.set(0, 0, 0);
		if (lastPosition.distanceTo(this.object.position) > 0) {
			this.dispatchEvent(changeEvent);
			lastPosition.copy(this.object.position);
		}
	};
	function getAutoRotationAngle() { return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed; }
	function getZoomScale() { return Math.pow(0.95, scope.zoomSpeed); }
	function onMouseDown(event) {
		if (scope.enabled === false) { return; }
		event.preventDefault(); if (event.button === 0) {
			if (scope.noRotate === true) { return; }
			state = STATE.ROTATE; rotateStart.set(event.clientX, event.clientY);
		} else if (event.button === 1) {
			if (scope.noZoom === true) { return; }
			state = STATE.DOLLY; dollyStart.set(event.clientX, event.clientY);
		} else if (event.button === 2) {
			if (scope.noPan === true) { return; }
			state = STATE.PAN; panStart.set(event.clientX, event.clientY);
		}
		scope.domElement.addEventListener('mousemove', onMouseMove, false);
		scope.domElement.addEventListener('mouseup', onMouseUp, false);
	}
	function onMouseMove(event) {
		if (scope.enabled === false) return; event.preventDefault();
		var element = scope.domElement === document ? scope.domElement.body : scope.domElement;
		if (state === STATE.ROTATE) {
			if (scope.noRotate === true) return;
			rotateEnd.set(event.clientX, event.clientY);
			rotateDelta.subVectors(rotateEnd, rotateStart);
			scope.rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed);
			scope.rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);
			rotateStart.copy(rotateEnd);
		}
		else if (state === STATE.DOLLY) {
			if (scope.noZoom === true) return;
			dollyEnd.set(event.clientX, event.clientY);
			dollyDelta.subVectors(dollyEnd, dollyStart);
			if (dollyDelta.y > 0) { scope.dollyIn(); } else { scope.dollyOut(); }
			dollyStart.copy(dollyEnd);
		} else if (state === STATE.PAN) {
			if (scope.noPan === true) return;
			panEnd.set(event.clientX, event.clientY);
			panDelta.subVectors(panEnd, panStart);
			scope.pan(panDelta); panStart.copy(panEnd);
		}
		scope.update();
	}
	function onMouseUp() {
		if (scope.enabled === false) return;
		scope.domElement.removeEventListener('mousemove', onMouseMove, false);
		scope.domElement.removeEventListener('mouseup', onMouseUp, false); state = STATE.NONE;
	}
	function onMouseWheel(event) {
		if (scope.enabled === false || scope.noZoom === true) return;
		var delta = 0;
		if (event.wheelDelta) { delta = event.wheelDelta; } else if (event.detail) { delta = -event.detail; }
		if (delta > 0) { scope.dollyOut(); } else { scope.dollyIn(); }
	}
	function onKeyDown(event) {
		if (scope.enabled === false) { return; }
		if (scope.noKeys === true) { return; }
		if (scope.noPan === true) { return; }
		var needUpdate = false; switch (event.keyCode) { case scope.keys.UP: scope.pan(new THREE.Vector2(0, scope.keyPanSpeed)); needUpdate = true; break; case scope.keys.BOTTOM: scope.pan(new THREE.Vector2(0, -scope.keyPanSpeed)); needUpdate = true; break; case scope.keys.LEFT: scope.pan(new THREE.Vector2(scope.keyPanSpeed, 0)); needUpdate = true; break; case scope.keys.RIGHT: scope.pan(new THREE.Vector2(-scope.keyPanSpeed, 0)); needUpdate = true; break; }
		if (needUpdate) { scope.update(); }
	}
	function touchstart(event) {
		if (scope.enabled === false) { return; }
		switch (event.touches.length) {
			case 1: if (scope.noRotate === true) { return; }
				state = STATE.TOUCH_ROTATE;
				rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);
				break;
			case 2: if (scope.noZoom === true) { return; }
				state = STATE.TOUCH_DOLLY;
				var dx = event.touches[0].pageX - event.touches[1].pageX;
				var dy = event.touches[0].pageY - event.touches[1].pageY;
				var distance = Math.sqrt(dx * dx + dy * dy);
				dollyStart.set(0, distance); break; case 3: if (scope.noPan === true) { return; }
				state = STATE.TOUCH_PAN; panStart.set(event.touches[0].pageX, event.touches[0].pageY);
				break;
			default: state = STATE.NONE;
		}
	}
	function touchmove(event) {
		if (scope.enabled === false) { return; }
		event.preventDefault();
		event.stopPropagation();
		var element = scope.domElement === document ? scope.domElement.body : scope.domElement;
		switch (event.touches.length) {
			case 1: if (scope.noRotate === true) { return; }
				if (state !== STATE.TOUCH_ROTATE) { return; }
				rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);
				rotateDelta.subVectors(rotateEnd, rotateStart);
				scope.rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed);
				scope.rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);
				rotateStart.copy(rotateEnd); break; case 2: if (scope.noZoom === true) { return; }
				if (state !== STATE.TOUCH_DOLLY) { return; }
				var dx = event.touches[0].pageX - event.touches[1].pageX;
				var dy = event.touches[0].pageY - event.touches[1].pageY;
				var distance = Math.sqrt(dx * dx + dy * dy); dollyEnd.set(0, distance); dollyDelta.subVectors(dollyEnd, dollyStart);
				if (dollyDelta.y > 0) { scope.dollyOut(); }
				else { scope.dollyIn(); }
				dollyStart.copy(dollyEnd);
				break;
			case 3: if (scope.noPan === true) { return; }
				if (state !== STATE.TOUCH_PAN) { return; }
				panEnd.set(event.touches[0].pageX, event.touches[0].pageY);
				panDelta.subVectors(panEnd, panStart);
				scope.pan(panDelta); panStart.copy(panEnd);
				break;
			default: state = STATE.NONE;
		}
	}
	function touchend() {
		if (scope.enabled === false) { return; }
		state = STATE.NONE;
	}
	this.domElement.addEventListener('contextmenu', function (event) { event.preventDefault(); }, false);
	this.domElement.addEventListener('mousedown', onMouseDown, false);
	this.domElement.addEventListener('mousewheel', onMouseWheel, false);
	this.domElement.addEventListener('DOMMouseScroll', onMouseWheel, false);
	this.domElement.addEventListener('keydown', onKeyDown, false);
	this.domElement.addEventListener('touchstart', touchstart, false);
	this.domElement.addEventListener('touchend', touchend, false);
	this.domElement.addEventListener('touchmove', touchmove, false);
}; THREE.OrbitControls.prototype = Object.create(THREE.EventDispatcher.prototype);