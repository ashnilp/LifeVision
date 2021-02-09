import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Menu from './components/Menu/menu';
import Slider from './components/Slider/slider';
import FeatureArea from "./components/FeaturedArea/featureArea"


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
      </div>
    </>
  )
}

export default App;
