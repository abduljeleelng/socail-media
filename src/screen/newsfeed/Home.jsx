import React, { Component } from 'react';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import logo from '../asset/img/logo.png';
import { Footer, Header, Create, Post, Story, Event, Birthday, Page} from './component';
import { isAuthenticated } from '../auth';
import {posts, photoAPI} from './api';
//const user = {"_id":"89","firstName":"AdeSare Olugbagi"};
export default class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      ready:false,
      postsfetch:false,
      user:'',
      posts:[],
    };
  };

  async componentDidMount(){
    try {
      this.setState({user:isAuthenticated().user});
      posts().then(data=>{
        if(data === undefined) return console.log("networ | server Error");
        this.setState({posts:data,postsfetch:true});
      });   
    } catch (error) {console.log(error)}
  }



    render() {
      const {user,postsfetch,posts} = this.state;
      console.log(JSON.stringify(posts));
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
            <ReactPlaceholder showLoadingAnimation  rows={20} ready={postsfetch}>
              <Post post={posts} user={user} />
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
