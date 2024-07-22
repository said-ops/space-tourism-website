//menu 
const icon = document.querySelector('.logo-icon');
const menu = document.querySelector('nav ul');
console.log(icon,menu);
 
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

        


    });

