import React, { Component } from 'react';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import logo from '../asset/img/logo.png';
import noProfile from '../timeline/img/profile.png'
import { Footer, Header, Create, Post, Story, Birthday, BirthdayMonth} from './component';
import { isAuthenticated } from '../auth';
import {posts,status,birthday,birthdayMonth} from './api';
export default class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      ready:false,
      postsfetch:false,
      statusfetch:false,
      birthdayfetch:false,
      user:'',
      posts:[],
      status:[],
      birthday:[],
      birthdayMonth:[],
    };
  };

  async componentDidMount(){
    try {
      this.setState({user:isAuthenticated().user});
      posts().then(data=>{
        if(data === undefined) return console.log("networ | server Error");
        this.setState({posts:data,postsfetch:true});
      });
      status().then(data=>{
        if(data === undefined) return console.log("networ | server Error");
        this.setState({status:data,statusfetch:true});
      });
      birthday().then(data=>{
        if(data === undefined) return console.log("networ | server Error");
        this.setState({birthday:data,birthdayfetch:true});
      });
      birthdayMonth().then(data=>{
        if(data === undefined) return console.log("networ | server Error");
        this.setState({birthdayMonth:data,birthdayfetch:true});
      });
    } catch (error) {console.log(error)}
  }
    render() {
      const {user,postsfetch,posts,status, statusfetch,birthdayfetch,birthday,birthdayMonth} = this.state;
      ///console.log(JSON.stringify({birthday,birthdayMonth}))
        return (
<div>
  <div className="wrapper">
    <Header  logo={logo} user={user} noProfile={noProfile} profile={noProfile} />
    <div id="content-page" className="content-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 row m-0 p-0">
            <Create />
            <ReactPlaceholder showLoadingAnimation  rows={20} ready={postsfetch}>
              <Post post={posts} user={user} />
            </ReactPlaceholder>
          </div>
          <div className="col-lg-4">
            <ReactPlaceholder showLoadingAnimation type='media' rows={7} ready={statusfetch}>
              <Story status={status} />
            </ReactPlaceholder>
            <ReactPlaceholder showLoadingAnimation type='media' rows={7} ready={birthdayfetch}>
            <Birthday b={birthday} />
            </ReactPlaceholder>
            <ReactPlaceholder showLoadingAnimation type='media' rows={7} ready={birthdayfetch}>
            <BirthdayMonth data={birthdayMonth} />
            </ReactPlaceholder>
          </div>
          <div className="col-sm-12 text-center">
            <img src="images/page-img/page-load-loader.gif" alt="loader" style={{height: 100}} />
          </div>
        </div>
      </div>
    </div>
  </div>
<Footer />
</div>
        )
    }
}
