//wow使用のための初期化
new WOW().init();

//ドロワーメニュー
$(".js-drawer").on("click", function (e) {
    e.preventDefault();
    let targetClass = $(this).attr("data-target");
    $("." + targetClass).toggleClass("is-checked");
    return false;
});

//スムーススクロール
let headerHeight = $('header').outerHeight();
$('a[href^="#"]').on('click',function () {
    var scroll_target = $(this).attr("href");
    // var scroll_target = $(href);
    var position = 0;
    if(scroll_target != '#'){
        position = $(scroll_target).offset().top - headerHeight;
    }
    $('body,html').stop().animate({ 
        scrollTop: position
    },
     500);
    return false;
});

// スライダー
var mySwiper = new Swiper('.swiper-container', {

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

    // スマホ表示のオプション
    spaceBetween: 20,
    width: 275,

    breakpoints: {
        // PC表示のオプション
        767: {
            spaceBetween: 40,

            width: 400,
        }
    },
});

//アコーディオンメニュー
$('.accordion__head').click(function () {
    $(this).next().slideToggle();
    $(this).children('.accordion__icon').toggleClass('is-open');
});

//googleフォーム
let $form = $('#js-form')
$form.submit(function (e) {
    $.ajax({
        url: $form.attr('action'),
        data: $form.serialize(),
        type: "POST",
        dataType: "xml",
        statusCode: {
            0: function () {
                //送信に成功したときの処理 
                $('#js-success').slideDown()
            },
            200: function () {
                //送信に失敗したときの処理 
                $('#js-error').slideDown()
            }
        }
    });

    return false;
});



// $('#js-form input, #js-form textarea').on('change',function(){
let $submit = $('#js-submit')
$('#js-form input').on('change', function () {
    if (
        $('#js-form input[name="entry.1022914099"]').val() !== "" &&
        $('#js-form input[name="entry.1399109349"]').val() !== "" &&
        $('#js-form input[name="entry.412013228"]').prop('checked') === true
    ) {
        //すべて入力されたとき
        $submit.prop('disabled', false)
    } else {
        //入力されていないとき
        $submit.prop('disabled', true)
    }
})

//クリックしたらトップへ戻るボタン
jQuery(window).on("scroll", function($) {
	if (jQuery(this).scrollTop() > 100) {
		jQuery('.floating').show();
	} else {
		jQuery('.floating').hide();
	}
});

jQuery('.floating').click(function () {
	jQuery('body,html').animate({
		scrollTop: 0
	}, 500);
	return false;
});