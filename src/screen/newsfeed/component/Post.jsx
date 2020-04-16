import React, { Fragment } from "react";
import {Link} from 'react-router-dom';

export default function Post(){
    return(
        <Fragment>
            <div className="post-content">
                <img src="https://placehold.it/1920x1280" alt="postimage" className="img-responsive post-image" />
                <div className="post-container">
                    <img src="http://placehold.it/300x300" alt="user" className="profile-photo-md pull-left" />
                    <div className="post-detail">
                        <div className="user-info">
                        <h5><Link href="timeline.html" className="profile-link">Alexis Clark</Link> <span className="following">following</span></h5>
                           <p className="text-muted">Published a photo about 3 mins ago</p>
                        </div>
                        <div className="reaction">
                            <Link className="btn text-green"><i className="icon ion-thumbsup" /> 13</Link>
                            <Link className="btn text-red"><i className="fa fa-thumbs-down" /> 0</Link>
                        </div>
                        <div className="line-divider" />
                        <div className="post-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <i className="em em-anguished" /> <i className="em em-anguished" /> <i className="em em-anguished" /></p>
                        </div>
                        <div className="line-divider" />
                        <div className="post-comment">
                        <img src="https://placehold.it/300x300" alt="users" className="profile-photo-sm" />
                        <p><Link to="timeline.html" className="profile-link">Diana </Link><i className="em em-laughing" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                        </div>
                        <div className="post-comment">
                        <img src="https://placehold.it/300x300" alt="user" className="profile-photo-sm" />
                        <p><Link to="timeline.html" className="profile-link">John</Link> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                        </div>
                        <div className="post-comment">
                            <img src="https://placehold.it/300x300" alt="user" className="profile-photo-sm" />
                            <input type="text" className="form-control" placeholder="Post a comment" />
                        </div>
                    </div>
                </div>
            </div>
            {/*** post with video */}
            <div className="post-content">
                <video className="post-video" controls> <source src="videos/1.mp4" type="video/mp4" /></video>
                <div className="post-container">
                    <img src="https://placehold.it/300x300" alt="user" className="profile-photo-md pull-left" />
                    <div className="post-detail">
                        <div className="user-info">
                            <h5><Link to="timeline.html" className="profile-link">Sophia Lee</Link> <span className="following">following</span></h5>
                            <p className="text-muted">Updated her status about 33 mins ago</p>
                        </div>
                        <div className="reaction">
                            <p className="btn text-green"><i className="icon ion-thumbsup" /> 75</p>
                            <p className="btn text-red"><i className="fa fa-thumbs-down" /> 8</p>
                        </div>
                        <div className="line-divider" />
                        <div className="post-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                        <div className="line-divider" />
                        <div className="post-comment">
                            <img src="http://placehold.it/300x300" alt="user" className="profile-photo-sm" />
                            <p><Link to="timeline.html" className="profile-link">Olivia </Link> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <i className="em em-anguished" /> Ut enim ad minim veniam, quis nostrud </p>
                        </div>
                        <div className="post-comment">
                            <img src="http://placehold.it/300x300" alt="users" className="profile-photo-sm" />
                            <p><a href="timeline.html" className="profile-link">Sarah</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                        <div className="post-comment">
                            <img src="http://placehold.it/300x300" alt="user" className="profile-photo-sm" />
                            <p><a href="timeline.html" className="profile-link">Linda</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className="post-comment">
                            <img src="http://placehold.it/300x300" alt="user" className="profile-photo-sm" />
                            <input type="text" className="form-control" placeholder="Post a comment" />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    )
};