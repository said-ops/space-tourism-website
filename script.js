//menu elements
const icon = document.querySelector('.logo-icon');
const menu = document.querySelector('nav ul');

//=====================function to handle the nav links

//======================nav li elements

const navLinks = document.querySelectorAll('nav ul li ');

    document.addEventListener('DOMContentLoaded', () => {

        //menu event listener
        icon.addEventListener('click', function (){

            if(menu.style.display === 'none'){

                menu.style.display ='flex';
                menu.style.width = '73%';
                icon.setAttribute('src','./assets/shared/icon-close.svg');

            }
            else {

                menu.style.width = '0%';
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

                                    //load html template
                                    const homeConatainer = document.querySelector('main');

                    homeConatainer.innerHTML = '';
                    homeConatainer.innerHTML =` <section class="fixed-container">
                    <span class="small-heading"><span>01</span> Pick your destination</span>
                    <div class="dest-container" id="dest-container">
                      <!--destination template here-->
                      <div class="dest-image">
                        <img src="./assets/destination/image-moon.png" alt="moon picture" id="planet-img">
                      </div>
                      <div class="dest-infos">
                        <div class="infos-wrapper">
                          <ul class="planet-names">
                            <li data-value="Moon">moon</li>
                            <li data-value="Mars">mars</li>
                            <li data-value="Europa">europa</li>
                            <li data-value="Titan">titan</li>
                          </ul>
                          <h2 class="planet-name" id="planet-name">moon</h2>
                          <p class="planet-desc" id="planet-desc">See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
                            regain perspective and come back refreshed. While you’re there, take in some history 
                            by visiting the Luna 2 and Apollo 11 landing sites.</p>
                            <hr>
                            <div class="metrics">
                              <div class="avrg-distance">
                                <div class="distance-text">Avg. distance</div>
                                <div class="distance" id="distance">384,400 km</div>
                              </div>
                              <div class="travel-time">
                                <div class="travel-text">Est. travel time</div>
                                <div class="time" id="travel">3 days</div>
                              </div>
                            </div>
                        </div>
                      </div>
              
                    </div>
                  </section>`;


                  //adding event listners to planet names in distination page
                                
                  const planetNames = document.querySelectorAll('.planet-names li');

                  planetNames.forEach(element => {

                      element.addEventListener('click', async () => {
                        
                        // alert('good');

                        //output elemnt to desplay informations
                        const planetImage = document.getElementById('planet-img');
                        const planetName = document.getElementById('planet-name');
                        const planetDesc = document.getElementById('planet-desc');
                        const planetDistance = document.getElementById('distance');
                        const planetTravel = document.getElementById('travel');

                        //getting data from json 

                        const response = await fetch('data.json');
                        const data = await response.json();

                        const planets = data.destinations;

                        // console.log(planets[0].description);
                        
                        //loop through every planet and test agains data-value and get descs
                        planets.forEach((planet,index) => {

                                    if(planet.name === element.getAttribute('data-value')){
                                        planetName.textContent = planet.name;
                                        planetDesc.textContent = planet.description;
                                        planetDistance.textContent = planet.distance;
                                        planetTravel.textContent = planet.travel;
                                        planetImage.setAttribute('src',planet.images.png);
                                    }
                        });




                      });
                      
                  });

                                    
                    
                            });
                                
                                break;
                            
                             case 'home':
                                 
                                li.addEventListener('click' , () => {

                                    if(window.innerWidth > 770){

                                        document.body.style.background = 'url(./assets/home/background-home-desktop.jpg)';
                                        document.body.style.backgroundSize = '100% 100%';

                                    }else if(window.innerWidth < 580){

                                        document.body.style.background = 'url(./assets/home/background-home-mobile.jpg)';
                                        document.body.style.backgroundSize = 'cover';

                                    }else if(window.innerWidth < 770 && window.innerWidth >580){

                                        document.body.style.background = 'url(./assets/home/background-home-tablet.jpg)';
                                        document.body.style.backgroundSize = 'cover';

                                    }

                                    //load tepmlate
                                    const homeConatainer = document.querySelector('main');

                                    homeConatainer.innerHTML = '';
                                    homeConatainer.innerHTML =`<section class="home-container" id="main">
                                    <div class="home-text">
                                      <span class="small-heading">So, you want to travel to</span>
                                      <h1 class="home-heading">Space</h1>
                                      <p class="home-prg">Let’s face it; if you want to go to space, you might as well genuinely go to 
                                        outer space and not hover kind of on the edge of it. Well sit back, and relax 
                                        because we’ll give you a truly out of this world experience!</p>
                                    </div>
                                    <div class="home-button">
                                      <button class="home-btn">Explore</button>
                                    </div>
                                  </section>`;

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
                                    const homeConatainer = document.querySelector('main');

                                    homeConatainer.innerHTML = '';
                                    homeConatainer.innerHTML =`<section class="home-container" id="main">
                                    <div class="home-text">
                                      <span class="small-heading">So, you want to travel to</span>
                                      <h1 class="home-heading">Space</h1>
                                      <p class="home-prg">Let’s face it; if you want to go to space, you might as well genuinely go to 
                                        outer space and not hover kind of on the edge of it. Well sit back, and relax 
                                        because we’ll give you a truly out of this world experience!</p>
                                    </div>
                                    <div class="home-button">
                                      <button class="home-btn">Explore</button>
                                    </div>
                                  </section>`;

                            });
                                break;
                        }


                    });

                   
                        



    });

