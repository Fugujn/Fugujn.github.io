/*slide show auto*/
var slideWidth = document.getElementsByClassName("slide")[0].clientWidth;
var slideShow = document.getElementsByClassName("slide_show")[0];
var Img = slideShow.getElementsByTagName("img");
var max = slideWidth * Img.length;
max -= slideWidth;
var slide = 0;

function Next(){
    if(slide < max) slide += slideWidth;
    else slide = 0;
    slideShow.style.marginLeft = '-' + slide + 'px';
}
function Previous(){
    if(slide == 0) slide = max;
    else slide -= slideWidth;
    slideShow.style.marginLeft = '-' + slide + 'px';
}
setInterval(function() {
    Next();
}, 4000);
/*click Search form */
let searchForm = document.querySelector(".search_form");

document.querySelector("#search_btn").onclick = () => {
    searchForm.classList.toggle("active");
}

window.onclick = () => {
    searchForm.classList.remove("active");
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