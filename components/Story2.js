import "./Story2.css";
import { useEffect, useState } from 'react';
// import DeskyAbout from '../asserts/MeetChef1.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Discover from '../components/DiscoverMore';
import DD1 from '../asserts/DD1.jpg';
import DD2 from '../asserts/backgroundAll2.jpg';




const Story1 = () => {
    
    // for the showhead
    const [showHead, setShowHead] = useState(false)
    useEffect(()=>{
        setShowHead(true);
    },[])

    // this section of the code is used for showing the hidden text behind the 
    // button click and viceversa
    const[showTexty, setShowTexty] = useState(false)
   
    const ToggleTexty = ()=> {
        setShowTexty(!showTexty)
    }

    useEffect(()=>{
        Aos.init({duration: 500});
    })


    return (
        <>
            <div className='Big-About-Container'>
                <div className="TextHead-OurStory1">
                    {/* <img src= {DeskyAbout} className='DeskyAbout1' alt="Restaurant"/> */}
                </div>
                {showHead && <p id ="AboutUs-Head">OUR STORY</p>}
                <div className="TextHead-OurStory2">
                    <h3 id="Story-TextHead1" data-aos= 'fade-down'>THE CAFE'S HISTORY</h3>
                    <h2 id="Story-TextHead2" data-aos= 'fade-down'>Our Philosophy</h2>
                    <div className='AboutUs-Text'>
                        <div className="display1">
                            <img src={DD1} alt="" className="DD1"/>
                            <img src={DD2} alt="" className="DD2"/>
                        </div>
                        <p id='AboutUs-Text1'  data-aos= 'fade-up'>
                            Tewaa's Cuisine has firmly rooted itself in Lahore's culinary 
                            arena in a little over seven years. Our team of dedicated 
                            professionals works tirelessly to bring the world's cuisines to your doorstep.
                            Located inside the Sakumono Estate, Ceremonial Road,we are passionate about 
                            every dish that hits the table. We offer a variety of cuisines including Asian-fusion, Continental, and 
                            French-Italian. We offer a unique oblong 360-degree bar through the restaurant 
                            where guests can enjoy our comprehensive selection of mocktails, lattes, and coffees.  
                        </p>
                        {showTexty ? (
                        <div>
                            <p id='AboutUs-Text2' data-aos= 'fade-up'>
                                Our dedicated team works relentlessly to ensure that every experience at Tewaa's 
                                Cuisine is a fulfilling one.The menu is constantly updated, and innovation by the 
                                chefs is not only encouraged but also nurtured. The décor and furniture have been 
                                tastefully selected to ensure maximum comfort to enhance the dining experience. We 
                                believe in using only the freshest ingredients, the most talented chefs, and the waiting
                                staff of the most professional standard. Be prepared to be properly taken care of by our 
                                outstanding staff whilst you enjoy our delicious cuisine.
                            </p>                                                 
                            <button id='AboutUs-Button2' onClick={ToggleTexty} > SHOW LESS 
                            <span></span>
                            </button>                        
                        </div> 
                        ) :
                        (
                            <button id='AboutUs-Button1' onClick={ToggleTexty}> READ MORE 
                            <span></span>
                            </button>                      
                        )}
                    </div>
                    <div className="Whole-Choose">
                        <div className="Why-Choose">k</div> 
                            <h4 id="ChooseText1">WHY US</h4>
                            <h2 id="ChooseText2">Why Choose Our Café </h2>
                            <div className="Choose-ContyCC">
                                <div className="ChooseConty1" data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">
                                    <h1 id="NumChoose">01</h1>
                                    <h3 id="TextyChoose">TopMost</h3>
                                    <p id="Para-Choose">
                                        We keep receiving awards each year as the best restaurant in West Africa.
                                        Our facilities are clean and well-kept. Our Foods are cooked out of 
                                        organic products. 
                                    </p>
                                </div>
                                <div className="ChooseConty1" data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">
                                    <h1 id="NumChoose">02</h1>
                                    <h3 id="TextyChoose">Classic</h3>
                                    <p id="Para-Choose">We keep receiving awards each year as the best restaurant in West Africa.
                                        Our facilities are clean and well-kept. Our Foods are cooked out of 
                                        organic products. 
                                    </p>
                                </div>
                                <div className="ChooseConty1" data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">
                                    <h1 id="NumChoose">03</h1>
                                    <h3 id="TextyChoose">CSR</h3>
                                    <p id="Para-Choose"> 10% of every meal you consume at Fiat Café goes to Charity and Philanthropic
                                    activities. Over the years, our Café has engaged in numerous activites pertainig to social activities.
                                    There's no doubt that, this projects to receiving the best Café known in Africa for Philanthropic work.
                                    </p>    
                                </div>                                  
                        </div>   
                    </div>
                </div> 
                <Discover className="DiscoverPhone"/>    
            </div> 
                                  
        </>
    );
}
 
export default Story1;


