import React, { Fragment } from 'react';
import {BrowserRouter,} from 'react-router-dom';
import { isAuthenticated, signout } from '../../auth';
export default function({logo,user,noProfile,profile,}){
    return(
      <Fragment>
        <BrowserRouter>
    <div className="iq-top-navbar">
      <div className="iq-navbar-custom">
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          <div className="iq-navbar-logo d-flex justify-content-between">
            <a href="/">
              <img src={logo} className="img-fluid" alt="logo" />
              <span>I am a Catholic</span>
            </a>
            <div className="iq-menu-bt align-self-center">
              <div className="wrapper-menu">
                <div className="main-circle">{/*<i className="ri-menu-line" />*/}</div>
              </div>
            </div>
          </div>
          <div className="iq-search-bar">
            <form action="#" className="searchbox">
              <input type="text" className="text search-input" placeholder="Type here to search..." />
              <a className="search-link" href="/"><i className="ri-search-line" /></a>
            </form>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
            <i className="ri-menu-3-line" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto navbar-list">
              <li>
                <a href={`/${user._id}`} className="iq-waves-effect d-flex align-items-center">
                  <img src={profile} onError={i=>i.target.src=`${noProfile}`} className="img-fluid rounded-circle mr-3" alt={user.firstName} />
                  <div className="caption">
                    <h6 className="mb-0 line-height"> {user.firstName} {user.lastName} </h6>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="search-toggle iq-waves-effect" href="/"><i className="ri-group-line" /></a>
                <div className="iq-sub-dropdown iq-sub-dropdown-large">
                  <div className="iq-card shadow-none m-0">
                    <div className="iq-card-body p-0 ">
                      <div className="bg-primary p-3">
                        <h5 className="mb-0 text-white">Friend Request<small className="badge  badge-light float-right pt-1">4</small></h5>
                      </div>
                      <div className="iq-friend-request">
                        <div className="iq-sub-card iq-sub-card-big d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <div className>
                              <img className="avatar-40 rounded" src="images/user/01.jpg" alt="user" />
                            </div>
                            <div className="media-body ml-3">
                              <h6 className="mb-0 ">Jaques Amole</h6>
                              <p className="mb-0">40  friends</p>
                            </div>
                          </div>
                          <div className="d-flex align-items-center">
                            <a href className="mr-3 btn btn-primary rounded">Confirm</a>
                            <a href className="mr-3 btn btn-secondary rounded">Delete Request</a>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <a href className="mr-3 btn text-primary">View More Request</a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a href className="search-toggle iq-waves-effect">
                  <div id="lottie-beil" />
                  <span className="bg-danger dots" />
                </a>
                <div className="iq-sub-dropdown">
                  <div className="iq-card shadow-none m-0">
                    <div className="iq-card-body p-0 ">
                      <div className="bg-primary p-3">
                        <h5 className="mb-0 text-white">All Notifications<small className="badge  badge-light float-right pt-1">4</small></h5>
                      </div>
                      <a href className="iq-sub-card">
                        <div className="media align-items-center">
                          <div className>
                            <img className="avatar-40 rounded" src="images/user/01.jpg" alt="user" />
                          </div>
                          <div className="media-body ml-3">
                            <h6 className="mb-0 ">Emma Watson Bni</h6>
                            <small className="float-right font-size-12">Just Now</small>
                            <p className="mb-0">95 MB</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a href className="search-toggle iq-waves-effect">
                  <div id="lottie-mail" />
                  <span className="bg-primary count-mail" />
                </a>
                <div className="iq-sub-dropdown">
                  <div className="iq-card shadow-none m-0">
                    <div className="iq-card-body p-0 ">
                      <div className="bg-primary p-3">
                        <h5 className="mb-0 text-white">All Messages<small className="badge  badge-light float-right pt-1">5</small></h5>
                      </div>
                      <a href className="iq-sub-card">
                        <div className="media align-items-center">
                          <div className>
                            <img className="avatar-40 rounded" src="images/user/01.jpg" alt="user" />
                          </div>
                          <div className="media-body ml-3">
                            <h6 className="mb-0 ">Bni Emma Watson</h6>
                            <small className="float-left font-size-12">13 Jun</small>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="navbar-list">
              <li>
                <a href className="search-toggle iq-waves-effect d-flex align-items-center">
                  <i className="ri-arrow-down-s-fill" />
                </a>
                <div className="iq-sub-dropdown iq-user-dropdown">
                  <div className="iq-card shadow-none m-0">
                    <div className="iq-card-body p-0 ">
                      <div className="bg-primary p-3 line-height">
                        <h5 className="mb-0 text-white line-height">Hello {user.firstName} {user.lastName}</h5>
                        <span className="text-white font-size-12">Available</span>
                      </div>
                      <a href={`/${user._id}`} className="iq-sub-card iq-bg-primary-hover">
                        <div className="media align-items-center">
                          <div className="rounded iq-card-icon iq-bg-primary">
                            <i className="ri-file-user-line" />
                          </div>
                          <div className="media-body ml-3">
                            <h6 className="mb-0 ">My Profile</h6>
                            <p className="mb-0 font-size-12">View personal profile details.</p>
                          </div>
                        </div>
                      </a>
                      {
                        isAuthenticated() && (
                          <>
                          <a href className="iq-sub-card iq-bg-warning-hover">
                          <div className="media align-items-center">
                            <div className="rounded iq-card-icon iq-bg-warning">
                              <i className="ri-profile-line" />
                            </div>
                            <div className="media-body ml-3">
                              <h6 className="mb-0 ">Edit Profile</h6>
                              <p className="mb-0 font-size-12">Modify your personal details.</p>
                            </div>
                          </div>
                        </a>
                        <a href className="iq-sub-card iq-bg-danger-hover">
                          <div className="media align-items-center">
                            <div className="rounded iq-card-icon iq-bg-danger">
                              <i className="ri-lock-line" />
                            </div>
                            <div className="media-body ml-3">
                              <h6 className="mb-0 ">Privacy Settings</h6>
                              <p className="mb-0 font-size-12">Control your privacy parameters.</p>
                            </div>
                          </div>
                        </a>
                          </>
                        )
                      }
                      <div className="d-inline-block w-100 text-center p-3">
                        <a className="bg-primary iq-sign-btn" href role="button" onClick={()=>signout(()=>window.location.reload())}>Sign out<i className="ri-login-box-line ml-2" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    </BrowserRouter>
      </Fragment>
    )
}