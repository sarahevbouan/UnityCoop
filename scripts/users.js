const searchButton = document.querySelector('.user-search-btn');
const userSearchBar = document.querySelector('.search-bar');

// User search button
searchButton.addEventListener('click', (e) => {
    if(userSearchBar){
    let searchList = document.querySelectorAll(".searchable-item");
    searchFeature(userSearchBar, searchList);
    }
});