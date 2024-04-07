import React from 'react';
import './Blog.css';
import Blog1 from '../asserts/Blog1.jpg';
import Blog2 from '../asserts/Blog22.jpg';
import Blog3 from '../asserts/Blog23.jpg';
import Blog4 from '../asserts/Blog24.jpg';
import Blog5 from '../asserts/Blog2.jpg';
import Blog6 from '../asserts/Blog3.jpg';
import { GiOakLeaf } from "react-icons/gi";
import Blog7 from '../asserts/Blog4.jpg';
import Blog8 from '../asserts/Blog5.jpg';
import Blog9 from '../asserts/Blog6.jpg';
import Blog10 from '../asserts/Blog7.jpg';
import Blog11 from '../asserts/Blog8.jpeg';



const Blogy = () => {
    return (
        <div>
            <div>
                <div className='TheBlogImage'></div>
                <h2 id='BlogTextHead'>Read Our Blog</h2>
            </div>          
            <div class="Bloglines">
                <div className="Blogline"></div>
                <div className="Blogline"></div>
                <div className="Blogline"></div>
            </div>
            <div className='AllBigBlogConty'>
                <div className='BlogColumn1'>              
                    <div>
                        <img src={Blog1} alt='' className='Blog1'/>
                        <h6 id='BlogDate'>October 31,2023</h6>
                        <h4 id='BlogText'>DINING OUTSIDE IS THE NEW MODERN WAY OF LIVING</h4>
                    </div>
                    <div>
                        <img src={Blog2} alt='' className='Blog2'/>
                        <h6 id='BlogDate'>October 28,2023</h6>
                        <h4 id='BlogText'>PASSIONATE ABOUT BAKING</h4>
                    </div>
                    <div>
                        <img src={Blog3} alt='' className='Blog3'/>
                        <h6 id='BlogDate'>October 25,2023</h6>
                        <h4 id='BlogText'>THE 10 MOST POPULAR RECIPES OF FIAT CAFE</h4>
                    </div>
                    <div>
                        <img src={Blog4} alt='' className='Blog4'/>
                        <h6 id='BlogDate'>October 22,2023</h6>
                        <h4 id='BlogText'>COCKTAIL SCIENCE: DOES YOUR COCKTAIL NEED SALT?</h4>
                    </div>
                </div> 
                <div className='BlogColumn2'>
                    <div>
                        <img src={Blog5} alt='' className='Blog5'/>
                        <h6 id='BlogDate'>October 21,2023</h6>
                        <h4 id='BlogText'>COCKTAIL SCIENCE: DOES YOUR COCKTAIL NEED SALT?</h4>
                    </div>
                    <i><GiOakLeaf className='BlogLeaf'/></i>
                    <div>
                        <img src={Blog6} alt='' className='Blog6'/>
                        <h6 id='BlogDate'>October 20,2023</h6>
                        <h4 id='BlogText'>DELICIOUS RECIPES TO MAKE FOR A FRIEND</h4>
                    </div>
                    <i><GiOakLeaf className='BlogLeaf1'/></i>
                    <div>
                        <img src={Blog7} alt='' className='Blog7'/>
                        <h6 id='BlogDate'>October 19,2023</h6>
                        <h4 id='BlogText'>THE WHOLE FOOD LIFE</h4>
                    </div>
                    <i><GiOakLeaf className='BlogLeaf'/></i>
                </div> 
                <div className='BlogColumn3'>
                    <div>
                        <img src={Blog8} alt='' className='Blog7'/>
                        <h6 id='BlogDate'>October 17,2023</h6>
                        <h4 id='BlogText'>BIG CHEF'S RECOMMEND</h4>
                    </div>
                    <div>
                        <img src={Blog9} alt='' className='Blog5'/>
                        <h6 id='BlogDate'>October 16,2023</h6>
                        <h4 id='BlogText'>COCKTAIL RECIPES YOU HAVE TO TRY, NOW ONLINE</h4>
                    </div>
                    <div>
                        <img src={Blog10} alt='' className='Blog7'/>
                        <h6 id='BlogDate'>October 12,2023</h6>
                        <h4 id='BlogText'>PIZZA CRUST TYPES</h4>
                    </div>
                    {/* <i><GiOakLeaf className='BlogLeaf1'/></i> */}
                    <div>
                        <img src={Blog11} alt='' className='Blog7'/>
                        <h6 id='BlogDate'>October 7,2023</h6>
                        <h4 id='BlogText'>HOW TO MAKE CHOCOLATE SHAKE AT HOME</h4>
                    </div>
                </div>
            </div>
        </div>
    )
    }
 
export default Blogy;