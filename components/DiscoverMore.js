import React from 'react';
import './DiscoverMore.css';
import CountUp from "react-countup";
import BranchLogo from '../asserts/New Image.png';
import { FaTrophy } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { TbChefHat } from "react-icons/tb";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from 'react';
import VisibilitySensor from 'react-visibility-sensor';



const DiscoverResty = () => {

    const[isCountVisible, setIsCountVisible] = useState(false)


    useEffect(()=>{
        Aos.init({duration: 500});
    })

    return (
        <>
        <div className='Big-CountDown-Container'>
            <h4 id='Discover-Res'>Discover More</h4>
                <div className='All-Elements-Container' data-aos="fade-down">
                    <div className="Branches-Container"> 
                        <img src={BranchLogo} alt='' className='BranchLogo'/>
                        <div>
                            <VisibilitySensor partialVisibility={true} onChange = {(isCountVisible)=>{
                                if(isCountVisible){
                                    setIsCountVisible(true);
                                }
                                }}>
                                {isCountVisible? <CountUp
                                    start={0}
                                    end={100}
                                    duration={9}
                                className='CountingNum1'/> : 
                                <div>Scroll to see the count</div>}
                            </VisibilitySensor>
                        </div>
                        
                        <h4 id='CountDown-Texty1'>Café Branches</h4>
                    </div>
                    <div className="Awards-Container"> 
                        <FaTrophy className='Trophy' />
                        <div>
                            <VisibilitySensor partialVisibility={true} onChange = {(isCountVisible)=>{
                                    if(isCountVisible){
                                        setIsCountVisible(true);
                                    }
                                    }}>
                               {isCountVisible? <CountUp
                                    start={0}
                                    end={95}
                                    duration={9}
                                className='CountingNum2'/>:
                                <div>Scroll to see the count</div>}
                            </VisibilitySensor>
                        </div>
                        <h4 id='CountDown-Texty1'>Number of Awards</h4>
                    </div>
                    <div className="HappyCust-Container"> 
                        <IoIosPeople  className='People-Customers'/>
                        <div>
                            <VisibilitySensor partialVisibility={true} onChange = {(isCountVisible)=>{
                                    if(isCountVisible){
                                        setIsCountVisible(true);
                                    }
                                    }}>
                                 {isCountVisible? <CountUp
                                    start={0}
                                    end={10567}
                                    duration={7}
                                className='CountingNum3'/>:
                                <div>Scroll to see the count</div>}
                            </VisibilitySensor>
                        </div>
                        <h4 id='CountDown-Texty1'>Happy Customer</h4>
                    </div>
                    <div className="StaffAcross-Container"> 
                        <TbChefHat className='All-Staffs'/>
                        <div>
                            <VisibilitySensor partialVisibility={true} onChange = {(isCountVisible)=>{
                                    if(isCountVisible){
                                        setIsCountVisible(true);
                                    }
                                    }}>
                                {isCountVisible? <CountUp
                                    start={0}
                                    end={1050}
                                    duration={7}
                                className='CountingNum4'/>:
                                <div>Scroll to see the count</div>}
                            </VisibilitySensor>
                        </div>
                        <h4 id='CountDown-Texty1'>Total Staff Across</h4>
                    </div>
                </div>
        </div>
        </>
    );
}
 
export default DiscoverResty;