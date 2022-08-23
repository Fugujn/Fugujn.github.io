/*click Search form */
let search = document.querySelector(".search_form");

document.querySelector("#search_btn").onclick = () => {
    search.classList.toggle("active");
}

let menuMobile = document.querySelector(".list_item");

document.querySelector("#menu_btn").onclick = () => {
    menuMobile.classList.toggle("active");
}