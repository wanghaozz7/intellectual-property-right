$(document).ready(function () {
  hideAll();
  hideAllTop();
  $('.hd-item:first-child').css({
    'background': '#4a79ff',
    'box-shadow': '0 2px 2px 0 rgb(74 121 255)',
    'color': 'white',
  })
  $('.hd-item:first-child span').css({
    'color': 'white'
  })
  $('.index1').show()
});

$(document).delegate(".hd-item", "mouseover", function () {
  let currentIndex = $(this).index() + 1
  hideAll()
  hideAllTop()
  $(this).css({
    'background': '#4a79ff',
    'box-shadow': '0 2px 2px 0 rgb(74 121 255)',
    'color': 'white'
  })
  // 可以获取 this 下面的子元素
  $(this).find('span').css({
    'color': 'white'
  })
  $('.index' + currentIndex).show()
});

function hideAll() {
  for (let i = 1; i <= 3; i++) {
    $('.index' + i).hide();
  }
}

function hideAllTop() {
  for (let i = 0; i < 3; i++) {
    $('.hd-item span').eq(i).css({
      'color': '#4a4a4a'
    })
    $('.hd-item').eq(i).css({
      'background-color': '#f6f6f6',
      'box-shadow': 'none',
      'color': '#4a4a4a',
    });
  }
}
