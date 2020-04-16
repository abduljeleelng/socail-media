import React, { Component } from 'react';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";

export default class messages extends Component {
    constructor(props){
        super(props);
        this.state={
          ready:true,
          load:false,
        };
      };
    render() {
        return (
            <div className="chat-room">

                <div className="row">
                    <div className="col-md-5">
                     {/* Contact List in Left*/}
                     <ReactPlaceholder showLoadingAnimation type='media' rows={7} ready={this.state.ready}>
                        <ul className="nav nav-tabs contact-list scrollbar-wrapper scrollbar-outer">
                            <li className="active">
                                <a href="#contact-1" data-toggle="tab">
                                    <div className="contact">
                                    <img src="http://placehold.it/300x300" alt="user"  className="profile-photo-sm pull-left" />
                                    <div className="msg-preview">
                                        <h6>Linda Lohan</h6>
                                        <p className="text-muted">Hi there, how are you</p>
                                        <small className="text-muted">a min ago</small>
                                        <div className="chat-alert">1</div>
                                    </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#contact-2" data-toggle="tab">
                                    <div className="contact">
                                    <img src="http://placehold.it/300x300" alt="user"  className="profile-photo-sm pull-left" />
                                    <div className="msg-preview">
                                        <h6>Julia Cox</h6>
                                        <p className="text-muted">see you soon</p>
                                        <small className="text-muted">an hour ago</small>
                                        <div className="seen"><i className="icon ion-checkmark-round" /></div>
                                    </div>
                                    </div>
                                </a>
                            </li>
                        </ul>{/*Contact List in Left End*/}
                    </ReactPlaceholder>                   
                    </div>
                    <div className="col-md-7">
                        {/*Chat Messages in Right*/}
                        <div className="tab-content scrollbar-wrapper wrapper scrollbar-outer">
                            <div className="tab-pane active" id="contact-1">
                                <div className="chat-body">
                                <ReactPlaceholder showLoadingAnimation type='media' rows={7} ready={this.state.load}>
                                    <ul className="chat-message">
                                        <li className="left">
                                            <img src="http://placehold.it/300x300" alt="user"  className="profile-photo-sm pull-left" />
                                            <div className="chat-item">
                                            <div className="chat-item-header">
                                                <h5>Linda Lohan</h5>
                                                <small className="text-muted">3 days ago</small>
                                            </div>
                                            <p>Hi honey, how are you doing???? Long time no see. Where have you been?</p>
                                            </div>
                                        </li>
                                        <li className="right">
                                            <img src="http://placehold.it/300x300" alt="user"  className="profile-photo-sm pull-right" />
                                            <div className="chat-item">
                                            <div className="chat-item-header">
                                                <h5>Sarah Cruiz</h5>
                                                <small className="text-muted">3 days ago</small>
                                            </div>
                                            <p>I have been on vacation</p>
                                            </div>
                                        </li>
                                        <li className="right">
                                            <img src="http://placehold.it/300x300" alt="user"  className="profile-photo-sm pull-right" />
                                            <div className="chat-item">
                                            <div className="chat-item-header">
                                                <h5>Sarah Cruiz</h5>
                                                <small className="text-muted">3 days ago</small>
                                            </div>
                                            <p>it was a great time for me. we had a lot of fun <i className="em em-blush" /></p>
                                            </div>
                                        </li>
                                        <li className="left">
                                            <img src="http://placehold.it/300x300" alt="user"  className="profile-photo-sm pull-left" />
                                            <div className="chat-item">
                                            <div className="chat-item-header">
                                                <h5>Linda Lohan</h5>
                                                <small className="text-muted">3 days ago</small>
                                            </div>
                                            <p>that's cool I wish I were you <i className="em em-expressionless" /></p>
                                            </div>
                                        </li>
                                        <li className="right">
                                            <img src="http://placehold.it/300x300" alt="user"  className="profile-photo-sm pull-right" />
                                            <div className="chat-item">
                                            <div className="chat-item-header">
                                                <h5>Sarah Cruiz</h5>
                                                <small className="text-muted">3 days ago</small>
                                            </div>
                                            <p><i className="em em-hand" /></p>
                                            </div>
                                        </li>
                                        <li className="left">
                                            <img src="http://placehold.it/300x300" alt="user"  className="profile-photo-sm pull-left" />
                                            <div className="chat-item">
                                            <div className="chat-item-header">
                                                <h5>Linda Lohan</h5>
                                                <small className="text-muted">a min ago</small>
                                            </div>
                                            <p>Hi there, how are you</p>
                                            </div>
                                        </li>
                                    </ul>
                                </ReactPlaceholder>
                                </div>
                            </div>

                            <div className="tab-pane" id="contact-2">
                                <div className="chat-body">
                                    <ul className="chat-message">
                                        <li className="left">
                                            <img src="http://placehold.it/300x300" alt="user" className="profile-photo-sm pull-left" />
                                            <div className="chat-item">
                                            <div className="chat-item-header">
                                                <h5>Julia Cox</h5>
                                                <small className="text-muted">a day ago</small>
                                            </div>
                                            <p>Hi</p>
                                            </div>
                                        </li>
                                        <li className="right">
                                            <img src="http://placehold.it/300x300" alt="user"  className="profile-photo-sm pull-right" />
                                            <div className="chat-item">
                                            <div className="chat-item-header">
                                                <h5>Sarah Cruiz</h5>
                                                <small className="text-muted">a day ago</small>
                                            </div>
                                            <p>hellow</p>
                                            </div>
                                        </li>
                                        <li className="left">
                                            <img src="http://placehold.it/300x300" alt="user"  className="profile-photo-sm pull-left" />
                                            <div className="chat-item">
                                            <div className="chat-item-header">
                                                <h5>Julia Cox</h5>
                                                <small className="text-muted">an hour ago</small>
                                            </div>
                                            <p>good</p>
                                            </div>
                                        </li>
                                        <li className="right">
                                            <img src="http://placehold.it/300x300" alt="user"  className="profile-photo-sm pull-right" />
                                            <div className="chat-item">
                                            <div className="chat-item-header">
                                                <h5>Sarah Cruiz</h5>
                                                <small className="text-muted">an hour ago</small>
                                            </div>
                                            <p>see you soon</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="tab-pane" id="contact-3">
                                <div className="chat-body">
                                    <ul className="chat-message">
                                        <li className="right">
                                            <img src="http://placehold.it/300x300" alt="user"  className="profile-photo-sm pull-right" />
                                            <div className="chat-item">
                                            <div className="chat-item-header">
                                                <h5>Sarah</h5>
                                                <small className="text-muted">2 days ago</small>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                            </div>
                                        </li>
                                        <li className="left">
                                            <img src="http://placehold.it/300x300" alt="user"  className="profile-photo-sm pull-left" />
                                            <div className="chat-item">
                                            <div className="chat-item-header">
                                                <h5>Sophia Lee</h5>
                                                <small className="text-muted">a day ago</small>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                                            </div>
                                        </li>
                                        <li className="right">
                                            <img src="http://placehold.it/300x300" alt="user"  className="profile-photo-sm pull-right" />
                                            <div className="chat-item">
                                            <div className="chat-item-header">
                                                <h5>Sarah  Cruiz</h5>
                                                <small className="text-muted">13 hours ago</small>
                                            </div>
                                            <p>Okay fine. thank you</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>{/*Chat Messages in Right End*/}
                        <div className="send-message">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Type your message" />
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="button">Send</button>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix" />
                </div>
            </div>

        )
    }
}
