const navtoggle = document.querySelector('.active-toggle');
const navbarItems = document.querySelector('.nav-items');
const navbar = document.querySelector('.big-nav');
const closebutton = document.querySelector('.close-button');

closebutton.addEventListener('click',()=>{
    navbarItems.classList.remove('active');
})


navtoggle.addEventListener('click',()=>{
    navbarItems.classList.toggle('active');
})

window.onscroll = () => {
    if (window.scrollY > 200) {
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
};