import React, { Fragment } from 'react';

export default function Abouts() {
    return (
        <Fragment>
        <div className="about-profile">
        <div className="about-content-block">
            <h4 className="grey"><i className="ion-ios-information-outline icon-in-title" />Personal Information</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur</p>
        </div>
        <div className="about-content-block">
            <h4 className="grey"><i className="ion-ios-briefcase-outline icon-in-title" />Work Experiences</h4>
            <div className="organization">
            <img src="images/envato.png" alt="post" className="pull-left img-org" />
            <div className="work-info">
                <h5>Envato</h5>
                <p>Seller - <span className="text-grey">1 February 2013 to present</span></p>
            </div>
            </div>
            <div className="organization">
            <img src="images/envato.png" alt="post" className="pull-left img-org" />
            <div className="work-info">
                <h5>Envato</h5>
                <p>Seller - <span className="text-grey">1 February 2013 to present</span></p>
            </div>
            </div>
            <div className="organization">
            <img src="images/envato.png" alt="post" className="pull-left img-org" />
            <div className="work-info">
                <h5>Envato</h5>
                <p>Seller - <span className="text-grey">1 February 2013 to present</span></p>
            </div>
            </div>
        </div>
        <div className="about-content-block">
            <h4 className="grey"><i className="ion-ios-location-outline icon-in-title" />Location</h4>
            <p>228 Park Eve, New York</p>
            <div className="google-maps">
            <div id="map" className="map" />
            </div>
        </div>
        <div className="about-content-block">
            <h4 className="grey"><i className="ion-ios-heart-outline icon-in-title" />Interests</h4>
            <ul className="interests list-inline">
            <li><span className="int-icons" title="Bycycle riding"><i className="icon ion-android-bicycle" /></span></li>
            <li><span className="int-icons" title="Photography"><i className="icon ion-ios-camera" /></span></li>
            <li><span className="int-icons" title="Shopping"><i className="icon ion-android-cart" /></span></li>
            <li><span className="int-icons" title="Traveling"><i className="icon ion-android-plane" /></span></li>
            <li><span className="int-icons" title="Eating"><i className="icon ion-android-restaurant" /></span></li>
            </ul>
        </div>
        <div className="about-content-block">
            <h4 className="grey"><i className="ion-ios-chatbubble-outline icon-in-title" />Language</h4>
            <ul>
            <li><a href>Russian</a></li>
            <li><a href>English</a></li>
            </ul>
        </div>
        </div>
</Fragment>
    )
}
