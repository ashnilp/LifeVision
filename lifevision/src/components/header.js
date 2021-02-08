import React from 'react'

const Header = () => {
    return (
        <div>
          <div className="header-area">
            <div className="container">
              <div className="row">
                <div className="col-sm-3">
                <div className="logo">
                    <a href="index.html"><img src="img/LifeVision/lvLogo.jpg" alt=""/></a>
                    <span className="caption">New Zealand</span>
                </div>
                </div>
                <div className="col-md-7 col-md-offset-2 col-sm-10">
                <div className="header-info">
                    <div className="row">
                    <div className="col-sm-4">
                        <div className="single-header-info">
                        <img src="img/LifeVision/hour.jpg" alt="Hour"/>
                        <h2>OPENING HOURS</h2>
                        <p>8:00 am - 8:00 pm</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="single-header-info">
                        <img src="img/LifeVision/email.jpg" alt="Hour"/>
                        <h2>OUR EMAIL</h2>
                        <a href="mailto:rahalmail@gmail.com">rahalmail@gmail.com</a>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="single-header-info">
                        <img src="img/LifeVision/phone.jpg" alt="Hour"/>
                        <h2>PHONE NUMBER</h2>
                        <a href="tel:(+64-272711111)">(+64) 272711111</a>
                        </div>
                    </div>
                    </div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
    )
}
export default Header;