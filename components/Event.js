import React from 'react';
import { useState, useEffect } from 'react';
import './Event.css'
import FirstZoom from '../asserts/Meme.jpg';
import SecondZoom from '../asserts/EventSlide1.jpg';
import ThirdZoom from '../asserts/EventSlide2.jpg';
import MiddleImageEvent from '../asserts/SmtNew4.jpg';
import imagesEvent4 from '../asserts/SmtNew4.jpg';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Celebrations from '../asserts/Celebrations.jpg';
import Weddings from '../asserts/Weddings.jpg';
import Corporate from '../asserts/Corporate.jpg';
import EventSidePicture from '../asserts/BookEvent2.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import EventImageSlide1 from '../asserts/NewOne1.png';
import EventImageSlide2 from '../asserts/Karaoke1.jpg';
import EventImageSlide3 from '../asserts/NewOne3.png';
import EventImageSlide4 from '../asserts/NewOne4.png';
import EventImageSlide5 from '../asserts/NewOne5.png';
import EventImageSlide6 from '../asserts/New5.png';
import EventImageSlide7 from '../asserts/NewOne6.png';
import EventImageSlide8 from '../asserts/NewOne7.png';
import EventImageSlide9 from '../asserts/JazzNight.jpg';


const Events = () => {

    // this section of the code is for the count down time for the event
    const calculateTimeLeft = () => {
        const difference = +new Date("April 20, 2024") - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
          };
        }
    
        return timeLeft;
      };

      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });


    // this section of the code is used for showing the hidden text behind the 
    // button click and viceversa
    const[MyTexty, setMyTexty] = useState(false)
   
    const ToggleEventText = ()=> {
        setMyTexty(!MyTexty)
    }

    useEffect(()=>{
    Aos.init({duration: 500});
    })
    return (
        <div className='BigEvent'>
            <div className='EventFirstSlideShow'>
                <Zoom arrows={false}>
                    <div className="each-slideShow">
                        <div>
                            <img src={FirstZoom} className='Zoom1'/>
                            <h1 id='EventSlideTexty1' >We create lively memories</h1>
                        </div>
                    </div>
                    <div className="each-slideShow">
                        <div>
                            <img src={SecondZoom} className='Zoom2'/>
                            <h1 id='EventSlideTexty2'>Our events are classic and professional</h1>
                        </div>
                    </div>
                    <div className="each-slideShow">
                        <div>
                            <img src={ThirdZoom} className='Zoom3'/>
                            <h1 id='EventSlideTexty3'>Igniting the spirit of celebration</h1>
                        </div>
                    </div>
                </Zoom>
                     
            </div>
            <div className='AboutEvent-Text'>
                <h3 id='AboutEvent-TextHead' data-aos= 'fade-down'>Elevate Your Event with Distinctive Professionalism</h3>
                <div className='FlexEvent-BaoxCont'>
                    <div className='Event-PhoneVersion' data-aos= 'fade-up'>
                        <h2 id='FirstEventTextHead'>Space & Serenity</h2>
                        <p id='EventTexty1'>
                            Elevate your corporate gatherings to new heights with our impeccable Corporate 
                            Events venue. Designed to seamlessly blend professionalism with sophistication, 
                            our space provides the ideal backdrop for conferences, seminars, workshops, and 
                            more. From intimate board meetings to grand product launches, our versatile 
                            setting caters to every need. 
                        </p>
                        {MyTexty ? (
                        <div>
                        <p id='EventTexty2'>
                            Our dedicated team ensures every detail is meticulously
                            handled, from state-of-the-art technology to exquisite catering. Whether you're hosting
                            a high-stakes business meeting or a team-building retreat, our venue offers a seamless 
                            environment that cultivates productivity and fosters connections. Welcome to a space where 
                            your corporate vision takes center stage and every event becomes a resounding success.
                        </p>
                        <button id='EventShowButtons2' onClick={ToggleEventText}> View Less </button>
                        </div>
                        ):
                        (
                        <button id='EventShowButtons1' onClick={ToggleEventText}>View More</button>
                        )}
                        <img src={MiddleImageEvent} alt='' className='MiddleImageEvent'/>
                    </div>
                    <div className='Event-DesktopVersion'>
                        <h2 id='FirstEventTextHead2'>Classic & Memorable</h2>
                        <p id='EventParagrah-Desktop' data-aos= 'fade-right'>
                            Elevate your corporate gatherings to new heights with our impeccable Corporate 
                            Events venue. Designed to seamlessly blend professionalism with sophistication, 
                            our space provides the ideal backdrop for conferences, seminars, workshops, and 
                            more. From intimate board meetings to grand product launches, our versatile 
                            setting caters to every need. 
                            Our dedicated team ensures every detail is meticulously
                            handled, from state-of-the-art technology to exquisite catering. Whether you're hosting
                            a high-stakes business meeting or a team-building retreat, our venue offers a seamless 
                            environment that cultivates productivity and fosters connections. Welcome to a space where 
                            your corporate vision takes center stage and every event becomes a resounding success.
                        </p>
                        <img src={imagesEvent4} alt='' className='imagesEvent14' data-aos= 'fade-left'/>
                    </div>
                </div>
                <div className='BigBookingEventConty'>
                    <h2 id='BookEventText'>Book Your Event</h2>
                    <p id='BookEventPara'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo atque, velit quidem optio excepturi 
                        maxime deserunt aspernatur dolorem unde culpa corrupti impedit doloremque. Ea veniam, illo 
                        dicta architecto pariatur praesentium!
                    </p>
                    <div className='BookingEventsConty'>
                        <div className='CelebrationsConty' >
                            <img src={Celebrations} alt='' className='CelebrationsImage' data-aos="flip-left"/>
                            <h1 id='CelebrationsText'>Celebrations</h1>
                        </div>
                        <div className='CelebrationsConty'>
                            <img src={Weddings} alt='' className='WeddingImage' data-aos="flip-left"/>
                            <h1 id='CelebrationsText'>Weddings</h1>
                        </div>
                        <div className='CelebrationsConty'>
                            <img src={Corporate} alt='' className='CelebrationsImage' data-aos="flip-left"/>
                            <h1 id='CelebrationsText'>Corporate</h1>
                        </div>
                    </div>
                </div>
                <div className='FormEventConty'>
                    <div className='FormFillEvent'>
                    <h2 id='FormTextHead'>Fill form to book event</h2>
                        <form>
                            <div>
                                <label for='Number-People'>Number of People: </label>
                                <input type='number' id='Number-People' required></input>
                            </div>
                            <div>
                                <label for="Event-Date">Select Event Date: </label>
                                <input type='date' id='Event-Date' required/>
                            </div>
                            <div>
                                <label for="Event-Time">Select Event Time: </label>
                                <input type='time' id='Event-Time' required/>
                            </div>
                            <button id='BookEventButton1'>Book Event</button>
                        </form>
                    </div>
                    <div className=''>
                        <img src={EventSidePicture} alt='' className='EventSidePicture'/>
                    </div>
                </div>
                <div className='TheImageEvent-Cont'>
                    {/* <img src={OtherEventImage} alt='' className='OtherEventImage'/> */}
                    <h1 id='OpenSense'>Opening <br/> Senses</h1>
                </div> 
                <div class="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>

            <div className='BigBox-AnimatedEvent'>
                <h2 id='UpcomingEventText'>Upcoming Events</h2>
            <Carousel
                    additionalTransfrom={0}
                    arrows={false}
                    autoPlay
                    autoPlaySpeed={2000}
                    centerMode={false}
                    className=""
                    containerClass="containerCarouselEvent"
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
                    <div className='EventCarouselImagesAll'>
                        <img src={EventImageSlide1} alt='' className='EventImageSlide1'/>
                        <div className='OverlayEvent'>
                            <h1 id='EventName1'>Sugar Dinner</h1>
                            <h4 id='EventDate2'>Date: 06/04/2024</h4>
                        </div>
                    </div>    
                    <div className='EventCarouselImagesAll'>
                        <img src={EventImageSlide2} alt='' className='EventImageSlide2'/>
                        <div className='OverlayEvent'>
                            <h1  id='EventName1'>Karaoke Night</h1>
                            <h4 id='EventDate2'>Date: 14/04/2024</h4>
                        </div>
                    </div> 
                    <div className='EventCarouselImagesAll'>
                        <img src={EventImageSlide3} alt='' className='EventImageSlide1'/>
                        <div className='OverlayEvent'>
                            <h1  id='EventName1'>The Wine Hub</h1>
                            <h4 id='EventDate2'>Date: 17/04/2024</h4>
                        </div>
                    </div> 
                    <div className='EventCarouselImagesAll'>
                        <img src={EventImageSlide4} alt='' className='EventImageSlide1'/>
                        <div className='OverlayEvent'>
                            <h1 id='EventName1'>Cocktail Party</h1>
                            <h4 id='EventDate2'>Date: 20/04/2024</h4>
                        </div>
                    </div>
                    <div className='EventCarouselImagesAll'>
                        <img src={EventImageSlide5} alt='' className='EventImageSlide1'/>
                        <div className='OverlayEvent'>
                            <h1 id='EventName1'>Costume Night</h1>
                            <h4 id='EventDate2'>Date: 22/04/2024</h4>
                        </div>
                    </div>
                    <div className='EventCarouselImagesAll'>
                        <img src={EventImageSlide6} alt='' className='EventImageSlide1'/>
                        <div className='OverlayEvent'>
                            <h1 id='EventName1'>Night of Adena</h1>
                            <h4 id='EventDate2'>Date: 26/04/2024</h4>
                        </div>
                    </div>
                    <div className='EventCarouselImagesAll'>
                        <img src={EventImageSlide7} alt='' className='EventImageSlide1'/>
                        <div className='OverlayEvent'>
                            <h1 id='EventName1'>1990s Dance Night</h1>
                            <h4 id='EventDate2'>Date: 30/04/2024</h4>
                        </div>
                    </div>
                    <div className='EventCarouselImagesAll7'>
                        <img src={EventImageSlide8} alt='' className='EventImageSlide3'/>
                        <div className='OverlayEvent'>
                            <h1 id='EventName1'>Fire to Wine Night</h1>
                            <h4 id='EventDate2'>Date: 08/05/2024</h4>
                        </div>
                    </div>
                    <div className='EventCarouselImagesAll7'>
                        <img src={EventImageSlide9} alt='' className='EventImageSlide3'/>
                        <div className='OverlayEvent'>
                            <h1 id='EventName1'>Jazz Night</h1>
                            <h4 id='EventDate1'>Date: 15/05/2024</h4>
                        </div>
                    </div>
            </Carousel>
            </div>
        </div>



    );
}
 
export default Events;