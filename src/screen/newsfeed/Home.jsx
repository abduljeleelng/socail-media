import React, { Component } from 'react';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import logo from '../asset/img/logo.png';
import { Footer,Create,Header, Post, Story, Event, Birthday, Page} from './component';
const user = {_id:"89",firstName:"Yusuff"};
export default class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      ready:true,
    };
  };
    render() {
        return (

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
<Header  logo={logo} user={user} />
    {/* TOP Nav Bar END */}
    {/* Right Sidebar Panel End*/}
    {/* Page Content  */}
    <div id="content-page" className="content-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 row m-0 p-0">
            {/** new post */}
            <Create />
            {/**Post componet  */}
            <ReactPlaceholder showLoadingAnimation type='media' rows={7} ready={this.state.ready}>
            <Post />
            </ReactPlaceholder>
            </div>
          <div className="col-lg-4">
            <ReactPlaceholder showLoadingAnimation type='media' rows={7} ready={this.state.ready}>
            <Story />
            </ReactPlaceholder>
            <ReactPlaceholder showLoadingAnimation type='media' rows={7} ready={this.state.ready}>
            <Event />
            </ReactPlaceholder>
            <ReactPlaceholder showLoadingAnimation type='media' rows={7} ready={this.state.ready}>
            <Birthday />
            </ReactPlaceholder>
            <ReactPlaceholder showLoadingAnimation type='media' rows={7} ready={this.state.ready}>
            <Page />
            </ReactPlaceholder>
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
  {/* Footer END */}
</div>
        )
    }
}
