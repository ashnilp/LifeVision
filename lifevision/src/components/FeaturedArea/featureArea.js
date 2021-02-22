import React from 'react';
import './featureArea.css';
import food from "../../img/LifeVision/food.jpg";


const FeatureArea = () => {
    return (
        <div className="featured-area">
            <div className="container">
                <div className="row">
                    <div className="col-sm-5">
                        <div className="single-featured-img">
                            <img src={food}/>
                        </div>
                    </div>
                    <div className="col-sm-7">
                        <div className="featured-text">
                            <h2>Featured causes</h2>
                            <p>Life Vision Society is motivated to improve the welfare of the community by helping those in need..</p>
                            <h3>Help community with food</h3>
                            <div className="row">
                                <div className="col-xs-6">
                                    <p>Rised: <span>$$$</span></p>
                                </div>
                                <div className="col-xs-6">
                                    <div className="goal">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rised">
                            <a href="donation.html">donate now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FeatureArea;