/*------------------------Scrole-top button------------------------*/
    scrollTop();

    function scrollTop() {
        let toTop = document.getElementById('toTop');
        let start = {
            top: 0,
            behavior: 'smooth',
        }
        let sec1 = 600;

        (window.onscroll = () => {

            if(window.pageYOffset <= sec1){

                toTop.style.display = 'none';
            
            }  else{
    
                toTop.style.display = 'block';
            
            };
        
        })();

        toTop.addEventListener('click', scrollToTop);

        function scrollToTop(e) {
            
            e.preventDefault;
            window.scrollTo(start);
        }
    }
/*----------------------------------------------------------------*/


/*---------------Mobile navigation script---------------*/

executeMobilenav();

function executeMobilenav() {

    const menuToggle = document.querySelector("#menu-toggle");

    const mobileNavContainer = document.querySelector('#section2__mobile-nav');

    menuToggle.onclick = function () {

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



    galBtn.onclick = function () {
        overlay.style.display = 'flex';
        closeOver.style.display = "flex";
    }

    for (let img of imageLink) {

        img.onclick = function () {

            overlay.style.display = 'flex';
            closeOver.style.display = "flex";

        }
    }

    closeOver.onclick = function () {
        overlay.style.display = 'none';
        closeOver.style.display = 'none';

    }

    window.onclick = function (event) {
        if (event.target == overlay) {

            overlay.style.display = 'none';

        }
    }

    changePhoto();

    function changePhoto() {

        arrowLeft.addEventListener('click', moveBackward);

        arrowRight.addEventListener('click', moveForward);

        function moveBackward() {

            initImgNumber--;

            if (initImgNumber == 0) {

                initImgNumber = maxImgNumber;
            }

            image.setAttribute('src', '../prjFiles/img/item' + initImgNumber + '.png');

        }

        function moveForward() {


            initImgNumber++;

            if (initImgNumber > maxImgNumber) {

                initImgNumber = 1;

            }

            image.setAttribute('src', '../prjFiles/img/item' + initImgNumber + '.png');

        }

    }

    /*------------------------------------------------------------------------------------------------------------*/


}

/*----------------------------------------------------------Animation ----------------------------------------------------------*/

window.addEventListener('scroll', executeAnimation);
executeAnimation();

function executeAnimation() {

    let section8 = document.getElementsByClassName('section8__imgSection')[0];
    let section10 = document.getElementsByClassName('section10')[0];


    let section8Position = {

        top: window.pageYOffset + section8.getBoundingClientRect().top,
        left: window.pageXOffset + section8.getBoundingClientRect().left,
        right: window.pageXOffset + section8.getBoundingClientRect().right,
        bottom: window.pageYOffset + section8.getBoundingClientRect().bottom,

    };

    let section10Position = {
        top: window.pageYOffset + section10.getBoundingClientRect().top,
        left: window.pageXOffset + section10.getBoundingClientRect().left,
        right: window.pageXOffset + section10.getBoundingClientRect().right,
        bottom: window.pageYOffset + section10.getBoundingClientRect().bottom,
    };

    let windowPosition = {

        top: pageYOffset,
        left: pageXOffset,
        right: pageXOffset + document.documentElement.clientWidth,
        bottom: pageYOffset + document.documentElement.clientHeight,
    };


    if (section8Position.top < windowPosition.bottom && section8Position.left < windowPosition.right && section8Position.bottom > windowPosition.top && section8Position.right > windowPosition.left) {

        animate();
    }

    if (section10Position.top < windowPosition.bottom && section10Position.left < windowPosition.right && section10Position.bottom > windowPosition.top && section10Position.right > windowPosition.left) {

        animate();

    }

    function animate() {

        let iphone = document.getElementsByClassName('section8__iphone')[0];

        let ipad = document.getElementsByClassName('section8__ipad')[0];

        let macbook = document.getElementsByClassName('section8__macbook')[0];

        let section10Img = document.getElementsByClassName('section10__img')[0];

        iphone.classList.add('section8__iphone-seen');

        ipad.classList.add('section8__ipad-seen');

        macbook.classList.add('section8__macbook-seen');

        section10Img.classList.add('section10__img-seen');

    };


};

/*----------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------Form validation----------------------------------------------*/
validateForm();

function validateForm() {

    let inputs = document.querySelectorAll('input[data-rule]');
    let labels = document.getElementsByClassName('form__label');

    for (let input of inputs) {

        input.addEventListener('blur', function validate() {

            let rule = this.dataset.rule;

            let value = this.value;

            let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            let check;

            switch (rule) {

                case 'firstName':
                    check = ' ' && isNaN(value);
                    break;

                case 'lastName':
                    check = ' ' && isNaN(value);
                    break;

                case 'email':
                    check = ' ' && regex.test(value);
                    break;
            }

            this.classList.remove('invalid');
            this.classList.remove('valid');

            if (check) {

                this.classList.add('valid');

            } else {

                this.classList.add('invalid');

            }



        });


    }



}