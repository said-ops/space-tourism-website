//menu elements
const icon = document.querySelector('.logo-icon');
const menu = document.querySelector('nav ul');

//=====================function to handle the nav links

//======================nav li elements

const navLinks = document.querySelectorAll('nav ul li ');

    document.addEventListener('DOMContentLoaded', () => {

      document.querySelector('.home-btn').addEventListener('click', () => {

        navLinks[1].click();

      });

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
                                        document.body.classList.remove('overlay');
                                    }else if(window.innerWidth < 580){

                                        document.body.style.background = 'url(./assets/destination/background-destination-mobile.jpg)';
                                        document.body.style.backgroundSize = 'cover';
                                        document.body.classList.remove('overlay');

                                    }else if(window.innerWidth < 770 && window.innerWidth >580){

                                        document.body.style.background = 'url(./assets/destination/background-destination-tablet.jpg)';
                                        document.body.style.backgroundSize = 'cover';
                                        document.body.classList.remove('overlay');

                                    }

                                    navLinks.forEach(item => {
                                    
                                        item.style.setProperty('--li-width', '0%');
                                    });
                                    li.style.setProperty('--li-width','100%');

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
                  planetNames[0].style.setProperty('--li-width', '100%');

                  planetNames.forEach(element => {

                      element.addEventListener('click', async () => {

                        planetNames.forEach(item => {
                                    
                            item.style.setProperty('--li-width', '0%');
                        });
                        element.style.setProperty('--li-width','100%');
                        
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
                                        document.body.classList.remove('overlay');

                                    }else if(window.innerWidth < 580){

                                        document.body.style.background = 'url(./assets/home/background-home-mobile.jpg)';
                                        document.body.style.backgroundSize = 'cover';
                                        document.body.classList.remove('overlay');

                                    }else if(window.innerWidth < 770 && window.innerWidth >580){

                                        document.body.style.background = 'url(./assets/home/background-home-tablet.jpg)';
                                        document.body.style.backgroundSize = 'cover';
                                        document.body.classList.remove('overlay');

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

                                  navLinks.forEach(item => {
                                    
                                    item.style.setProperty('--li-width', '0%');
                                });
                                li.style.setProperty('--li-width','100%');

                            });

                                break;

                            case 'crew' :
                                
                                li.addEventListener('click' , () => {

                                    if(window.innerWidth > 770){

                                        document.body.style.background = 'url(./assets/crew/background-crew-desktop.jpg)';
                                        document.body.style.backgroundSize = 'cover';
                                        document.body.classList.add('overlay');

                                    }else if(window.innerWidth < 580){

                                        document.body.style.background = 'url(./assets/crew/background-crew-mobile.jpg)';
                                        document.body.style.backgroundSize = 'cover';
                                        document.body.classList.add('overlay');

                                    }else if(window.innerWidth < 770 && window.innerWidth >580){

                                        document.body.style.background = 'url(./assets/crew/background-crew-tablet.jpg)';
                                        document.body.style.backgroundSize = 'cover';
                                        document.body.classList.add('overlay');
                                    }
                                    navLinks.forEach(item => {
                                    
                                        item.style.setProperty('--li-width', '0%');
                                    });
                                    li.style.setProperty('--li-width','100%');
    
                                

                                    

                                    //load template
                            const main = document.querySelector('main');
                            main.innerHTML = '';
                            main.innerHTML = `<section class="fixed-container">
                            <span class="small-heading"><span>01</span> Meet your crew</span>
                            <div class="crew-container">
                              <div class="crew-infos">
                                <span class="role" id="role">commander</span>
                                <h3 class="crew-name" id="crew-name">Douglas Hurley</h3>
                                <p class="crew-bio" id="crew-bio">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
                                  and former NASA astronaut. He launched into space for the third time as 
                                  commander of Crew Dragon Demo-2.</p>
                                  <div class="crew-btns">
                                    <span class="crew-btn" data-value="Douglas Hurley"></span>
                                    <span class="crew-btn" data-value="Mark Shuttleworth"></span>
                                    <span class="crew-btn" data-value="Victor Glover"></span>
                                    <span class="crew-btn" data-value="Anousheh Ansari"></span>
                                  </div>
                              </div>
                              <div class="crew-img">
                                <img src="./assets/crew/image-douglas-hurley.png" alt="crew image" id="crew-image">
                              </div>
                            </div>
                          </section>`;

                          //crew buttons eveents listners

                          const crewButtons = document.querySelectorAll('.crew-btn');
                          crewButtons[0].classList.add('crew-btn-clicked');
                          crewButtons.forEach(button => {

                                
                                

                            button.addEventListener('click', async function () {

                                crewButtons.forEach(btn => {
                                    
                                    btn.classList.remove('crew-btn-clicked');
                                });

                                button.classList.add('crew-btn-clicked');

                                const response = await fetch('data.json');
                                const data = await response.json();

                                const crew = data.crew;
                                

                                //crew output elemnts
                                const crewRole = document.getElementById('role');
                                const crewName = document.getElementById('crew-name');
                                const crewBio = document.getElementById('crew-bio');
                                const crewImage = document.getElementById('crew-image');
                                

                                crew.forEach(member => {

                                    if(member.name === button.getAttribute('data-value')){
                                        
                                
                                    console.log(member.name);
                                    crewRole.textContent = member.role;
                                    crewName.textContent = member.name;
                                    crewBio.textContent = member.bio;
                                    crewImage.setAttribute('src' , member.images.png);
                                
                                    }

                                });


                            });

                          });

                          

                            });

                            break;

                            case 'tech':

                                li.addEventListener('click' , () => {

                                    if(window.innerWidth > 770){

                                        document.body.style.background = 'url(./assets/technology/background-technology-desktop.jpg)';
                                        document.body.style.backgroundSize = 'cover';
                                        document.body.classList.remove('overlay');

                                    }else if(window.innerWidth < 580){

                                        document.body.style.background = 'url(./assets/technology/background-technology-mobile.jpg)';
                                        document.body.style.backgroundSize = 'cover';
                                        document.body.classList.remove('overlay');

                                    }else if(window.innerWidth < 770 && window.innerWidth >580){

                                        document.body.style.background = 'url(./assets/technology/background-technology-tablet.jpg)';
                                        document.body.style.backgroundSize = 'cover';
                                        document.body.classList.remove('overlay');

                                    }

                                    navLinks.forEach(item => {
                                    
                                        item.style.setProperty('--li-width', '0%');
                                    });
                                    li.style.setProperty('--li-width','100%');

                                    //loading html template
                                    const main = document.querySelector('main');
                                    
                                    main.innerHTML = '';
                                    main.innerHTML = `<section class="tech-wrapper">
                                    <span class="small-heading tech-title"><span>03</span> Space launch 101</span>
                                    <div class="tech-container">
                                      <div class="tech-text">
                                        <div class="tech-btns">
                                          <span class="tech-btn" id="tech-1" data-value="Launch vehicle">1</span>
                                          <span class="tech-btn" id="tech-2" data-value="Spaceport">2</span>
                                          <span class="tech-btn" id="tech-3" data-value="Space capsule">3</span>
                                        </div>
                                        <div class="tech-infos">
                                          <div class="role">The terminology...</div>
                                          <div class="crew-name" id="tech-name">Launch vehicle</div>
                                          <div class="crew-bio" id="tech-desc">A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
                                            payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
                                            WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
                                            it's quite an awe-inspiring sight on the launch pad!</div>
                                        </div>
                                      </div>
                                      <div class="tech-img">
                                        <img src="./assets/technology/image-launch-vehicle-portrait.jpg" id="tech-img" alt="launch vehicle">
                                      </div>
                                    </div>
                                  </section>`;

                                  //setting tech buttons

                                  const techButtons = document.querySelectorAll('.tech-btns span');
                                  techButtons[0].classList.add('hover');

                                  //output elements
                                  const techName = document.getElementById('tech-name');
                                  const techDesc = document.getElementById('tech-desc');
                                  const techImage = document.getElementById('tech-img');
                                  
                                  techButtons.forEach(button => {

                                    button.addEventListener('click', async () =>{
                                      
                                      techButtons.forEach(btn =>{

                                          btn.classList.remove('hover');
                                      });
                                      button.classList.add('hover');

                                      //data
                                      

                                  const response = await fetch('data.json');
                                  const data = await response.json();
                                  const techs = data.technology;
                                  
                                  
                                      
                                  techs.forEach(tech => {

                                    if(tech.name === button.getAttribute('data-value')){

                                      techName.textContent = tech.name;
                                      techDesc.textContent = tech.description;
                                      
                                      if(window.innerWidth >= 768 || window.innerWidth <= 480){

                                        techImage.setAttribute('src', tech.images.portrait);

                                      }
                                      if(window.innerWidth <= 768 ){

                                        techImage.setAttribute('src', tech.images.landscape);

                                      }
                                      

                                    }

                                  });

                                      



                                    });
                                  });


                                    

                            });
                              
                            break;

                            default:
                                li.addEventListener('click' , () => {

                                    if(window.innerWidth > 770){

                                        document.body.style.background = 'url(./assets/home/background-home-desktop.jpg)';
                                        document.body.style.backgroundSize = 'cover';
                                        document.body.classList.remove('overlay');

                                    }else if(window.innerWidth < 580){

                                        document.body.style.background = 'url(./assets/home/background-home-mobile.jpg)';
                                        document.body.style.backgroundSize = 'cover';
                                        document.body.classList.remove('overlay');

                                    }else if(window.innerWidth < 770 && window.innerWidth >580){

                                        document.body.style.background = 'url(./assets/home/background-home-tablet.jpg)';
                                        document.body.style.backgroundSize = 'cover';
                                        document.body.classList.remove('overlay');

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

                                  navLinks.forEach(item => {
                                    
                                    item.style.setProperty('--li-width', '0%');
                                });
                                li.style.setProperty('--li-width','100%');

                            });
                                break;
                        }


                    });
    });