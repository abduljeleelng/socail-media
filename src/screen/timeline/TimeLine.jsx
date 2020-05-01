import React, { Component, Fragment } from 'react';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import {Header,Footer,Create,} from '../newsfeed/component';
import logo from '../asset/img/logo.png';
import noProfile from './img/profile.png'
import {Cover,TimeLinePost, TimeLineEvent, Abouts, FriendList,Photos} from './component';
import {postBy} from '../newsfeed/api';
import {user} from './api'
import { isAuthenticated } from '../auth';

export default class TimeLine extends Component {
  constructor(){
    super();
    this.state={
      ready:false,
      user:'',
      posts:[],
      about:'',
    }
  };
  componentDidMount(){
    const userId  = this.props.match.params.userId
    this.setState({userId:userId,user:isAuthenticated().user});
    postBy(userId).then((data,err)=>{
        if(data.error){
           console.log(data.error)
        }else{
        this.setState({posts:data.posts,});
        }
    });
    user(userId).then(data=>{
      if(data.error){return console.log(data.error)}
      this.setState({about:data,user:data})
    })

    this.setState({ready:true});
    /**
     *     userList().then(data=>{
      if(data.error){
        return console.log(data.error)
      }
      this.setState({user:data.user});
    });
    user(userId).then(data=>{
      if(data.error){return console.log(data.error)}
      this.setState({about:data})
    })
     * 
     */

  }
  componentDidUpdate(prevProps,prevState){
    if(this.props.match.params.userId !== this.state.userId){
      this.setState({ready:true});
      const userId  = this.props.match.params.userId;
      this.setState({userId:userId});
      postBy(userId).then((data,err)=>{
          if(data.error){
             console.log(data.error)
          }else{
          this.setState({post:data.posts,ready:true});
          }
      });
      user(userId).then(data=>{
        if(data.error){return console.log(data.error)}
        this.setState({about:data})
      })

      /***
       *userList().then(data=>{
        if(data.error){
          return console.log(data.error)
        }
        this.setState({user:data.user});
      });

       * 
       */

    }
  }
    render() {
      const {user,posts,about}=this.state;
        return (
            <Fragment>
<div>
 
  <div id="loading">
    <div id="loading-center">
    </div>
  </div>

  <div className="wrapper">

    <Header logo={logo} user={user} noProfile={noProfile} profile='' />

    <div id="content-page" className="content-page">
      <div className="container">
        <div className="row">
          {/****cover profile  */}
          <Cover user={about} posts={posts} />
          <div className="col-sm-12">
            <div className="tab-content">
              <div className="tab-pane fade active show" id="timeline" role="tabpanel">
                <div className="iq-card-body p-0">
                  <div className="row">
                    {/**Timline event  */}
                    <ReactPlaceholder showLoadingAnimation type='media'  rows={7} ready={false}>
                    <TimeLineEvent />
                    </ReactPlaceholder>
                    

                    <div className="col-lg-8">
                      {/**create Post */}
                      <Create />

                       {/**TimeLine Post */} 
                      <ReactPlaceholder showLoadingAnimation type='media' rows={7} ready={this.state.ready}>
                        <TimeLinePost posts={posts} />
                      </ReactPlaceholder>
                    </div>
                  </div>
                </div>
              </div>
              <ReactPlaceholder showLoadingAnimation type='media' rows={7} ready={this.state.ready}>
                 <Abouts about={about} />
              </ReactPlaceholder>
              <FriendList about={about} />
              <Photos photo={``} />
            </div>
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

            </Fragment>
        )
    }
}
