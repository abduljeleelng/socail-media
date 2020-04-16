import React from 'react'

export default function Images() {
    return (
        <div className="media">
            <div className="row js-masonry" data-masonry="{ &quot;itemSelector&quot;: &quot;.grid-item&quot;, &quot;columnWidth&quot;: &quot;.grid-sizer&quot;, &quot;percentPosition&quot;: true }">
                <div className="grid-sizer col-md-6 col-sm-6" />
                    <div className="grid-item col-md-6 col-sm-6">
                    <div className="media-grid">
                        <div className="img-wrapper" data-toggle="modal" data-target=".modal-1">
                            <img src="http://placehold.it/800x800" alt="users" className="img-responsive post-image" />
                        </div>
                        <div className="media-info">
                        <div className="reaction">
                            <a href className="btn text-green"><i className="fa fa-thumbs-up" /> 63</a>
                            <a href className="btn text-red"><i className="fa fa-thumbs-down" /> 12</a>
                        </div>
                        <div className="user-info">
                            <img src="http://placehold.it/300x300" alt="user-profile" className="profile-photo-sm pull-left" />
                            <div className="user">
                                <h6><a href className="profile-link">Richard Bell</a></h6>
                                <a className="text-green" href>Friend</a>
                            </div>
                        </div>
                        </div>
                        {/*Popup*/}
                        <div className="modal fade modal-1" tabIndex={-1} role="dialog" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                            <div className="post-content">
                                <img src="http://placehold.it/1920x1280" alt="post" className="img-responsive post-image" />
                                <div className="post-container">
                                <img src="http://placehold.it/300x300" alt="user" className="profile-photo-md pull-left" />
                                <div className="post-detail">
                                    <div className="user-info">
                                    <h5><a href className="profile-link">Alexis Clark</a> <span className="following">following</span></h5>
                                    <p className="text-muted">Published a photo about 3 mins ago</p>
                                    </div>
                                    <div className="reaction">
                                    <a href className="btn text-green"><i className="icon ion-thumbsup" /> 13</a>
                                    <a href className="btn text-red"><i className="fa fa-thumbs-down" /> 0</a>
                                    </div>
                                    <div className="line-divider" />
                                    <div className="post-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <i className="em em-anguished" /> <i className="em em-anguished" /> <i className="em em-anguished" /></p>
                                    </div>
                                    <div className="line-divider" />
                                    <div className="post-comment">
                                    <img src="http://placehold.it/300x300" alt="user" className="profile-photo-sm" />
                                    <p><a href="timeline.html" className="profile-link">Diana </a><i className="em em-laughing" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                                    </div>
                                    <div className="post-comment">
                                    <img src="http://placehold.it/300x300" alt="user" className="profile-photo-sm" />
                                    <p><a href="timeline.html" className="profile-link">John</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                                    </div>
                                    <div className="post-comment">
                                    <img src="http://placehold.it/300x300" alt="user" className="profile-photo-sm" />
                                    <input type="text" className="form-control" placeholder="Post a comment" />
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>{/*Popup End*/}
                    </div>
                    </div>
            </div>
        </div>

    )
}
