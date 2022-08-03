$(document).ready(function () {
  head_hideAllTop();
  news_list();
  $('.head_item').eq(0).css({
    'border-bottom':'2px solid #000'
  })
  $('.news_list').eq(0).css({
    'border-bottom':'2px solid #000'
  })
});

$(document).delegate(".head_item", "click", function () {
  head_hideAllTop()
  $(this).css({
    'border-bottom':'2px solid #000'
  })
});

$(document).delegate(".news_list", "mouseover", function () {
  let current_index = $(this).index()+1
  // console.log(current_index)
  news_list_list()
  news_list()
  $(this).css({
    'border-bottom':'2px solid #000'
  })
  $('#one'+current_index+' div').show()
});

function head_hideAllTop() {
  for (let i = 0; i < 10; i++) {
    $('.head_item').eq(i).css({
      'border-bottom':'none'
    })
  }
}

function news_list(){
  for (let i = 0; i < 2; i++) {
    $('.news_list').eq(i).css({
      'border-bottom':'none'
    })
  }
}

function news_list_list(){
  for (let i = 1;i<=2;i++){
    $('.news_list div').hide()
  }
}
