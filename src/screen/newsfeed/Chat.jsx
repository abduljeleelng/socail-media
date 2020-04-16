import React, { Component } from 'react';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import logo from '../asset/img/logo.png';
import {Follow, Footer,Create,Header, Active, Profile, Messages} from './component';
const user = {user:{_id:"89",firstName:"Yusuff"}}



export default class Chat extends Component {
  constructor(props){
    super(props);
    this.state={
      ready:true,
    };
  };
    render() {
        return (
<div>
  <Header logo={logo} user={user} />
  {/*Header End*/}
  <div id="page-contents">
    <div className="container">
      <div className="row">
        {/* Newsfeed Common Side Bar Left
          ================================================= */}
        <div className="col-md-3 static">
          <ReactPlaceholder showLoadingAnimation type='media' rows={7} ready={this.state.ready}>
             <Profile />
          </ReactPlaceholder>
          {/*news-feed links ends*/}
          <div id="chat-block">
            <ReactPlaceholder showLoadingAnimation type='media' rows={7} ready={this.state.ready}>
              <Active />
            </ReactPlaceholder>
          </div>
          {/*chat block ends*/}
        </div>
        <div className="col-md-7">
          {/* Post Create Box ================================================= */}
          <Create />


            {/* Post Create Box End*/}
          {/* Post Content================================================= */}
          <ReactPlaceholder showLoadingAnimation type='media' rows={7} ready={this.state.ready}>
            <Messages />
          </ReactPlaceholder>
        </div>
        {/* Newsfeed Common Side Bar Right
          ================================================= */}
        <div className="col-md-2 static">
          <div className="suggestions" id="sticky-sidebar">
            {/**who to follow component */}
            <ReactPlaceholder showLoadingAnimation type='media' rows={7} ready={this.state.ready}>
              <Follow />
            </ReactPlaceholder>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer
    ================================================= */}
  <footer id="footer">
    {/** news feeds footer  */}
    <Footer logo={logo}  />
  </footer>
</div>

        )
    }
}
