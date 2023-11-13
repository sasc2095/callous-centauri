/* Burgermenu */

const burgerMenu = document.querySelector(".burgermenu");
const navMenu = document.querySelector(".burger_nav");
const marginActive = document.querySelector("main");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
  marginActive.classList.toggle("active");
});

document.querySelector(".nav_link").addEventListener("click", remove);

function remove() {
  burgerMenu.classList.remove("active");
  navMenu.classList.remove("active");
  marginActive.classList.remove("active");
}

/* Search Bar */

const toggleSearch = (search, button) =>{
   const searchBar = document.getElementById(search),
         searchButton = document.getElementById(button)

   searchButton.addEventListener('click', () => {
       // Show-search class, so that the search bar expands
       searchBar.classList.toggle('show-search')
   })
}
toggleSearch('search-bar', 'search-button')
