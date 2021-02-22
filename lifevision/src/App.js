import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Menu from './components/Menu/menu';
import Slider from './components/Slider/slider';
import FeatureArea from "./components/FeaturedArea/featureArea";
import Choose from './components/Choose/choose';
import Footer from './components/Footer/footer';


function App() {
  return (
    <>
     <Header/>
     <div className="slider-area">
        <div className="menu-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                      <Menu />
                    </div>
                </div>
            </div>
        </div>
        <Slider/>
        <FeatureArea />
        <Choose />
        <Footer />
      </div>
    </>
  )
}

export default App;
