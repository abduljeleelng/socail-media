import React,{Fragment} from 'react';
import {Link} from 'react-router-dom'

export default function Profile() {
    return (
        <Fragment>
            <div className="profile-card">
                <img src="http://placehold.it/300x300" alt="user" className="profile-photo" />
                <h5><Link to="/timeline" className="text-white">Sarah Cruiz</Link></h5>
                <Link to="/follower" className="text-white"><i className="ion ion-android-person-add" /> 1,299 followers</Link>
            </div>
            {/*profile card ends*/}
            <ul className="nav-news-feed">
                <li><i className="icon ion-ios-paper" /><div><Link to="/">My Newsfeed</Link></div></li>
                <li><i className="icon ion-ios-people" /><div><Link to="/people">People Nearby</Link></div></li>
                <li><i className="icon ion-ios-people-outline" /><div><Link to="friend">Friends</Link></div></li>
                <li><i className="icon ion-chatboxes" /><div><Link to="chat">Messages</Link></div></li>
                <li><i className="icon ion-images" /><div><Link to="images">Images</Link></div></li>
                <li><i className="icon ion-ios-videocam" /><div><Link to="video">Videos </Link></div></li>
            </ul>
        </Fragment>
    )
};
