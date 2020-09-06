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
                
        let closeOver = document.getElementById("close");

        let image = document.getElementsByClassName('gallery__image')[0];
    
        let arrowLeft = document.getElementById('left-wrapper');

        let arrowRight = document.getElementById('right-wrapper');

        let imageLink = document.getElementsByClassName('section7__link');

        let initImgNumber = 1;

        let maxImgNumber = 6;



        galBtn.onclick = function() {
            overlay.style.display = 'flex';
            closeOver.style.display = "flex";
        }

        for (let img of imageLink)  {

            img.onclick = function() {

                overlay.style.display = 'flex';
                closeOver.style.display = "flex";

            }
        }

        closeOver.onclick = function() {
            overlay.style.display = 'none';
            closeOver.style.display = 'none';

        }

        window.onclick = function(event) {
            if(event.target == overlay) {
            
                overlay.style.display = 'none';

            }
        }

        changePhoto();

        function changePhoto(){

            arrowLeft.addEventListener('click', moveBackward);
    
            arrowRight.addEventListener('click', moveForward);
    
           function moveBackward() {
    
             initImgNumber--;

             if(initImgNumber == 0) {

                initImgNumber = maxImgNumber;
             }

             image.setAttribute('src', '../prjFiles/img/item' + initImgNumber + '.png');
    
           }
    
           function moveForward(){


            initImgNumber++;

            if(initImgNumber > maxImgNumber) {

                initImgNumber = 1;

            }

            image.setAttribute('src', '../prjFiles/img/item' + initImgNumber + '.png');

           }

        }

        /*------------------------------------------------------------------------------------------------------------*/
    

}


