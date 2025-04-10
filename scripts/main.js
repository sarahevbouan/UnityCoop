//Sidebar generation
sidebarGenerator();

document.addEventListener("DOMContentLoaded", () => {
//Active page
    let menuLists = document.querySelectorAll(".sidebar-nav li>a");
    menuLists.forEach(menuList => {
        if(window.location.href === menuList.href){
            menuList.parentElement.classList.add("active");
        }
        else{
            menuList.parentElement.classList.remove("active");
        }
    });

//Mobile menu drawer
    let menuHamburger = document.querySelector(".menu-hamburger");
    let condensedMenu = document.querySelector(".sidebar-nav");
    let closeMenuBtn = document.querySelector(".close-menu-btn");

    menuHamburger.addEventListener("click", (e) => {
        condensedMenu.classList.add("condensed-nav-menu");
        
    });

    closeMenuBtn.addEventListener("click", () => {
        condensedMenu.classList.remove("condensed-nav-menu");
    });


// Search feature
    let searchBar = document.getElementById("search-bar");
    let searchList = document.querySelectorAll(".user-name");

    if(searchBar !== null){
    searchBar.addEventListener('keyup', () => {
        searchList.forEach(listItem => {
            let searchValue = searchBar.value.toLowerCase();
            let listContent = listItem.textContent.toLowerCase();

            if(listContent.includes(searchValue)){
                listItem.closest("tr").style.display = 'table-row';
            }
            else{
                listItem.closest("tr").style.display = 'none';
            }   
        });
    });
    }
});