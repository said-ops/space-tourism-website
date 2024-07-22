//menu elements
const icon = document.querySelector('.logo-icon');
const menu = document.querySelector('nav ul');

//=====================function to handle the nav links

//======================nav li elements

const navLinks = document.querySelectorAll('nav ul li ');


function linkHandl() {

    navLinks.forEach(link, () => {

//=========================links event listner

        link.addEventListener('click', () => {

            switch (link.getAttribute('data-value')) {

                //=================home link

                case 'home':

                    //change background image based on screen size

                    if(window.innerWidth > 770){

                        document.body.style.background = 'url(./assets/home/background-home-desktop.jpg)';
                        document.body.style.backgroundSize = 'cover';

                    }else if(window.innerWidth < 580){

                        document.body.style.background = 'url(./assets/home/background-home-mobile.jpg)';
                        document.body.style.backgroundSize = 'cover';

                    }else if(window.innerWidth < 770 && window.innerWidth >580){

                        document.body.style.background = 'url(./assets/home/background-home-tablet.jpg)';
                        document.body.style.backgroundSize = 'cover';

                    }

                    //implement html template to the body

                    const homeConatainer = document.querySelector('main');

                    homeConatainer.innerHTML = '';
                    homeConatainer.innerHTML =``;
                    
                    break;
            
                default:
                    break;
            }

        });

    });

}
    document.addEventListener('DOMContentLoaded', () => {

        //menu event listener
        icon.addEventListener('click', function (){

            if(menu.style.display === 'none'){

                menu.style.display = 'flex';
                icon.setAttribute('src','./assets/shared/icon-close.svg');

            }
            else {

                menu.style.display = 'none';
                icon.setAttribute('src','./assets/shared/icon-hamburger.svg');
                
            }
            
            //resize event
            window.addEventListener('resize', () => {

                if(window.innerWidth > 580){

                    menu.style.display = 'flex';
    
                }
                if(window.innerWidth <580 ){
                    menu.style.display = 'none';
                    icon.setAttribute('src','./assets/shared/icon-hamburger.svg');
                }

            });

        });
        //end menu event listener

        //==================destination section here==========================================================

                                //==========================================================================
                    //links emlementaion to change background image for every section and screen size
                    document.querySelectorAll('li').forEach( li =>  {

                        //change background four each link 

                        switch (li.getAttribute('data-value')) {
                            case 'destination':

                                li.addEventListener('click' , () => {

                                    if(window.innerWidth > 770){

                                        document.body.style.background = 'url(./assets/destination/background-destination-desktop.jpg)';
                                        document.body.style.backgroundSize = 'cover';

                                    }else if(window.innerWidth < 580){

                                        document.body.style.background = 'url(./assets/destination/background-destination-mobile.jpg)';
                                        document.body.style.backgroundSize = 'cover';

                                    }else if(window.innerWidth < 770 && window.innerWidth >580){

                                        document.body.style.background = 'url(./assets/destination/background-destination-tablet.jpg)';
                                        document.body.style.backgroundSize = 'cover';

                                    }

                                    
                    
                            });
                                
                                break;
                            
                             case 'home':
                                 
                                li.addEventListener('click' , () => {

                                    if(window.innerWidth > 770){

                                        document.body.style.background = 'url(./assets/home/background-home-desktop.jpg)';
                                        document.body.style.backgroundSize = 'cover';

                                    }else if(window.innerWidth < 580){

                                        document.body.style.background = 'url(./assets/home/background-home-mobile.jpg)';
                                        document.body.style.backgroundSize = 'cover';

                                    }else if(window.innerWidth < 770 && window.innerWidth >580){

                                        document.body.style.background = 'url(./assets/home/background-home-tablet.jpg)';
                                        document.body.style.backgroundSize = 'cover';

                                    }

                            });

                                break;

                            case 'crew' :
                                
                                li.addEventListener('click' , () => {

                                    if(window.innerWidth > 770){

                                        document.body.style.background = 'url(./assets/crew/background-crew-desktop.jpg)';
                                        document.body.style.backgroundSize = 'cover';

                                    }else if(window.innerWidth < 580){

                                        document.body.style.background = 'url(./assets/crew/background-crew-mobile.jpg)';
                                        document.body.style.backgroundSize = 'cover';

                                    }else if(window.innerWidth < 770 && window.innerWidth >580){

                                        document.body.style.background = 'url(./assets/crew/background-crew-tablet.jpg)';
                                        document.body.style.backgroundSize = 'cover';
                                    }

                            });

                            break;

                            case 'tech':

                                li.addEventListener('click' , () => {

                                    if(window.innerWidth > 770){

                                        document.body.style.background = 'url(./assets/technology/background-technology-desktop.jpg)';
                                        document.body.style.backgroundSize = 'cover';

                                    }else if(window.innerWidth < 580){

                                        document.body.style.background = 'url(./assets/technology/background-technology-mobile.jpg)';
                                        document.body.style.backgroundSize = 'cover';

                                    }else if(window.innerWidth < 770 && window.innerWidth >580){

                                        document.body.style.background = 'url(./assets/technology/background-technology-tablet.jpg)';
                                        document.body.style.backgroundSize = 'cover';

                                    }

                            });
                              
                            break;

                            default:
                                li.addEventListener('click' , () => {

                                    if(window.innerWidth > 770){

                                        document.body.style.background = 'url(./assets/home/background-home-desktop.jpg)';
                                        document.body.style.backgroundSize = 'cover';

                                    }else if(window.innerWidth < 580){

                                        document.body.style.background = 'url(./assets/home/background-home-mobile.jpg)';
                                        document.body.style.backgroundSize = 'cover';

                                    }else if(window.innerWidth < 770 && window.innerWidth >580){

                                        document.body.style.background = 'url(./assets/home/background-home-tablet.jpg)';
                                        document.body.style.backgroundSize = 'cover';

                                    }

                            });
                                break;
                        }


                    });




    });

