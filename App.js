import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/Homepage2';
import Story2 from './components/Story2';
import Team from './components/Team2';
import Reviews from './components/Reviews1';
import Navbar from './components/Navbar2';
import Events from './components/Event';
import Blog1 from './components/Blog';
import Contact1 from './components/Contact-Asan';
import Breakfast1 from './components/Breakfast1';
import Lunch1 from './components/Lunch';
import Dessert1 from './components/Desert1';
// import FooterBen from './components/Footer-Ben';

// import BreakfastCart from './components/CartBreakfast';
// import { CartProvider } from 'react-use-cart';
// import Breakfast1 from './components/Breakfast';



const ScrollToTop=()=>{
    window.scrollTo(0,0)
    return null;
};

const App = () => {


    return (
        <Router>
            <div>
                <ScrollToTop/>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/about/about-us" component={Story2} />
                    <Route path="/about/our-team" component={Team}/>
                    <Route path="/about/reviews" component={Reviews}/>
                    <Route path="/events" component={Events}/>
                    <Route path="/blog" component={Blog1}/>
                    <Route path="/contact" component={Contact1} />
                    <Route path="/menu/breakfast" component={Breakfast1}/> 
                    <Route path="/menu/lunch" component={Lunch1}/>                       
                    <Route path="/menu/desert" component={Dessert1}/> 
                </Switch>
                {/* <FooterBen/> */}
            </div>
        </Router>
    );
};

export default App;

