import React from 'react';
import './Reviews1.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {useState, useEffect} from 'react';
import Customer1 from '../asserts/Freelance2.jpeg';
import Customer2 from '../asserts/Freelance1.jpg';
import Customer3 from '../asserts/Customer3.jpg';
import Customer4 from '../asserts/freelancer8.jpg';
import Customer5 from '../asserts/Customer1.jpg';
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import VisibilitySensor from 'react-visibility-sensor';
import { AiOutlineSmallDash } from "react-icons/ai";
import { IoStarSharp } from "react-icons/io5";
import { GiFallingLeaf } from "react-icons/gi";


const RestReviews = () => {

    const Service1 = ({scrollFunction}) =>{
            scrollFunction("/about/our-team")
        }


    const[showLoader, setShowLoader] = useState(true)
    const[showContent, setShowContent] = useState(null)


    useEffect(()=>{
        Aos.init({duration: 500});
    },[])

    

    return (
        <>
        <div className='Customer-Testimonials-Container'>
            <div className='TestyBack'></div>
            <h1 id='Testimonial-HeadText'>CUSTOMER REVIEW SECTION</h1>
            <div className='Testimonials-Content'>
                <GiFallingLeaf className='LeafBackground'/>
                <GiFallingLeaf className='LeafBackground1'/>
                <h4 id='Testimonials-Text' data-aos= 'fade-up'>TESTIMONIALS</h4>
                <h2 id='Comments-Text' data-aos= 'fade-up'>What they're saying about us!!!</h2>
            </div>

                {/* the loader-messages */}
                {showLoader &&
                <div class="Review-loader">
                    <div class="Review-circle">
                        <div class="Review-dot"></div>
                        <div class="Review-outline"></div>
                    </div>
                    <div class="Review-circle">
                        <div class="Review-dot"></div>
                        <div class="Review-outline"></div>
                    </div>
                    <div class="Review-circle">
                        <div class="Review-dot"></div>
                        <div class="Review-outline"></div>
                    </div>
                    <div class="Review-circle">
                        <div class="Review-dot"></div>
                        <div class="Review-outline"></div>
                    </div>
                </div>                
                }

            {showContent &&
            <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlay
                    autoPlaySpeed={3400}
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
                <div className='Big-Customer-Comment'>
                    <div className='Comments-Container'>
                            <p id='Comment-Paragraph'>
                                <span>
                                <ImQuotesLeft className='Comment-Icon1' /> 
                                </span>
                            I love your atmosphere, how you welcome and receive customers is amazing. 
                            I've never expereince a service as better as your restaurant🥰. 
                            {/* Your meals are delicious
                            especially the yam balls. I kept bitting my tongue until i was done with my meal.                         */}
                                <span>
                                <ImQuotesRight className='Comment-Icon2' />
                                </span>
                            </p>  
                    </div>
                    <div className='Customer-Image-Cover'>
                        <img src={Customer1} alt='' className='Customer-Image'/>
                    </div> 
                    <h2 id='Customer-Name'>Sheena Bill</h2>
                    <h4 id='Customer-Status'>Entrepreneur</h4>
                </div>
                <div className='Big-Customer-Comment'>
                    <div className='Comments-Container'>
                            <p id='Comment-Paragraph'>
                                <span>
                                <ImQuotesLeft className='Comment-Icon1' /> 
                                </span>
                            If I am asked to recommend the best Café, I wouldn't hesitate to recommend your venue. 
                            I love your meals😋, environment and service. 
                            {/* I keep missing your meals each time my memory
                            recalls the tantalizing meal I enjoyed.                          */}
                                <span>
                                <ImQuotesRight className='Comment-Icon2' />
                                </span>
                            </p>                    
                    </div>
                    <div className='Customer-Image-Cover'>
                        <img src={Customer2} alt='' className='Customer-Image'/>
                    </div>
                    <h2 id='Customer-Name'>Leticia Wright</h2>
                    <h4 id='Customer-Status'>Lawyer</h4>
                </div>

                <div className='Big-Customer-Comment'>
                    <div className='Comments-Container'>
                            <p id='Comment-Paragraph'>
                                <span>
                                <ImQuotesLeft className='Comment-Icon1' />
                                </span>
                            This is the best Café I have experienced so far, like seriously. 
                            Your services are high class and your environment is supberb ✌😘👏. 
                            {/* My baé 
                            has been worrying to bring her to Ghana, so she can experience your service.
                            Kudos to your exceptional service and meals.                       */}
                                <span>
                                <ImQuotesRight className='Comment-Icon2' />
                                </span>
                            </p>
                    </div>
                    <div className='Customer-Image-Cover'>
                        <img src={Customer3} alt='' className='Customer-Image'/>
                    </div>
                    <h2 id='Customer-Name'>Kelvin Moon</h2>
                    <h4 id='Customer-Status'>Musician</h4>
                </div>

                <div className='Big-Customer-Comment'>
                    <div className='Comments-Container'>
                            <p id='Comment-Paragraph'>
                                <span>
                                    <ImQuotesLeft className='Comment-Icon1' />
                                </span>
                            A friend recommend this place to me when I was searching for a venue for a date.
                            You guys are the best😊🥳
                                 <span>
                                    <ImQuotesRight className='Comment-Icon2' />
                                </span>
                            </p>
                    </div>
                    <div className='Customer-Image-Cover'>
                        <img src={Customer4} alt='' className='Customer-Image'/>
                    </div>
                    <h2 id='Customer-Name'>Prince Walker</h2>
                    <h4 id='Customer-Status'>Lawyer</h4>
                </div>

                <div className='Big-Customer-Comment'>
                    <div className='Comments-Container'>
                            <p id='Comment-Paragraph'>
                                <span>
                                    <ImQuotesLeft className='Comment-Icon1' />
                                </span>
                            {/* I love your atmosphere, how you guys welcome and receive customers is amazing. 
                            I've never expereince a service as better as your restaurant.  */}
                            Your meals are delicious especially the Apapransa with the crab😍. I kept bitting
                             my tongue until i was done with my meal.                        
                                <span>
                                    <ImQuotesRight className='Comment-Icon2' />
                                </span>
                            </p>
                    </div>
                    <div className='Customer-Image-Cover'>
                        <img src={Customer5} alt='' className='Customer-Image'/>
                    </div>
                    <h2 id='Customer-Name'>Jewel Brown</h2>
                    <h4 id='Customer-Status'>Doctor</h4>
                </div>
            </Carousel>}  
            <VisibilitySensor partialVisibility={true} onChange={(visible)=>{
                if(visible){
                    setTimeout(()=>{
                        setShowLoader(false);
                        setShowContent(true);
                    },3000)                    
                }
            }} >
                <div style={{height: '100px'}}></div>
            </VisibilitySensor> 
            {/* <div className='MyCommentConty'> */}
                <div className='GiveFeedBack-Image'>
                    <div className='GiveFeedBact-Conty'data-aos= 'fade-right'>
                        <h1 id='FirstFeedBackText1'>Get In Touch</h1>
                        <p id='FirstFeedBackText2'>Find Us Here. Make Real Results Happen.</p>
                        <AiOutlineSmallDash className='SmallDashes-Review'/>
                        <div className='AllStarCommment'>
                            <IoStarSharp  className='StarsReviewConty'/>
                            <IoStarSharp className='StarsReviewConty' />
                            <IoStarSharp className='StarsReviewConty'/>
                            <IoStarSharp className='StarsReviewConty'/>
                            <IoStarSharp className='StarsReviewConty'/>
                        </div>
                        <p id='TrustScore'>
                            Trust Score 4.5 (Based on 1,200 reviews). <br/>
                            Kindly rate and give us a review here
                        </p>
                        👉<button id='MyComment'>Give Review</button>
                    </div>
                </div>
            {/* </div> */}
        </div>
        
        </>
    );
}
 
export default RestReviews;
