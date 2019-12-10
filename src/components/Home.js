import React, {Component} from "react";
import Header from './HomeHeader';
import AboutUs from './HomeAboutUs';
import Footer from './HomeFooter';
import ThreeColumns from'./HomeThreeColumns'
import FourSteps from "./Home4Steps";
import HelpFor from "./HomeWhoWeHelpFor";
import Contact from "./HomeContactUs";
import MainSection from "./HomeMainSection";

class Home extends Component{
    render() {
        return(

            <>
            <Header/>
            <MainSection/>
            <ThreeColumns/>
            <FourSteps/>
            <AboutUs/>
            <HelpFor/>
            <Contact/>
            <Footer/>
            </>
        )
    }
}

export default Home;