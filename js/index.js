/*---------------Mobile navigation script---------------*/

executeMobilenav();

function executeMobilenav(){

        const menuToggle = document.querySelector("#menu-toggle");

        const mobileNavContainer =  document.querySelector('#section2__mobile-nav');

        menuToggle.onclick = function(){ 

            this.classList.toggle("menu-icon-active");
            
            mobileNavContainer.classList.toggle('section2__mobile-nav-active');
            
        }

    }
/*---------------------------------------------------*/






/*-----------------Gallery script--------------------*/

executeGallery();

function executeGallery() {

        const galBtn = document.getElementsByClassName("section7__btn")[0];
        
        let overlay = document.getElementById('overlay');

        let arrowLeft = document.getElementById('left-arow');

        let bg = document.getElementsByClassName('gallery__image')[0];
        
        let arrowRight =document.getElementById('right-arrow');
        
        let closeOver = document.getElementById("close");

        galBtn.onclick = function() {
            
            overlay.classList.add("section7__overlay");
            closeOver.style.display = "block";
        }

        closeOver.onclick = function() {

            overlay.classList.remove("section7__overlay");

        }

        window.onclick = function(event) {
            if(event.target == overlay) {

            overlay.classList.remove("section7__overlay");

            }
        }

    if(overlay.contains("section7__overlay")) {

        closeOver.style.display = "none";
    }
}

/*--------------------------------------------------------------------------------*/