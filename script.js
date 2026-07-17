/// <reference path="./jQuery/JQuery.d.ts"/>

class Dot {
    #elem;
    #left;
    #top;
    #size;
    #hue;

    constructor(element, left, top, size, hue) {
        this.#elem = element;
        this.#left = left;
        this.#top = top;
        this.#size = size;
        this.#hue = hue;

        $(this.#elem).css({
            left: `${this.#left}%`,
            top: `${this.#top}%`,
            backgroundColor: `hsl(${this.#hue}, 100%, 80%)`,
            width: this.#size,
            height: this.#size
        });
    }
}

class Remark {
    #elem
    #icon
    #remark
    constructor(element, left) {
        this.#elem = element;
        this.#icon = $(element).children("img");
        this.#remark = $(element).children("div");

        //表示非表示されたときのアニメーション
        $(this.#elem).on('inview', (event, isInView) => {
            //表示
            if (isInView) {
                if (left) {
                    $(this.#remark).animate({
                        left: "0"
                    },
                        500,
                        "easeOutExpo"
                    );
                } else {
                    $(this.#remark).animate({
                        right: "0"
                    },
                        500,
                        "easeOutExpo"
                    );
                }
                $(this.#icon).animate({
                    opacity: 1
                },
                    500,
                    "linear")
            } else {  //非表示
                if (left) {
                    $(this.#remark).css({
                        left: "120%"
                    })
                } else {
                    $(this.#remark).css({
                        right: "120%"
                    })
                }
                $(this.#icon).css({
                    opacity: 0
                })
            }
        });
    }
}

class HidableElement {
    #elem
    #onMobile

    constructor(element, onMobile) {
        this.#elem = element;
        this.#onMobile = onMobile;
    }

    Hide() {
        $(this.#elem).prop("hidden", true);
    }

    Show() {
        $(this.#elem).prop("hidden", false)
    }
}

class AnimText {
    #elem
    constructor(element) {
        this.#elem = element;

        //表示非表示されたときのアニメーション
        $(this.#elem).on('inview', (event, isInView) => {
            //表示
            if (isInView) {
                $(this).animate({
                    left: 0
                },
                    500,
                    "linear")
            } else {  //非表示
                $(this).css({
                    left: "100%"
                })
            }
        });

    }
}

$(function () {
    //オブジェクト指向にするお
    let dots = [];
    $("#background").children().each(function (i, elem) {
        dots[i] = new Dot($(this), Math.random() * 100, Math.random() * 100, Math.random() * 400 + 100, Math.random() * 359)
    });

    let remarks = []
    $(".remark").each(function (i, elem) {
        remarks[i] = new Remark($(this), $(this).hasClass("remark remarkL"));
    });

    let responsivePoint = 768;
    let tablePC = new HidableElement($("#PC"), false);
    let tableMobile = new HidableElement($("#Mobile"), true);

    function responsive() {
        if ($(window).width() > responsivePoint) {
            tablePC.Show();
            tableMobile.Hide();
        } else {
            tablePC.Hide();
            tableMobile.Show();
        }
    }

    responsive();

    //ウィンドウサイズ変更時
    $(window).resize(responsive)
})