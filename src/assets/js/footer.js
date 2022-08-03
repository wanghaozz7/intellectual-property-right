$(document).ready(function () {
    footer_hideAll();
    footer_hideAllTop();
    $('.hd2-item:first-child').css({
        'background': 'rgba(168,29,29,0.68)',
        'box-shadow': '0 2px 2px 0 rgb(74 121 255)',
        'color': 'white',
    })
    $('.hd2-item:first-child span').css({
        'color': 'white'
    })
    $('.content1').show()
});

$(document).delegate(".hd2-item", "mouseover", function () {
    let currentIndex = $(this).index() + 1
    footer_hideAll()
    footer_hideAllTop()
    $(this).css({
        'background': 'rgba(168,29,29,0.68)',
        'box-shadow': '0 2px 2px 0 rgb(74 121 255)',
        'color': 'white'
    })
    // 可以获取 this 下面的子元素
    $(this).find('span').css({
        'color': 'white'
    })
    $('.content' + currentIndex).show()
});

function footer_hideAll() {
    for (let i = 1; i <= 3; i++) {
        $('.footer .content' + i).hide();
    }
}

function footer_hideAllTop() {
    for (let i = 0; i < 3; i++) {
        $('.footer .hd2-item span').eq(i).css({
            'color': '#4a4a4a'
        })
        $('.footer .hd2-item').eq(i).css({
            'background-color': '#f6f6f6',
            'box-shadow': 'none',
            'color': '#4a4a4a',
        });
    }
}

