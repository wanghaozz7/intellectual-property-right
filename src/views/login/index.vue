<template>
  <!-- <div>
    <el-card class="box-card">
      <el-form :model="enrollInfo" label-position="left" label-width="50px">
        <el-form-item label="账号">
          <el-input v-model="enrollInfo.account" placeholder="请输入您的账号"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="enrollInfo.key" placeholder="请输入您的密码" show-password></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" style="width: 100%;">登录</el-button>
    </el-card>
  </div> -->


  <div class="dowebok" id="dowebok" style="margin: 15vh auto;" :class="{ 'right-panel-active': type === 'register' }">
    <!-- 注册页 -->
    <div class="form-container sign-up-container">
      <form>
        <h1>注册</h1>
        <span>请输入您的信息</span>
        <input type="text" id="idcard" name="idcard" placeholder="手机号码" onblur="validate_idcard(this.value)">
        <input type="text" id="Username" name="username" placeholder="姓名" onblur="validate_username(this.value)">
        <input type="password" id="Password" name="password" placeholder="以字母开头只能包含字母、数字和下划线"
          onblur="validate_password(this.value)">
        <input type="password" id="Password2" name="password2" onblur="validate_password2(this.value)"
          placeholder="确认密码">
        <button @click="registerConfirm" type="button">注册</button>
      </form>
    </div>
    <!-- 登录页 -->
    <div class="form-container sign-in-container">
      <form>
        <h1>登录</h1>
        <span>或使用您的帐号</span>
        <!-- <input type="text" placeholder="身份证号"> -->
        <input type="text" placeholder="用户名" v-model="enrollInfo.username">
        <input type="password" placeholder="密码" v-model="enrollInfo.key">
        <a href="###">忘记密码？</a>
        <button @click="logConfirm" type="button">登录</button>
      </form>
    </div>
    <!-- 切换页 -->
    <div class="overlay-container">
      <div class="overlay">
        <div class="overlay-panel overlay-left">
          <h1>已有帐号？</h1>
          <p>请使用您的帐号进行登录</p>
          <button class="ghost" id="signIn">登录</button>
        </div>
        <div class="overlay-panel overlay-right">
          <h1>没有帐号？</h1>
          <p>立即注册加入我们，和我们一起开始旅程吧</p>
          <button class="ghost" id="signUp">注册</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { validate_idcard, validate_username, validate_password, validate_password2 } from './index'
import { getInfo, login } from '@/api/user'
import { getToken, setToken } from '@/utils/auth';
import store from '@/store/index'
import router from '@/router/index'
let signUpButton;
let signInButton;
let container;
window.onload = function () {
  signUpButton = document.getElementById('signUp')
  signInButton = document.getElementById('signIn')
  container = document.getElementById('dowebok')
  signUpButton.addEventListener('click', function () {
    container.classList.add('right-panel-active')
  })

  signInButton.addEventListener('click', function () {
    container.classList.remove('right-panel-active')
  })
}
let type;

export default {
  name: 'login',
  data() {
    return {
      enrollInfo: {
        username: '',
        key: '',
      },
      type,
    }
  },
  methods: {
    logConfirm() {
      let userInfo = {
        username: this.enrollInfo.username,
        password: this.enrollInfo.key
      }

      // store.dispatch('login', userInfo);
      // let token = getToken();
      // console.log(token);


      login(userInfo).then(res => {
        let token = res.data.token;
        let name = res.data.name;
        store.commit('SET_TOKEN', token);
        store.commit('SET_NAME', name);
        this.$message({
          message: '登录成功！',
          type: 'success'
        });
        setToken(token);
        // 成功提示
        window.setTimeout(function () {
          router.push({ name: 'homePage' });
        }, 1000);
      }).catch(err => {
        console.log(err);
        // 失败提示
        this.$message.error('登录失败！');
      })


      // getInfo().then(res => {
      //   console.log(res);
      // }).catch(err => {
      //   console.log(err);
      // })

    },
    registerConfirm() {
      console.log('register confirm');
      validate_idcard();
      validate_username();
      validate_password();
      validate_password2();
      return;
    }
  },

  created() {
    this.type = this.$route.query.type;
    // let data = {
    //   username: '13124981760',
    //   password: '345'
    // }
    // login(data).then(res => {
    //   console.log(res);
    // })
  }
};
</script>

<style scoped>
/* .box-card {
  width: 400px;
  margin: 15vh auto;
} */


* {
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  background: #f6f5f7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: -20px 0 50px;
}

h1 {
  font-weight: bold;
  margin: 0;
}

p {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: .5px;
  margin: 20px 0 30px;
}

span {
  font-size: 12px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

.dowebok {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
}

.form-container form {
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.social-container {
  margin: 20px 0;
}

.social-container a {
  border: 1px solid #ddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}

.social-container a:hover {
  background-color: #eee;
}

.form-container input {
  background: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  outline: none;
}

button {
  border-radius: 20px;
  border: 1px solid lightseagreen;
  background: lightseagreen;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  cursor: pointer;
}

button:active {
  transform: scale(.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background: transparent;
  border-color: #fff;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all .6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.sign-up-container {
  left: 0;
  width: 50%;
  z-index: 1;
  opacity: 0;
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform .6s ease-in-out;
  z-index: 100;
}

.overlay {
  background: lightseagreen;
  background: linear-gradient(to right, lightseagreen, lightseagreen) no-repeat 0 0 / cover;
  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateY(0);
  transition: transform .6s ease-in-out;
}

.overlay-panel {
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  height: 100%;
  width: 50%;
  text-align: center;
  transform: translateY(0);
  transition: transform .6s ease-in-out;
}

.overlay-right {
  right: 0;
  transform: translateY(0);
}

.overlay-left {
  transform: translateY(-20%);
}

/* Move signin to right */
.dowebok.right-panel-active .sign-in-container {
  transform: translateY(100%);
}

/* Move overlay to left */
.dowebok.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

/* Bring signup over signin */
.dowebok.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
}

/* Move overlay back to right */
.dowebok.right-panel-active .overlay {
  transform: translateX(50%);
}

/* Bring back the text to center */
.dowebok.right-panel-active .overlay-left {
  transform: translateY(0);
}

/* Same effect for right */
.dowebok.right-panel-active .overlay-right {
  transform: translateY(20%);
}
</style>