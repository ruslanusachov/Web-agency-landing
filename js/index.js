const menuToggle = document.querySelector("#menu-toggle");

const mobileNavContainer =  document.querySelector('#section2__mobile-nav');

menuToggle.onclick = function(){ 

    this.classList.toggle("menu-icon-active");
    mobileNavContainer.classList.toggle('section2__mobile-nav-active')
    
}

