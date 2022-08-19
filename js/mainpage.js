$(document).ready(function() {
    $(".slide").slick({
        infinite: true,
        slidestoShow: 1,
        slidestoScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        
        dots: true,
        cssEase: 'linear',
        prevArrow:"<button type='button' class='slick-prev slick-arrows'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next slick-arrows'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    arrows: false,
                    draggable: true,
                    fade: false,
                    dots: true,
                }
            }
        ]    
    });
});

$(document).ready(function() {
    $(".slide_intro_product").slick({
        slidestoShow: 1,
        slidestoScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        cssEase: 'linear',
    });
});

let menuMobile = document.querySelector(".list_item");

document.querySelector("#menu_btn").onclick = () => {
    menuMobile.classList.toggle("active");
}
/*click Search form */
let searchForm = document.querySelector(".search_form");

document.querySelector("#search_btn").onclick = () => {
    searchForm.classList.toggle("active");
}

/*See more things*/
var seeMore = document.querySelector(".js_see_more");
var More = document.querySelectorAll(".news_see_more");
var d = 0;
seeMore.addEventListener("click", function() {
    for (i = 0; i < 4; i++)
        More[d++].style.display = "block";
    if (d == More.length) seeMore.style.display = "none";
})


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        }
    }
    }
}
/*Back to top button*/
const backToTopbtn =  document.querySelector("#back_to_top");
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 1000) {  //show backtotop
        if(!backToTopbtn.classList.contains("button_entrance")) {
            backToTopbtn.classList.remove("button_exit");
            backToTopbtn.classList.add("button_entrance");

            backToTopbtn.style.display = "block";
        }
    }
    else { //hidden backtotop
        if (backToTopbtn.classList.contains("button_entrance")) {
            backToTopbtn.classList.remove("button_entrance");
            backToTopbtn.classList.add("button_exit");
            setTimeout( function() {
                backToTopbtn.style.display = "none";
            }, 200);
        }
    }
    backToTopbtn.addEventListener("click", backtotop);

    function backtotop() {
        window.scrollTo(0,0);
    }
}