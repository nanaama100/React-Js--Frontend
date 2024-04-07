import React from 'react';
import './Team2.css';
import { useState,useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import ManagerImage from '../asserts/TewaaChef.jpg';
import LazyLoad from 'react-lazy-load';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ChefRep from '../asserts/CkefKing.jpg';
import ChefRep1 from '../asserts/Team1.jpg';
import Chef1 from '../asserts/Chef1.jpg';
import Chef2 from '../asserts/Chef4.jpg';
import Chef3 from '../asserts/Chef5.jpg';
import Chef4 from '../asserts/Team2.jpg';
import Chef5 from '../asserts/ChefRep.jpg';
import { FaDownload } from "react-icons/fa6";


const OurTeam = () => {

    
    const[showCardText, setShowCardText] = useState(false)
   
    const ToggleCardText = ()=> {
        setShowCardText(!showCardText)
    }
    
    useEffect(()=>{
        Aos.init({duration: 500});
    },[])


    return (
        <>
        <div className='OurTem-Container'> 
                    <div className='BackgroundTeamAll'></div> 
                    <h1 id="MeetingChefs">MEET THE CHEFS</h1>
                    <div className='BigChef-Container'>
                    <h1 id='ChefHead-Text'>THE EXECUTIVE CHEF</h1>
                    <LazyLoad height={150} offset={20}>
                        <img src={ManagerImage} alt='Chef-Image' className='TheChef-Image' data-aos="zoom-in"/>
                        </ LazyLoad>
                    <h4 id='ChefName'  data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">Tewaa McCarthy</h4>
                    <h5 id='ChefConnect'>Connect with Tewaa : </h5>
                    <div className='Subchef-center'>
                            <div className='TheChef-Icons'>
                                <ul className='chef-social'>
                                    <li><FaFacebook  className='Social-icons-chef' aria-hidden= "true"/></li>
                                    <li><FaTiktok  className='Social-icons-chef' aria-hidden= "true" /></li>
                                    <li><FaTwitter  className='Social-icons-chef' aria-hidden= "true"/></li>
                                    <li><FaInstagram  className='Social-icons-chef' aria-hidden= "true"/></li>
                                </ul>                        
                            </div>
                    </div>
                    <div className="BigChef-Message">
                            <p id='BigChef-Text1'  data-aos= 'fade-up'>
                                        During some of her multiple trips to Accra, Chef Tewaa discovered that Ghana
                                        is a wellspring of the world's finest seafood and plant based products. 
                                        “The African continent abounds with neglected treasures, some easily found 
                                        beneath our feet.” Said Chef Tewaa. “My passion is to create exciting dishes, 
                                        nothing goes to waste when crafting my dishes. I get my inspiration 
                                        in diverse African cultures that remain relatively unexplored in cuisine.”
                                    </p>
                                    {showCardText ? (
                                    <div>
                                        <p id='BigChef-Text2'>
                                            Tewaa brings her 25 years of experience working in prestigious Hotels, Michelin stars restaurants and 
                                            private member clubs internationally to the vibrant heart of Accra, Ghana. She introduced her conscious 
                                            gastronomic and pan-African cuisine at Tewaa's Cuisine. A sustainable yet ever-evolving menu mostly made 
                                            from seasonal and locally sourced ingredients. Her eco-dining approach to African cuisine 
                                            aims to drive awareness around food waste and sustainability.
                                        </p>
                                        <button id='CardText-Button1' onClick={ToggleCardText} > SHOW LESS 
                                        <span></span>
                                        </button>  
                                    </div>
                                    ):
                                    (
                                        <button id='CardText-Button2' onClick={ToggleCardText}> READ MORE 
                                        <span></span>
                                        </button>  
                                    )}
                    </div>
                    <div className="BigChef-Message-DeskTop" data-aos= 'fade-down' >
                            During some of her multiple trips to Accra, Chef Tewaa discovered that Ghana
                            is a wellspring of the world's finest seafood and plant based products. 
                            “The African continent abounds with neglected treasures, some easily found 
                            beneath our feet.” Said Chef Tewaa. “My passion is to create exciting dishes, 
                            nothing goes to waste when crafting my dishes. I get my inspiration 
                            in diverse African cultures that remain relatively unexplored in cuisine.”
                            Tewaa brings her 25 years of experience working in prestigious Hotels, Michelin stars restaurants and 
                            private member clubs internationally to the vibrant heart of Accra, Ghana. She introduced her conscious 
                            gastronomic and pan-African cuisine at Tewaa's Cuisine. A sustainable yet ever-evolving menu mostly made 
                            from seasonal and locally sourced ingredients. Her eco-dining approach to African cuisine 
                            aims to drive awareness around food waste and sustainability.                           
                  </div>
      
               <div className='RecipeBack'></div>
               <div className='RecipeConty'>
                    <p id='RecipeText'>
                        Check out this recipe book from our Chef. You can practice some amazing 
                        recipes at your leisure time😊. 
                    </p>
                    <button id='RecipeButton'>Download Recipe
                    <span><FaDownload className='RecipeDownload'/></span>
                    </button>
                </div>
                <div className='SubChefs-Container' data-aos= 'fade-right'>
                    <h2 id='TheSubChefs-Head'>MEET THE SUB-CHEFS</h2>
                    <p id='SubChefs-Messages'>
                    One of the biggest attractions at Tewaa's Cuisine is the amazing food. Our chefs have the 
                    expertise to create dishes designed to dazzle even the strictest food critics. Our chefs 
                    are a powerhouse team, responsible for the amazing menu and the shining reviews of the 
                    restaurant. If you want food prepared by admired chefs known for paying close attention to 
                    every nuance of the food they serve, reserve your next dinner at Fiat Café.
                    Our culinary team's culinary journey is as rich in flavor and history as the storied former 
                    National Louisiana Bank building that is now the home of watermark.
                    </p>
                    <Carousel
                            additionalTransfrom={0}
                            arrows={false}
                            autoPlay
                            autoPlaySpeed={2000}
                            centerMode={false}
                            className=""
                            containerClass="container"
                            dotListClass=""
                            draggable
                            focusOnSelect={false}
                            infinite
                            itemClass=""
                            keyBoardControl
                            minimumTouchDrag={80}
                            renderButtonGroupOutside={false}
                            renderDotsOutside={false}
                            responsive={{
                                desktop: {
                                    breakpoint: {
                                        max: 3000,
                                        min: 1024
                                    },
                                    items: 3
                                },
                                tablet: {
                                    breakpoint: {
                                        max: 1024,
                                        min: 464
                                    },
                                    items: 2
                                },
                                mobile: {
                                    breakpoint: {
                                        max: 464,
                                        min: 0
                                    },
                                    items: 1
                                }
                            }}
                            showDots={false}
                            sliderClass=""
                            slidesToSlide={1}
                            swipeable
                        >
                            <div>
                                <img src={Chef1} className='ImagesMET' alt=''/>
                                <div className='SubChef-Idetity'>
                                    <h4 id='SubChef-Name'>Adam Smith</h4>
                                    <h5 id='ChefPosition'>Fry Chef</h5>
                                    <div className='SubChef-SocialIcons'>
                                        <FaFacebook  className='Social-icons-subchef' />
                                        <FaTiktok  className='Social-icons-subchef' />
                                        <FaTwitter  className='Social-icons-subchef' />
                                        <FaInstagram  className='Social-icons-subchef' />                               
                                    </div>                            
                                </div>
                            </div>
                        <div>
                            <img src={Chef2} className='ImagesMET' alt=''/>
                                <div className='SubChef-Idetity'>
                                    <h4 id='SubChef-Name'>Jewel Blakes</h4>
                                    <h5 id='ChefPosition'> Deputy Chef</h5>
                                    <div className='SubChef-SocialIcons'>
                                        <FaFacebook  className='Social-icons-subchef' />
                                        <FaTiktok  className='Social-icons-subchef' />
                                        <FaTwitter  className='Social-icons-subchef' />
                                        <FaInstagram  className='Social-icons-subchef' />                               
                                    </div>                            
                                </div>
                        </div>
                        <div>
                            <img src={Chef3} className='ImagesMET' alt='' />
                            <div className='SubChef-Idetity'>
                            <h4 id='SubChef-Name'>Gloria Essien</h4>
                            <h5 id='ChefPosition'>Pastry Chef</h5>
                            <div className='SubChef-SocialIcons'>
                                <FaFacebook  className='Social-icons-subchef' />
                                <FaTiktok  className='Social-icons-subchef' />
                                <FaTwitter  className='Social-icons-subchef' />
                                <FaInstagram  className='Social-icons-subchef' />                               
                            </div>                            
                            </div>
                        </div>
                        <div>
                            <img src={Chef4} className='ImagesMET' alt=''/>
                            <div className='SubChef-Idetity'>
                            <h4 id='SubChef-Name'>Bless Korankye</h4>
                            <h5 id='ChefPosition'>Sauce Chef</h5>
                            <div className='SubChef-SocialIcons'>
                                <FaFacebook  className='Social-icons-subchef' />
                                <FaTiktok  className='Social-icons-subchef' />
                                <FaTwitter  className='Social-icons-subchef' />
                                <FaInstagram  className='Social-icons-subchef' />                               
                            </div>                            
                            </div>
                        </div>                       
                        <div>
                            <img src={ChefRep} className='ImagesMET' alt='' />
                            <div className='SubChef-Idetity'>
                            <h4 id='SubChef-Name'>Joshua Doe</h4>
                            <h5 id='ChefPosition'>Meat Chef</h5>
                            <div className='SubChef-SocialIcons'>
                                <FaFacebook  className='Social-icons-subchef' />
                                <FaTiktok  className='Social-icons-subchef' />
                                <FaTwitter  className='Social-icons-subchef' />
                                <FaInstagram  className='Social-icons-subchef' />                               
                            </div>                            
                            </div>
                        </div>
                        <div>
                            <img src={Chef5} className='ImagesMET' alt=''/>
                            <div className='SubChef-Idetity'>
                            <h4 id='SubChef-Name'>Monalissa Merhns</h4>
                            <h5 id='ChefPosition'>Soup Chef</h5>
                            <div className='SubChef-SocialIcons'>
                                <FaFacebook  className='Social-icons-subchef' />
                                <FaTiktok  className='Social-icons-subchef' />
                                <FaTwitter  className='Social-icons-subchef' />
                                <FaInstagram  className='Social-icons-subchef' />                               
                            </div>                            
                            </div>
                        </div>
                        <div>
                            <img src={ChefRep1} className='ImagesMET' alt=''/>
                            <div className='SubChef-Idetity'>
                            <h4 id='SubChef-Name'>Caleb Brown</h4>
                            <h5 id='ChefPosition'>Fish Chef</h5>
                            <div className='SubChef-SocialIcons'>
                                <FaFacebook  className='Social-icons-subchef' />
                                <FaTiktok  className='Social-icons-subchef' />
                                <FaTwitter  className='Social-icons-subchef' />
                                <FaInstagram  className='Social-icons-subchef' />                               
                            </div>                            
                            </div>
                        </div>
                    </Carousel>
                    </div> 
                </div>                            
            </div>
            </>
           
        
    );
}
 
export default OurTeam;