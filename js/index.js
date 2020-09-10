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


window.addEventListener('scroll', executeAnimation);
executeAnimation();

function executeAnimation() {

    let section8 = document.getElementsByClassName('section8__imgSection')[0];

    

    let section8Position = {

        top: window.pageYOffset + section8.getBoundingClientRect().top,
        left: window.pageXOffset + section8.getBoundingClientRect().left,
        right: window.pageXOffset + section8.getBoundingClientRect().right,
        bottom: window.pageYOffset + section8.getBoundingClientRect().bottom,
        
    };


    let windowPosition = {

        top: pageYOffset,
        left: pageXOffset,
        right: pageXOffset + document.documentElement.clientWidth,
        bottom: pageYOffset + document.documentElement.clientHeight,
    };


    if(section8Position.top < windowPosition.bottom && section8Position.left < windowPosition.right && section8Position.bottom > windowPosition.top && section8Position.right > windowPosition.left) {

        animate();
    }
    
    

    function animate(){

        let iphone = document.getElementsByClassName('section8__iphone')[0];

        let ipad = document.getElementsByClassName('section8__ipad')[0];

        let macbook = document.getElementsByClassName('section8__macbook')[0];

        iphone.classList.toggle('section8__iphone-seen');

        ipad.classList.toggle('section8__ipad-seen');

        macbook.classList.toggle('section8__macbook-seen');

    };


};
