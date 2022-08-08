function init() {
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
}