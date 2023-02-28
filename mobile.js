const btnMobile = document.getElementById('btn-mobile');


function toggleMenu(event) {

    if (event.type === 'touchstart') event.preventDefault();
    
    const nav = document.getElementById('nav');

    nav.classList.toggle('active');

    
}
 

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);






const menuItems = document.querySelectorAll('#menu a[href^="#"]');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToId)
}) 

function scrollToId(event){
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;
    
    window.scroll({
        top: to - 80,
        behavior: "smooth",
    })
}
    




