//Sidebar generation on page load
sidebarGenerator();

//Functions
let mobileNavSearchIcon = document.getElementById('mobile-nav-search-icon');
let headerNavSearchIcon = document.getElementById('header-nav-search-icon');    
const searchIconDisplay = () => {
    if(['Overview', 'Users', 'Settings', 'Loans'].includes(document.title)){
        mobileNavSearchIcon.style.display = 'none';
        if(headerNavSearchIcon){
            headerNavSearchIcon.style.display = 'none';
        }
    }
}

const insertInputField = (searchIcon) => {
    let searchBar = document.createElement('input');
    searchBar.type = 'search';
    searchBar.classList.add('search-bar');
    searchIcon.style.display = 'none';
    searchIcon.parentElement.appendChild(searchBar);
}

const searchFeature = (searchBar, searchList) => {
    searchList.forEach(listItem => {
        let searchValue = searchBar.value.toLowerCase();
        let listContent1 = listItem.querySelector('.search-term1').textContent.toLowerCase();
        let listContent2 = listItem.querySelector('.search-term2').textContent.toLowerCase();
        if(listContent1.includes(searchValue) || listContent2.includes(searchValue)){
            if(listItem.tagName === 'TR'){
                listItem.style.display = 'table-row';
            }
            else {
                listItem.style.display ='flex';
            }
            }
        else {
            listItem.style.display = 'none';
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    //Hide search icon on certain pages
    searchIconDisplay();

    //Replace visible search icon with input field when clicked
    let searchIcons = document.querySelectorAll('.search-icon');
    searchIcons.forEach(searchIcon => {
        searchIcon.addEventListener('click', () => {
            insertInputField(searchIcon);
        })
    });

    //Active page
    let menuLists = document.querySelectorAll(".sidebar-nav li>a");
    menuLists.forEach(menuList => {
        if(document.title.toLowerCase() === menuList.parentElement.id){
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
});

//Search feature
window.addEventListener('keyup', e => {
    if(e.target.classList.contains('search-bar')){
    let searchBar = e.target;
    let searchList = document.querySelectorAll(".searchable-item");
    searchFeature(searchBar, searchList);
    }
});