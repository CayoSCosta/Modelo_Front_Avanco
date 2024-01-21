/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       // Add show-menu class to nav menu
       nav.classList.toggle('show-menu')

       // Add show-icon to show and hide the menu icon
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu')


// SECTION PRODUTOS INDEX
// =============================================================================

const $simpleCarousel = document.querySelector(".js-carousel--simple");

new Glider($simpleCarousel, {
  slidesToShow: 5,
  slidesToScroll: 1,
  draggable: true,
  dots: ".js-carousel--simple-dots",
  arrows: {
    prev: ".js-carousel--simple-prev",
    next: ".js-carousel--simple-next",
  },
  scrollLock: true,
  scrollLockDelay: 100,
  rewind: true,
  responsive: [
    {
        breakpoint: 1030,
        settings: {
          slidesToShow: 5,
        },
      },
    {
        breakpoint: 922,
        settings: {
          slidesToShow: 4,
        },
      },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
      },
    },
      {
        breakpoint:425,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint:320,
        settings: {
          slidesToShow: 1,
        },
      },
]
});






//novo slider
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 7500)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    itemActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 7500)
}



        
