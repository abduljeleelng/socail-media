import React, { Component, Fragment } from 'react';
import {Header,Footer,Create, Chat} from '../newsfeed/component';
import logo from '../asset/img/logo.png';
import {Cover,TimeLinePost, Activities, TimeLineEvent, Abouts, FriendList} from './component'
import Photos from './component/Photos';

export default class TimeLine extends Component {
    render() {
        return (
            <Fragment>
<div>
  {/* loader Start */}
  <div id="loading">
    <div id="loading-center">
    </div>
  </div>
  {/* loader END */}
  {/* Wrapper Start */}
  <div className="wrapper">
    {/* Sidebar  */}

    {/* TOP Nav Bar */}
    <Header />
    {/* TOP Nav Bar END */}
    {/* Right Sidebar Panel for chat  Start 
       <Chat />
    {/* Right Sidebar Panel End*/}
    {/* Page Content  */}
    <div id="content-page" className="content-page">
      <div className="container">
        <div className="row">
          {/****cover profile  */}
          <Cover />
          <div className="col-sm-12">
            <div className="tab-content">
              <div className="tab-pane fade active show" id="timeline" role="tabpanel">
                <div className="iq-card-body p-0">
                  <div className="row">
                    {/**Timline event  */}
                    <TimeLineEvent />

                    <div className="col-lg-8">
                      {/**create Post */}
                      <Create />

                       {/**TimeLine Post */} 
                       <TimeLinePost />

                    </div>
                  </div>
                </div>
              </div>

<Abouts />

<FriendList />
<Photos />
            </div>
          </div>
          <div className="col-sm-12 text-center">
            <img src="images/page-img/page-load-loader.gif" alt="loader" style={{height: 100}} />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Wrapper END */}
  {/* Footer */}
<Footer />
</div>

            </Fragment>
        )
    }
}
