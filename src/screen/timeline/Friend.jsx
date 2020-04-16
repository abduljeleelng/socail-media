import React, { Component, Fragment } from 'react';
import {Header,Footer,Create} from '../newsfeed/component';
import logo from '../asset/img/logo.png';
import {Cover, Activities, FriendList} from './component'

export default class Friend extends Component {
    render() {
        return (
            <Fragment>
                <Header logo={logo} />
<div className="container">
  {/* Timeline
================================================= */}
  <div className="timeline">
      <Cover />

    <div id="page-contents">
      <div className="row">
        <div className="col-md-3" />
        <div className="col-md-7">
          {/* Post Create Box================================================= */}
            <Create />
          {/* Post Create Box End*/ }
          {/* About Content================================================= */ }
          <FriendList />
 
        </div>
        <div className="col-md-2 static">
          <div id="sticky-sidebar">
              <Activities />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<footer id="footer">
<Footer logo={logo} />
</footer>

            </Fragment>
        )
    }
}
