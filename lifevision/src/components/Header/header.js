import React from 'react';
import './header.css';


const Header = () => {
    return (
      <div className="header-area">
        <div className="container">
          <div className="row">
              <div className="col-sm-3">
                  <div className="logo">
                      <a href="index.html"><img src="img/LifeVision/lvLogo.jpg" alt=""/></a>
                      <span className="caption">Life Vision Society NZ</span>
                  </div>
              </div>
              <div className="col-md-7 col-md-offset-2 col-sm-10">
                  <div className="header-info">
                      <div className="row">
                          <div className="col-sm-4">
                              <div className="single-header-info">
                                  <img src="img/LifeVision/hour.jpg" alt=""/>
                                  <h2>OPENING HOURS</h2>
                                  <p>9:00 am - 8:00 pm</p>
                              </div>
                          </div>
                          <div className="col-sm-4">
                              <div className="single-header-info">
                                  <img src="img/LifeVision/email.jpg" alt=""/>
                                  <h2>OUR EMAIL</h2>
                                  <a href="mailto:rahalmail@gmail.com">rahalmail@gmail.com</a>
                              </div>
                          </div>
                          <div className="col-sm-4">
                              <div className="single-header-info">
                                  <img src="img/LifeVision/phone.jpg" alt=""/>
                                  <h2>PHONE NUMBER</h2>
                                  <a href="tel:(+88)-01329324206">(+64) 273711111</a>
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