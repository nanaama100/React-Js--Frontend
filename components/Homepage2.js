import './Homepage2.css';
import Carousel from 'react-bootstrap/Carousel';
import MyVid from '../asserts/Sized-Video.mp4';
import { useEffect, useState } from 'react';
// import Image1 from '../asserts/welcome4.jpg';
import FirstImageView from '../asserts/FirstImage1Page.jpg';
import SecondImageView from '../asserts/FirstImage2Page.jpg';
import Image2 from '../asserts/Beauty1.png';
import Image3 from '../asserts/Beauty2.png';
import Image4 from '../asserts/Beauty3.png';
import Image5 from '../asserts/Beauty5.png';
import Image6 from '../asserts/Beauty6.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import SpinImage from '../asserts/SpinMeal.png';




const Homepage = () => {
    const[showLoader, setShowLoader] = useState(true)
    const[showContent, setShowContent] = useState(null)

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setShowLoader(false)
            setShowContent(true)           
        },3000)
        return()=>clearTimeout(timer);
    },[])
  
    // this section of the code is for the carousel
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

    useEffect(()=>{
        Aos.init({duration: 500});
    }, [])

    const[showLoadey, setShowLoadey] = useState(true)
    const[ShowResCarousel, setShowResCarousel] = useState(null)

    return (
        <>
            <div className='HomePage'>
                {showLoader && <div className="loader"></div>}
                {showContent && <video src={MyVid} autoPlay loop muted id='video1'/>}
                    <div className='TxtVidCont'>
                        <p id="Vid-Tag">Experience the Perfect Bite</p>
                        <p id="Vid-Tag1">ORDER TODAY</p>
                    </div>
                    <div className='cont2'>
                        <div className="Text-Image">
                            <div className='TextFirstImages'>
                            <h2 id='Text1' data-aos= 'fade-right' >Ghanaian Café </h2>
                            <h2 id='Texty1' data-aos= 'fade-right' >WELCOME</h2>
                            <p id='Text2' data-aos= 'fade-right' >
                                Welcome to the official website of Fiat Café. This Café was developed 75 years ago  
                                and has receieved numerous awards. As seen on Point Break, Fast and Furious, and Iron Man 3, 
                                this historic and world-famous Café has been churning out food, beer, and good times since the 19's.  
                                Get to view our menus and make an order today. If not for a meal and other official or event inquiries
                                please email info@Tcuisine.com.
                            </p> 
                            </div>
                            <div className='ImagesOne'>
                                {/* <img src={Image1} alt="Tewaa's Cuisine" id='img1' data-aos= 'zoom-in'/> */}
                                <img src={FirstImageView} alt='' className='FirstImageView'  data-aos= 'fade-left'/>
                                <img src={SecondImageView} alt='' className='SecondImageView'  data-aos= 'fade-right'/>
                                <div className='ExperienceConty'  data-aos= 'fade-left'>
                                    <h2 id='Exp1'>75</h2>
                                    <h3 id='Exp2'>Years of Operation</h3>
                                </div>
                                
                            </div>
                              
                        </div>
                        <div className ='backdrop'></div>  
                    </div>
                    <div className='DiscoverMenu'>
                        <h2 id='FoodSection' data-aos= 'fade-up'>Our Food Section</h2>
                        <div className='TheTextMenu' data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="300"
                            data-aos-offset="0">
                            <h1 id='Discover-Font'>Discover</h1>
                            <h2 id="Menu-Font">OUR MENU</h2>
                            <p id="Spin-Text-Paragraph">
                                Far far away, behind the word mountains, far from the countries Vokalia and 
                                Consonantia, there live the blind texts. Separated they live in Bookmarksgrove 
                                right at the coast of the Semantics, a large language ocean
                            </p>
                            <button id='MenuButton'>View Full Menu</button>
                        </div>
                        <img src={SpinImage} alt='' className='SpinImage'/>
                    </div>  
                    <div className='cont3'>
                        <h2 id='Text3' data-aos= 'fade-up'>Our Restaurant</h2>  
                            <p id='Text4' data-aos= 'fade-down'>
                                Table seating is on a first-come, first-serve basis. We have two different 
                                kitchens with two different pay stations. One side is the restaurant side 
                                with all Ghanai, grilled, and fried seafood options. There is indoor seating 
                                available along with a wide selection of beverages including beer and wine choices. 
                                We fry our food in soybean oil. There are vegan and vegetarian options including 
                                the impossible burger and salads.
                            </p>
                            <Carousel activeIndex={index} onSelect={handleSelect} className='TheImages'>
                                <Carousel.Item interval={1000}>
                                    <img src={Image2} alt='Restaurant' id='ImagesRest'/>
                                </Carousel.Item>
                                <Carousel.Item interval={500}>
                                    <img src={Image3} alt='Restaurant' id='ImagesRest'/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={Image4} alt='Restaurant' id='ImagesRest'/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={Image5} alt='Restaurant' id='ImagesRest'/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={Image6} alt='Restaurant' id='ImagesRest'/>
                                </Carousel.Item>
                            </Carousel>

                    </div>
                    <div className='cont4'>
                        <div className='HourOpera-Text'>
                            <h2 id='Text5' data-aos= 'fade-up'>Opening Hours</h2>                 
                            <p id='Text6' data-aos= 'fade-up'>
                                Mondays-Fridays: 10:00am - 8:00pm <br/>
                                Saturdays- Sundays : 12:00pm - 10:00pm  <br/>      
                                We also have special hours on Thanksgiving, 
                                Christmas Eve, and Christmas Day.
                            </p>
                        </div>
                    </div>                
            </div>
        </> 
        
    );
}

export default Homepage;