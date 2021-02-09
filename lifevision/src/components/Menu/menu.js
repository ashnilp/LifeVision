import React from 'react';
import './menu.css'


const Menu = () => {
    return (
        <div className="mainmenu-wrap">
            <div className="row">
                <div className="col-sm-10">
                    <div className="mainmenu">
                        <ul id="mainmenu">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a>Excecutive Committe</a></li>
                            <li><a>Our Work</a></li>
                            <li><a>News/Events</a></li>
                            <li><a href="gallery.html">Gallery</a></li>
                        </ul> 
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="slider-top-btn">
                        <a href="donation.html" className="donate-now-btn">donate now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Menu;