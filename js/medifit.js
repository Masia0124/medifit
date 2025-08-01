let page = document.getElementById("Page");
let menu = document.getElementById("menu");
let nav_btn_open = document.getElementById("nav-btn-open");
let nav_mobile = document.getElementById("nav-mobile");
let close_mobile = document.getElementById("close-mobile");
let header_logo = document.getElementById("header_logo");
let search = document.getElementById("search");
let input_submit = document.getElementById("input_submit");
let search_icon = document.getElementById("search_icon");
let search_non_active = document.getElementById(".search_non_active");
let page_mobile = document.getElementById("page_mobile");
let x_mobile = document.getElementById("x_mobile");
let submenu_mobile = document.getElementById("submenu_mobile");
let nav_mobile_menu = document.getElementById("nav_mobile_menu");
let massif_a_menu = document.getElementsByClassName("massif_a_menu");
let clients_defolt = document.getElementsByClassName("clients_defolt");
let clients_feedback = document.getElementsByClassName("clients_feedback");






page.addEventListener("click", () => {
   
    if (menu.classList.contains("disp") == true) {
        menu.classList.remove("disp");
    } else {
        menu.classList.add("disp");
    }
})

menu.addEventListener("mouseleave", hideMenu);
function hideMenu() {
    menu.classList.add("disp");
}

nav_btn_open.addEventListener("click", () => {
    nav_mobile.classList.add("nav-mobile_active", "nav-mobile_active_r-l"
    );
})

close_mobile.addEventListener("click", () => {
    setTimeout(() => {
        nav_mobile.classList.remove("nav-mobile_active", "nav-mobile_active_r-l");
    }, 100* massif_a_menu.length)
    
})

search_icon.addEventListener("click", () => {
    search.classList.add("search_active");
}) 

page_mobile.addEventListener("click", () => {
    submenu_mobile.classList.add("submenu_mobile_active");
})

x_mobile.addEventListener("click", () => {
    submenu_mobile.classList.remove("submenu_mobile_active");
    
})

nav_btn_open.addEventListener("click", () => {
    for (let i = 1; i <= massif_a_menu.length; i++) {
        setTimeout(() => {
            massif_a_menu[i-1].classList.add("nav-mobile_menu_active_li");
        }, i*100);
    }
})

close_mobile.addEventListener("click", () => {
    for (let i = 1; i <= massif_a_menu.length; i++) {
        setTimeout(() => {
            massif_a_menu[i - 1].classList.remove("nav-mobile_menu_active_li");
        }, i*100);
    }
})

clients_defoltArray = Array.from(clients_defolt);
clients_feedbackArray = Array.from(clients_feedback);
clients_defoltArray.forEach((element, index) => {
    if (element.classList.contains('clients_activ')) {
        clients_active_index = index;
        console.log('In if: ' + clients_active_index)
    } 
    element.addEventListener("click", () => {
        clients_defoltArray[clients_active_index].classList.remove("clients_activ");
        clients_feedbackArray[clients_active_index].classList.remove("clients_feedback_active");
        clients_defoltArray[index].classList.add("clients_activ");
        clients_feedbackArray[index].classList.add("clients_feedback_active");
        clients_active_index = index;
        console.log("Active element: " + clients_active_index + "Thid element: " + index)
    })
});
