import React from 'react'
import "./choose.css"

const Choose = () => {
    return (
        <div className="choose-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2>Why Choose Us?</h2>
                            <p>Duis autem vel eum iriure dolor in hendrerit in vumtate</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="single-choose-item">
                            <img src="img/choose-img-1.png" alt=""/>
                            <h2>Charity for Education</h2>
                            <p>Duis autem vel eum iriure dolor in hendrerit in vumtate</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="single-choose-item">
                            <img src="img/choose-img-2.png" alt=""/>
                            <h2>Home for Homeless</h2>
                            <p>Duis autem vel eum iriure dolor in hendrerit in vumtate</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="single-choose-item">
                            <img src="img/choose-img-4.png"/>
                            <h2>Help Little Hands</h2>
                            <p>Duis autem vel eum iriure dolor in hendrerit in vumtate</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Choose;
