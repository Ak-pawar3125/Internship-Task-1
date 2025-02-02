const sidebar = document.querySelector(".sidebar");

let dropdown = document.querySelector(".dropdown");
let dropdownMenu = document.querySelector(".dropdown-menu");
function showSidebar(){
    sidebar.style.display = 'flex';
}
function hideSidebar(){
    sidebar.style.display = 'none';
}

    dropdown.addEventListener("mouseenter", function () {
        dropdownMenu.style.display = "block";
    });

    dropdown.addEventListener("mouseleave", function () {
        dropdownMenu.style.display = "none";
    });
