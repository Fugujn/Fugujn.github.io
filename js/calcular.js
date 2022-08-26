//Splash screen-js
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo_header');
let logoSpan = document.querySelectorAll('.logo_slide');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            })
        }, 2000)

        setTimeout(() => {
            intro.style.top = '-100vh'
        }, 2300)
    })
})

/*click Search form */
let search = document.querySelector(".search_form");

document.querySelector("#search_btn").onclick = () => {
    search.classList.toggle("active");
}
/*click menu mobile*/
let menuMobile = document.querySelector(".list_item");

document.querySelector("#menu_btn").onclick = () => {
    menuMobile.classList.toggle("active");
}
/*current change*/
function tinh() {
    let st = parseFloat(document.getElementById("stid").value);
    let dv = document.getElementById("dvid").value;
    
    
    let n = 0;
    switch(dv) {
        case "eur":
            n = st / 26000;
            break;
        case "usd":
            n = st / 22000;
            break;
        case "aud":
            n = st/ 16000;
            break;
    }

    let kq = document.getElementById("kq2");
    kq.innerHTML = `<h1 style="text-transform: uppercase">${st} VND = ${n.toFixed(2)} ${dv}</h1>`;
}
let resultBtn = document.querySelector(".btn");
let inpt1 = document.getElementById("stid")
resultBtn.addEventListener("click", ()=>{
    let Val = parseFloat(inpt1.value);

    if(isNaN(Val)){
        alert("Enter a Number");
    }

});

 //back to top
const backToTopbtn =  document.querySelector("#back_to_top");
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 500) {  //show backtotop
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

