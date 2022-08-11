
$(document).ready(function () {
    $(".slide").slick({
        infinite: true,
        slidestoShow: 1,
        slidestoScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear',
        prevArrow: "<button type='button' class='slick-prev slick-arrows'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next slick-arrows'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    arrows: false,
                    draggable: true,
                    fade: false,
                }
            }
        ]
    });
});
const backToTopbtn = document.querySelector("#back_to_top");
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 50) {  //show backtotop
        if (!backToTopbtn.classList.contains("button_entrance")) {
            backToTopbtn.classList.remove("button_exit");
            backToTopbtn.classList.add("button_entrance");

            backToTopbtn.style.display = "block";
        }
    }
    else { //hidden backtotop
        if (backToTopbtn.classList.contains("button_entrance")) {
            backToTopbtn.classList.remove("button_entrance");
            backToTopbtn.classList.add("button_exit");
            setTimeout(function () {
                backToTopbtn.style.display = "none";
            }, 200);
        }
    }
    backToTopbtn.addEventListener("click", backtotop);

    function backtotop() {
        window.scrollTo(0, 0);
    }
}

var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("bg_btn");
function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}
function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}

var dn_btn_modal = document.getElementById("dn_btn_modal");
var dn_btn = document.getElementById("dn_btn");
var close_span = document.getElementsByClassName("close")[0];

dn_btn.onclick = function () {
    dn_btn_modal.style.display = "block";
}

close_span.onclick = function () {
    dn_btn_modal.style.display = "none";
}
var mobile_menu_modal = document.getElementById("mobile_menu_modal");
var close_menu = document.getElementsByClassName("change")[0];
var hidden_mobile_menu = document.getElementsByClassName("mobile_menu")[0];
function open_menu(x) {
    x.classList.add("change");
    mobile_menu_modal.style.display = "block";
}
var close_menu = document.getElementsByClassName("container")[0];
var menu_close = document.getElementsByClassName("menu_close")[0];
menu_close.onclick = function () {
    close_menu.classList.remove("change");
    mobile_menu_modal.style.display = "none";
}