import React, { Fragment } from 'react'

export default function TimeLInePost() {
    return (
        <Fragment>
            <div className="post-content">
            {/*Post Date*/}
            <div className="post-date hidden-xs hidden-sm">
              <h5>Sarah</h5>
              <p className="text-grey">Sometimes ago</p>
            </div>{/*Post Date End*/}
            <img src="http://placehold.it/1920x1280" alt="post" className="img-responsive post-image" />
            <div className="post-container">
              <img src="http://placehold.it/300x300" alt="user" className="profile-photo-md pull-left" />
              <div className="post-detail">
                <div className="user-info">
                  <h5><a href className="profile-link">Sarah Cruiz</a> <span className="following">following</span></h5>
                  <p className="text-muted">Published a photo about 15 mins ago</p>
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
                  <img src="http://placehold.it/300x300" alt="post" className="profile-photo-sm" />
                  <p><a href className="profile-link">Diana </a><i className="em em-laughing" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                </div>
                <div className="post-comment">
                  <img src="http://placehold.it/300x300" alt="post" className="profile-photo-sm" />
                  <p><a href className="profile-link">John</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                </div>
                <div className="post-comment">
                  <img src="http://placehold.it/300x300" alt="post" className="profile-photo-sm" />
                  <input type="text" className="form-control" placeholder="Post a comment" />
                </div>
              </div>
            </div>
          </div>
          {/* Post Content
  ================================================= */}
          <div className="post-content">
            {/*Post Date*/}
            <div className="post-date hidden-xs hidden-sm">
              <h5>Sarah</h5>
              <p className="text-grey">10/22/2016</p>
            </div>{/*Post Date End*/}
            <img src="http://placehold.it/1920x1280" alt="post" className="img-responsive post-image" />
            <div className="post-container">
              <img src="http://placehold.it/300x300" alt="user" className="profile-photo-md pull-left" />
              <div className="post-detail">
                <div className="user-info">
                  <h5><a href="timeline.html" className="profile-link">Sarah Cruiz</a> <span className="following">following</span></h5>
                  <p className="text-muted">Yesterday</p>
                </div>
                <div className="reaction">
                  <a href className="btn text-green"><i className="icon ion-thumbsup" /> 49</a>
                  <a href className="btn text-red"><i className="fa fa-thumbs-down" /> 0</a>
                </div>
                <div className="line-divider" />
                <div className="post-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <i className="em em-anguished" /> <i className="em em-anguished" /> <i className="em em-anguished" /></p>
                </div>
                <div className="line-divider" />
                <div className="post-comment">
                  <img src="http://placehold.it/300x300" alt="post" className="profile-photo-sm" />
                  <p><a href className="profile-link">Diana </a><i className="em em-laughing" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                </div>
                <div className="post-comment">
                  <img src="http://placehold.it/300x300" alt="post" className="profile-photo-sm" />
                  <p><a href className="profile-link">John</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                </div>
                <div className="post-comment">
                  <img src="http://placehold.it/300x300" alt="post" className="profile-photo-sm" />
                  <input type="text" className="form-control" placeholder="Post a comment" />
                </div>
              </div>
            </div>
          </div>
          {/* Post Content
  ================================================= */}
          <div className="post-content">
            {/*Post Date*/}
            <div className="post-date hidden-xs hidden-sm">
              <h5>Sarah</h5>
              <p className="text-grey">10/21/2016</p>
            </div>{/*Post Date End*/}
            <div className="post-container">
              <img src="http://placehold.it/300x300" alt="user" className="profile-photo-md pull-left" />
              <div className="post-detail">
                <div className="user-info">
                  <h5><a href className="profile-link">Sarah Cruiz</a> <span className="following">following</span></h5>
                  <p className="text-muted">2 days ago</p>
                </div>
                <div className="reaction">
                  <a href className="btn text-green"><i className="icon ion-thumbsup" /> 49</a>
                  <a href className="btn text-red"><i className="fa fa-thumbs-down" /> 0</a>
                </div>
                <div className="line-divider" />
                <div className="post-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <i className="em em-anguished" /> <i className="em em-anguished" /> <i className="em em-anguished" /></p>
                </div>
                <div className="line-divider" />
                <div className="post-comment">
                  <img src="http://placehold.it/300x300" alt="post" className="profile-photo-sm" />
                  <p><a href className="profile-link">Diana </a><i className="em em-laughing" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                </div>
                <div className="post-comment">
                  <img src="http://placehold.it/300x300" alt="post" className="profile-photo-sm" />
                  <p><a href className="profile-link">John</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                </div>
                <div className="post-comment">
                  <img src="http://placehold.it/300x300" alt="post" className="profile-photo-sm" />
                  <input type="text" className="form-control" placeholder="Post a comment" />
                </div>
              </div>
            </div>
          </div>
        </Fragment>
    )
}
