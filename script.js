/// <reference path="./jQuery/JQuery.d.ts"/>

let wWidth = $(window).width();
let wHeight = $(window).height();

//画面サイズ変更時
$(window).resize(function () {
    wWidth = $(window).width();
    wHeight = $(window).height();
});


$(function () {
    dots = [];
    $("#background").children().each(function (i, dot) {
        dots[i] = {
            animState: 1,
            size: Math.random() * 400 + 100
        };
        $(dot).css({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: `hsl(${Math.random() * 359}, 100%, 80%)`,
            width: dots[i].size,
            height: dots[i].size
        });
    });
    /*
    setInterval(() => {
        $("#background").children().each(function (i, dot) {
            switch (dots[i].animState) {
                case 1:
                    dots[i].animState = 0;
                    $(dot).animate(
                        {
                            width: dots[i].size,
                            height: dots[i].size
                        },
                        dots[i].size * 50,
                        "easeInOutCubic",
                        function () {
                            dots[i].animState = 2;
                        });
                    break;
                case 2:
                    dots[i].animState = 0;
                    $(dot).animate(
                        {
                            width: "0",
                            height: "0"
                        },
                        dots[i].size * 50,
                        "easeInOutCubic", function () {
                            dots[i].animState = 1;
                        });
                    break;
            }
        });
    }, 1000);*/
})