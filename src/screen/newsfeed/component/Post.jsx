import React, { Fragment, Component  } from "react";
//import {Link} from 'react-router-dom';
import { photoAPI } from "../api";
import logo from '../../asset/img/logo.png';
import {Comment} from './index'
//import {} from "react";
 

export default class Post extends Component{


   render(){
    const {post} = this.props;
      return(
          <Fragment>
            {
              post && post.length > 0  ? (
                post.map((post,index)=>{
                  return(
                    <div className="col-sm-12" key={index}>
                    <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                      <div className="iq-card-body">
                        <div className="user-post-data">
                          <div className="d-flex flex-wrap">
                            <div className="media-support-user-img mr-3">
                              <img className="rounded-circle img-fluid" src={""} onError={i=>i.target.src=`${logo}`} alt={`profile `} />
                            </div>
                            <div className="media-support-info mt-2">
                              <h5 className="mb-0 d-inline-block"><a href={`/${post.postedBy._id}`} className>{post.postedBy.firstName}  {post.postedBy.lastName} </a></h5>
                              <p className="mb-0 d-inline-block">{/*Add New Post */}</p>
                              <p className="mb-0 text-primary">{ new Date(post.created).toDateString() }</p>
                            </div>
                          {/* 
                          <div className="iq-card-post-toolbar">
                              <div className="dropdown">
                                <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                  <i className="ri-more-fill" />
                                </span>
                                <div className="dropdown-menu m-0 p-0">
                                  <a className="dropdown-item p-3" href="#">
                                    <div className="d-flex align-items-top">
                                      <div className="icon font-size-20"><i className="ri-save-line" /></div>
                                      <div className="data ml-2">
                                        <h6>Save Post</h6>
                                        <p className="mb-0">Add this to your saved items</p>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                            */}
                          </div>
                        </div>
                        <div className="mt-3">
                          <p>{post.body}</p>
                        </div>
                        <div className="user-post">   
                        <img src={photoAPI+post._id} alt="" className="img-fluid rounded w-100" />                  
                        </div>
                        <div className="comment-area mt-3">
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="like-block position-relative d-flex align-items-center">
                              <div className="d-flex align-items-center">
                                <div className="like-data">
                                  <div className="dropdown">
                                    <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                      <img src="images/icon/01.png" className="img-fluid" alt="like" />
                                    </span>
                                    <div className="dropdown-menu">
                                      <a className="ml-2 mr-2" href data-toggle="tooltip" data-placement="top" title data-original-title="Like"><img src="images/icon/01.png" className="img-fluid" alt="like" /></a>
                                      <a className="mr-2" href data-toggle="tooltip" data-placement="top" title data-original-title="Love"><img src="images/icon/02.png" className="img-fluid" alt="like" /></a>
                                      <a className="mr-2" href data-toggle="tooltip" data-placement="top" title data-original-title="Happy"><img src="images/icon/03.png" className="img-fluid" alt="like" /></a>
                                      <a className="mr-2" href data-toggle="tooltip" data-placement="top" title data-original-title="HaHa"><img src="images/icon/04.png" className="img-fluid" alt="like" /></a>
                                      <a className="mr-2" href data-toggle="tooltip" data-placement="top" title data-original-title="Think"><img src="images/icon/05.png" className="img-fluid" alt="like" /></a>
                                      <a className="mr-2" href data-toggle="tooltip" data-placement="top" title data-original-title="Sade"><img src="images/icon/06.png" className="img-fluid" alt="like" /></a>
                                      <a className="mr-2" href data-toggle="tooltip" data-placement="top" title data-original-title="Lovely"><img src="images/icon/07.png" className="img-fluid" alt="like" /></a>
                                    </div>
                                  </div>
                                </div>
                                <div className="total-like-block ml-2 mr-3">
                                  <div className="dropdown">
                                    <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                      {post.likes && post.likes.length} Likes
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="total-comment-block">
                                <div className="dropdown">
                                  <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                    {post.comments && post.comments.length} Comments
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="share-block d-flex align-items-center feather-icon mr-3">
                              {
                              /*<a href="javascript:void();"><i className="ri-share-line" />
                                <span className="ml-1">99 Share</span></a>
                              */
                              }
                            </div>
                          </div>
                          <hr />
                          <ul className="post-comments p-0 m-0">
                            {
                              post.comments && post.comments.length > 0 ? 
                              (
                                post.comments.map((comment,index)=>(
                                  <li className="mb-2" key={index}>
                                    <div className="d-flex flex-wrap">
                                      <div className="user-img">
                                        <img src={''} onError={i=>i.target.src=`${logo}`} alt="Profile" className="avatar-35 rounded-circle img-fluid" />
                                      </div>
                                      <div className="comment-data-block ml-3">
                                        {/*<h6>Monty Carlo</h6>*/}
                                        <p className="mb-0">{comment.text}</p>
                                      
                                        <div className="d-flex flex-wrap align-items-center comment-activity">
                                        {
                                          /*<a href="javascript:void();">like</a>
                                          <a href="javascript:void();">reply</a>
                                          <a href="javascript:void();">translate</a>
                                          */
                                        }
                                          <span>Comment on {new Date(comment.created).toDateString()} </span>
                                        </div>
                                      </div>
                                    </div>
                                    <hr />
                                  </li>
                                ))
                              ):(
                                <li className="mb-2">
                                <div className="d-flex flex-wrap">
                                  <div className="comment-data-block ml-3">
                                    <h6>Be the first person to comments on this</h6>
                                  </div>
                                </div>
                              </li>
                              )
                            }
                          </ul>
                          <Comment postId={post._id} />
                          { /*  
                          <form className="comment-text d-flex align-items-center mt-3" action="">
                            <input type="text" className="form-control rounded" />
                            <div className="comment-attagement d-flex">
                              <a href><i className="ri-link mr-3" /></a>
                              <a href><i className="ri-user-smile-line mr-3" /></a>
                              <a href><i className="ri-camera-line mr-3" /></a>
                            </div>
                          </form>
                          */}
                        </div>
                      </div>
                    </div>
                  </div>
                  )
                })
              ):(
                <div className="col-sm-12">
                  <h2>be the first person to post </h2>
                </div>
              )
            }

          </Fragment>
      )
      }
};




/*
            <div className="col-sm-12">
              <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                <div className="iq-card-body">
                  <div className="user-post-data">
                    <div className="d-flex flex-wrap">
                      <div className="media-support-user-img mr-3">
                        <img className="rounded-circle img-fluid" src="images/user/01.jpg" alt />
                      </div>
                      <div className="media-support-info mt-2">
                        <h5 className="mb-0 d-inline-block"><a href="#" className>Anna Sthesia</a></h5>
                        <p className="mb-0 d-inline-block">Add New Post</p>
                        <p className="mb-0 text-primary">Just Now</p>
                      </div>
                      <div className="iq-card-post-toolbar">
                        <div className="dropdown">
                          <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                            <i className="ri-more-fill" />
                          </span>
                          <div className="dropdown-menu m-0 p-0">
                            <a className="dropdown-item p-3" href="#">
                              <div className="d-flex align-items-top">
                                <div className="icon font-size-20"><i className="ri-save-line" /></div>
                                <div className="data ml-2">
                                  <h6>Save Post</h6>
                                  <p className="mb-0">Add this to your saved items</p>
                                </div>
                              </div>
                            </a>
                            <a className="dropdown-item p-3" href="#">
                              <div className="d-flex align-items-top">
                                <div className="icon font-size-20"><i className="ri-close-circle-line" /></div>
                                <div className="data ml-2">
                                  <h6>Hide Post</h6>
                                  <p className="mb-0">See fewer posts like this.</p>
                                </div>
                              </div>
                            </a>
                            <a className="dropdown-item p-3" href="#">
                              <div className="d-flex align-items-top">
                                <div className="icon font-size-20"><i className="ri-user-unfollow-line" /></div>
                                <div className="data ml-2">
                                  <h6>Unfollow User</h6>
                                  <p className="mb-0">Stop seeing posts but stay friends.</p>
                                </div>
                              </div>
                            </a>
                            <a className="dropdown-item p-3" href="#">
                              <div className="d-flex align-items-top">
                                <div className="icon font-size-20"><i className="ri-notification-line" /></div>
                                <div className="data ml-2">
                                  <h6>Notifications</h6>
                                  <p className="mb-0">Turn on notifications for this post</p>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
                  </div>
                  <div className="user-post">
                    <div className="d-flex">
                      <div className="col-md-6">
                        <a href="javascript:void();"><img src="images/page-img/p2.jpg" alt="post-image" className="img-fluid rounded w-100" /></a>
                      </div>
                      <div className="col-md-6 row m-0 p-0">
                        <div className="col-sm-12">
                          <a href="javascript:void();"><img src="images/page-img/p1.jpg" alt="post-image" className="img-fluid rounded w-100" /></a>
                        </div>
                        <div className="col-sm-12 mt-3">
                          <a href="javascript:void();"><img src="images/page-img/p3.jpg" alt="post-image" className="img-fluid rounded w-100" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment-area mt-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="like-block position-relative d-flex align-items-center">
                        <div className="d-flex align-items-center">
                          <div className="like-data">
                            <div className="dropdown">
                              <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                <img src="images/icon/01.png" className="img-fluid" alt />
                              </span>
                              <div className="dropdown-menu">
                                <a className="ml-2 mr-2" href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Like"><img src="images/icon/01.png" className="img-fluid" alt /></a>
                                <a className="mr-2" href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Love"><img src="images/icon/02.png" className="img-fluid" alt /></a>
                                <a className="mr-2" href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Happy"><img src="images/icon/03.png" className="img-fluid" alt /></a>
                                <a className="mr-2" href="#" data-toggle="tooltip" data-placement="top" title data-original-title="HaHa"><img src="images/icon/04.png" className="img-fluid" alt /></a>
                                <a className="mr-2" href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Think"><img src="images/icon/05.png" className="img-fluid" alt /></a>
                                <a className="mr-2" href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Sade"><img src="images/icon/06.png" className="img-fluid" alt /></a>
                                <a className="mr-2" href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Lovely"><img src="images/icon/07.png" className="img-fluid" alt /></a>
                              </div>
                            </div>
                          </div>
                          <div className="total-like-block ml-2 mr-3">
                            <div className="dropdown">
                              <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                140 Likes
                              </span>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Max Emum</a>
                                <a className="dropdown-item" href="#">Bill Yerds</a>
                                <a className="dropdown-item" href="#">Hap E. Birthday</a>
                                <a className="dropdown-item" href="#">Tara Misu</a>
                                <a className="dropdown-item" href="#">Midge Itz</a>
                                <a className="dropdown-item" href="#">Sal Vidge</a>
                                <a className="dropdown-item" href="#">Other</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="total-comment-block">
                          <div className="dropdown">
                            <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                              20 Comment
                            </span>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">Max Emum</a>
                              <a className="dropdown-item" href="#">Bill Yerds</a>
                              <a className="dropdown-item" href="#">Hap E. Birthday</a>
                              <a className="dropdown-item" href="#">Tara Misu</a>
                              <a className="dropdown-item" href="#">Midge Itz</a>
                              <a className="dropdown-item" href="#">Sal Vidge</a>
                              <a className="dropdown-item" href="#">Other</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="share-block d-flex align-items-center feather-icon mr-3">
                        <a href="javascript:void();"><i className="ri-share-line" />
                          <span className="ml-1">99 Share</span></a>
                      </div>
                    </div>
                    <hr />
                    <ul className="post-comments p-0 m-0">
                      <li className="mb-2">
                        <div className="d-flex flex-wrap">
                          <div className="user-img">
                            <img src="images/user/02.jpg" alt="userimg" className="avatar-35 rounded-circle img-fluid" />
                          </div>
                          <div className="comment-data-block ml-3">
                            <h6>Monty Carlo</h6>
                            <p className="mb-0">Lorem ipsum dolor sit amet</p>
                            <div className="d-flex flex-wrap align-items-center comment-activity">
                              <a href="javascript:void();">like</a>
                              <a href="javascript:void();">reply</a>
                              <a href="javascript:void();">translate</a>
                              <span> 5 min </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex flex-wrap">
                          <div className="user-img">
                            <img src="images/user/03.jpg" alt="userimg" className="avatar-35 rounded-circle img-fluid" />
                          </div>
                          <div className="comment-data-block ml-3">
                            <h6>Paul Molive</h6>
                            <p className="mb-0">Lorem ipsum dolor sit amet</p>
                            <div className="d-flex flex-wrap align-items-center comment-activity">
                              <a href="javascript:void();">like</a>
                              <a href="javascript:void();">reply</a>
                              <a href="javascript:void();">translate</a>
                              <span> 5 min </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <form className="comment-text d-flex align-items-center mt-3" action="javascript:void(0);">
                      <input type="text" className="form-control rounded" />
                      <div className="comment-attagement d-flex">
                        <a href="javascript:void();"><i className="ri-link mr-3" /></a>
                        <a href="javascript:void();"><i className="ri-user-smile-line mr-3" /></a>
                        <a href="javascript:void();"><i className="ri-camera-line mr-3" /></a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                <div className="iq-card-body">
                  <div className="user-post-data">
                    <div className="d-flex flex-wrap">
                      <div className="media-support-user-img mr-3">
                        <img className="rounded-circle img-fluid" src="images/user/03.jpg" alt />
                      </div>
                      <div className="media-support-info mt-2">
                        <h5 className="mb-0 d-inline-block"><a href="#" className>Barb Ackue</a></h5>
                        <p className="mb-0 d-inline-block">Added New Image in a Post</p>
                        <p className="mb-0 text-primary">1 hour ago</p>
                      </div>
                      <div className="iq-card-post-toolbar">
                        <div className="dropdown">
                          <span className="dropdown-toggle" id="postdata-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                            <i className="ri-more-fill" />
                          </span>
                          <div className="dropdown-menu m-0 p-0" aria-labelledby="postdata-5">
                            <a className="dropdown-item p-3" href="#">
                              <div className="d-flex align-items-top">
                                <div className="icon font-size-20"><i className="ri-save-line" /></div>
                                <div className="data ml-2">
                                  <h6>Save Post</h6>
                                  <p className="mb-0">Add this to your saved items</p>
                                </div>
                              </div>
                            </a>
                            <a className="dropdown-item p-3" href="#">
                              <div className="d-flex align-items-top">
                                <div className="icon font-size-20"><i className="ri-close-circle-line" /></div>
                                <div className="data ml-2">
                                  <h6>Hide Post</h6>
                                  <p className="mb-0">See fewer posts like this.</p>
                                </div>
                              </div>
                            </a>
                            <a className="dropdown-item p-3" href="#">
                              <div className="d-flex align-items-top">
                                <div className="icon font-size-20"><i className="ri-user-unfollow-line" /></div>
                                <div className="data ml-2">
                                  <h6>Unfollow User</h6>
                                  <p className="mb-0">Stop seeing posts but stay friends.</p>
                                </div>
                              </div>
                            </a>
                            <a className="dropdown-item p-3" href="#">
                              <div className="d-flex align-items-top">
                                <div className="icon font-size-20"><i className="ri-notification-line" /></div>
                                <div className="data ml-2">
                                  <h6>Notifications</h6>
                                  <p className="mb-0">Turn on notifications for this post</p>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
                  </div>
                  <div className="user-post">
                    <a href="javascript:void();"><img src="images/page-img/p4.jpg" alt="post" className="img-fluid rounded w-100" /></a>
                  </div>
                  <div className="comment-area mt-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="like-block position-relative d-flex align-items-center">
                        <div className="d-flex align-items-center">
                          <div className="like-data">
                            <div className="dropdown">
                              <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                <img src="images/icon/01.png" className="img-fluid" alt />
                              </span>
                              <div className="dropdown-menu">
                                <a className="ml-2 mr-2" href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Like"><img src="images/icon/01.png" className="img-fluid" alt /></a>
                                <a className="mr-2" href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Love"><img src="images/icon/02.png" className="img-fluid" alt /></a>
                                <a className="mr-2" href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Happy"><img src="images/icon/03.png" className="img-fluid" alt /></a>
                                <a className="mr-2" href="#" data-toggle="tooltip" data-placement="top" title data-original-title="HaHa"><img src="images/icon/04.png" className="img-fluid" alt /></a>
                                <a className="mr-2" href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Think"><img src="images/icon/05.png" className="img-fluid" alt /></a>
                                <a className="mr-2" href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Sade"><img src="images/icon/06.png" className="img-fluid" alt /></a>
                                <a className="mr-2" href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Lovely"><img src="images/icon/07.png" className="img-fluid" alt /></a>
                              </div>
                            </div>
                          </div>
                          <div className="total-like-block ml-2 mr-3">
                            <div className="dropdown">
                              <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                140 Likes
                              </span>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Max Emum</a>
                                <a className="dropdown-item" href="#">Bill Yerds</a>
                                <a className="dropdown-item" href="#">Hap E. Birthday</a>
                                <a className="dropdown-item" href="#">Tara Misu</a>
                                <a className="dropdown-item" href="#">Midge Itz</a>
                                <a className="dropdown-item" href="#">Sal Vidge</a>
                                <a className="dropdown-item" href="#">Other</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="total-comment-block">
                          <div className="dropdown">
                            <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                              20 Comment
                            </span>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">Max Emum</a>
                              <a className="dropdown-item" href="#">Bill Yerds</a>
                              <a className="dropdown-item" href="#">Hap E. Birthday</a>
                              <a className="dropdown-item" href="#">Tara Misu</a>
                              <a className="dropdown-item" href="#">Midge Itz</a>
                              <a className="dropdown-item" href="#">Sal Vidge</a>
                              <a className="dropdown-item" href="#">Other</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="share-block d-flex align-items-center feather-icon mr-3">
                        <a href="javascript:void();"><i className="ri-share-line" />
                          <span className="ml-1">99 Share</span></a>
                      </div>
                    </div>
                    <hr />
                    <ul className="post-comments p-0 m-0">
                      <li className="mb-2">
                        <div className="d-flex flex-wrap">
                          <div className="user-img">
                            <img src="images/user/02.jpg" alt="userimg" className="avatar-35 rounded-circle img-fluid" />
                          </div>
                          <div className="comment-data-block ml-3">
                            <h6>Monty Carlo</h6>
                            <p className="mb-0">Lorem ipsum dolor sit amet</p>
                            <div className="d-flex flex-wrap align-items-center comment-activity">
                              <a href="javascript:void();">like</a>
                              <a href="javascript:void();">reply</a>
                              <a href="javascript:void();">translate</a>
                              <span> 5 min </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex flex-wrap">
                          <div className="user-img">
                            <img src="images/user/03.jpg" alt="userimg" className="avatar-35 rounded-circle img-fluid" />
                          </div>
                          <div className="comment-data-block ml-3">
                            <h6>Paul Molive</h6>
                            <p className="mb-0">Lorem ipsum dolor sit amet</p>
                            <div className="d-flex flex-wrap align-items-center comment-activity">
                              <a href="javascript:void();">like</a>
                              <a href="javascript:void();">reply</a>
                              <a href="javascript:void();">translate</a>
                              <span> 5 min </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <form className="comment-text d-flex align-items-center mt-3" action="javascript:void(0);">
                      <input type="text" className="form-control rounded" />
                      <div className="comment-attagement d-flex">
                        <a href="javascript:void();"><i className="ri-link mr-3" /></a>
                        <a href="javascript:void();"><i className="ri-user-smile-line mr-3" /></a>
                        <a href="javascript:void();"><i className="ri-camera-line mr-3" /></a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                <div className="iq-card-body">
                  <div className="user-post-data">
                    <div className="d-flex flex-wrap">
                      <div className="media-support-user-img mr-3">
                        <img className="rounded-circle img-fluid" src="images/user/04.jpg" alt />
                      </div>
                      <div className="media-support-info mt-2">
                        <h5 className="mb-0 d-inline-block"><a href="#" className>Ira Membrit</a></h5>
                        <p className="mb-0 d-inline-block">Update her Status</p>
                        <p className="mb-0 text-primary">6 hour ago</p>
                      </div>
                      <div className="iq-card-post-toolbar">
                        <div className="dropdown">
                          <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                            <i className="ri-more-fill" />
                          </span>
                          <div className="dropdown-menu m-0 p-0">
                            <a className="dropdown-item p-3" href="#">
                              <div className="d-flex align-items-top">
                                <div className="icon font-size-20"><i className="ri-save-line" /></div>
                                <div className="data ml-2">
                                  <h6>Save Post</h6>
                                  <p className="mb-0">Add this to your saved items</p>
                                </div>
                              </div>
                            </a>
                            <a className="dropdown-item p-3" href="#">
                              <div className="d-flex align-items-top">
                                <div className="icon font-size-20"><i className="ri-close-circle-line" /></div>
                                <div className="data ml-2">
                                  <h6>Hide Post</h6>
                                  <p className="mb-0">See fewer posts like this.</p>
                                </div>
                              </div>
                            </a>
                            <a className="dropdown-item p-3" href="#">
                              <div className="d-flex align-items-top">
                                <div className="icon font-size-20"><i className="ri-user-unfollow-line" /></div>
                                <div className="data ml-2">
                                  <h6>Unfollow User</h6>
                                  <p className="mb-0">Stop seeing posts but stay friends.</p>
                                </div>
                              </div>
                            </a>
                            <a className="dropdown-item p-3" href="#">
                              <div className="d-flex align-items-top">
                                <div className="icon font-size-20"><i className="ri-notification-line" /></div>
                                <div className="data ml-2">
                                  <h6>Notifications</h6>
                                  <p className="mb-0">Turn on notifications for this post</p>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
                  </div>
                  <div className="comment-area mt-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="like-block position-relative d-flex align-items-center">
                        <div className="d-flex align-items-center">
                          <div className="like-data">
                            <div className="dropdown">
                              <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                <img src="images/icon/01.png" className="img-fluid" alt />
                              </span>
                              <div className="dropdown-menu">
                                <a className="ml-2 mr-2" href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Like"><img src="images/icon/01.png" className="img-fluid" alt /></a>
                                <a className="mr-2" href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Love"><img src="images/icon/02.png" className="img-fluid" alt /></a>
                                <a className="mr-2" href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Happy"><img src="images/icon/03.png" className="img-fluid" alt /></a>
                                <a className="mr-2" href="#" data-toggle="tooltip" data-placement="top" title data-original-title="HaHa"><img src="images/icon/04.png" className="img-fluid" alt /></a>
                                <a className="mr-2" href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Think"><img src="images/icon/05.png" className="img-fluid" alt /></a>
                                <a className="mr-2" href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Sade"><img src="images/icon/06.png" className="img-fluid" alt /></a>
                                <a className="mr-2" href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Lovely"><img src="images/icon/07.png" className="img-fluid" alt /></a>
                              </div>
                            </div>
                          </div>
                          <div className="total-like-block ml-2 mr-3">
                            <div className="dropdown">
                              <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                140 Likes
                              </span>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Max Emum</a>
                                <a className="dropdown-item" href="#">Bill Yerds</a>
                                <a className="dropdown-item" href="#">Hap E. Birthday</a>
                                <a className="dropdown-item" href="#">Tara Misu</a>
                                <a className="dropdown-item" href="#">Midge Itz</a>
                                <a className="dropdown-item" href="#">Sal Vidge</a>
                                <a className="dropdown-item" href="#">Other</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="total-comment-block">
                          <div className="dropdown">
                            <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                              20 Comment
                            </span>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">Max Emum</a>
                              <a className="dropdown-item" href="#">Bill Yerds</a>
                              <a className="dropdown-item" href="#">Hap E. Birthday</a>
                              <a className="dropdown-item" href="#">Tara Misu</a>
                              <a className="dropdown-item" href="#">Midge Itz</a>
                              <a className="dropdown-item" href="#">Sal Vidge</a>
                              <a className="dropdown-item" href="#">Other</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="share-block d-flex align-items-center feather-icon mr-3">
                        <a href="javascript:void();"><i className="ri-share-line" />
                          <span className="ml-1">99 Share</span></a>
                      </div>
                    </div>
                    <hr />
                    <ul className="post-comments p-0 m-0">
                      <li className="mb-2">
                        <div className="d-flex flex-wrap">
                          <div className="user-img">
                            <img src="images/user/02.jpg" alt="userimg" className="avatar-35 rounded-circle img-fluid" />
                          </div>
                          <div className="comment-data-block ml-3">
                            <h6>Monty Carlo</h6>
                            <p className="mb-0">Lorem ipsum dolor sit amet</p>
                            <div className="d-flex flex-wrap align-items-center comment-activity">
                              <a href="javascript:void();">like</a>
                              <a href="javascript:void();">reply</a>
                              <a href="javascript:void();">translate</a>
                              <span> 5 min </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex flex-wrap">
                          <div className="user-img">
                            <img src="images/user/03.jpg" alt="userimg" className="avatar-35 rounded-circle img-fluid" />
                          </div>
                          <div className="comment-data-block ml-3">
                            <h6>Paul Molive</h6>
                            <p className="mb-0">Lorem ipsum dolor sit amet</p>
                            <div className="d-flex flex-wrap align-items-center comment-activity">
                              <a href="javascript:void();">like</a>
                              <a href="javascript:void();">reply</a>
                              <a href="javascript:void();">translate</a>
                              <span> 5 min </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <form className="comment-text d-flex align-items-center mt-3" action="javascript:void(0);">
                      <input type="text" className="form-control rounded" />
                      <div className="comment-attagement d-flex">
                        <a href="javascript:void();"><i className="ri-link mr-3" /></a>
                        <a href="javascript:void();"><i className="ri-user-smile-line mr-3" /></a>
                        <a href="javascript:void();"><i className="ri-camera-line mr-3" /></a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                <div className="iq-card-body">
                  <div className="post-item">
                    <div className="d-flex flex-wrap">
                      <div className="media-support-user-img mr-3">
                        <img className="rounded-circle img-fluid" src="images/user/1.jpg" alt />
                      </div>
                      <div className="media-support-info mt-2">
                        <h5 className="mb-0 d-inline-block"><a href="#" className>Bni Cyst</a></h5>
                        <p className="ml-1 mb-0 d-inline-block">Changed Profile Picture</p>
                        <p className="mb-0">3 day ago</p>
                      </div>
                      <div className="iq-card-post-toolbar">
                        <div className="dropdown">
                          <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                            <i className="ri-more-fill" />
                          </span>
                          <div className="dropdown-menu m-0 p-0">
                            <a className="dropdown-item p-3" href="#">
                              <div className="d-flex align-items-top">
                                <div className="icon font-size-20"><i className="ri-save-line" /></div>
                                <div className="data ml-2">
                                  <h6>Save Post</h6>
                                  <p className="mb-0">Add this to your saved items</p>
                                </div>
                              </div>
                            </a>
                            <a className="dropdown-item p-3" href="#">
                              <div className="d-flex align-items-top">
                                <div className="icon font-size-20"><i className="ri-close-circle-line" /></div>
                                <div className="data ml-2">
                                  <h6>Hide Post</h6>
                                  <p className="mb-0">See fewer posts like this.</p>
                                </div>
                              </div>
                            </a>
                            <a className="dropdown-item p-3" href="#">
                              <div className="d-flex align-items-top">
                                <div className="icon font-size-20"><i className="ri-user-unfollow-line" /></div>
                                <div className="data ml-2">
                                  <h6>Unfollow User</h6>
                                  <p className="mb-0">Stop seeing posts but stay friends.</p>
                                </div>
                              </div>
                            </a>
                            <a className="dropdown-item p-3" href="#">
                              <div className="d-flex align-items-top">
                                <div className="icon font-size-20"><i className="ri-notification-line" /></div>
                                <div className="data ml-2">
                                  <h6>Notifications</h6>
                                  <p className="mb-0">Turn on notifications for this post</p>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="user-post text-center">
                    <a href="javascript:void();"><img src="images/page-img/p5.jpg" alt="post-image" className="img-fluid rounded w-100 mt-3" /></a>
                  </div>
                  <div className="comment-area mt-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="like-block position-relative d-flex align-items-center">
                        <div className="d-flex align-items-center">
                          <div className="like-data">
                            <div className="dropdown">
                              <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                <img src="images/icon/01.png" className="img-fluid" alt />
                              </span>
                              <div className="dropdown-menu">
                                <a className="ml-2 mr-2" href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Like"><img src="images/icon/01.png" className="img-fluid" alt /></a>
                                <a className="mr-2" href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Love"><img src="images/icon/02.png" className="img-fluid" alt /></a>
                                <a className="mr-2" href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Happy"><img src="images/icon/03.png" className="img-fluid" alt /></a>
                                <a className="mr-2" href="#" data-toggle="tooltip" data-placement="top" title data-original-title="HaHa"><img src="images/icon/04.png" className="img-fluid" alt /></a>
                                <a className="mr-2" href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Think"><img src="images/icon/05.png" className="img-fluid" alt /></a>
                                <a className="mr-2" href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Sade"><img src="images/icon/06.png" className="img-fluid" alt /></a>
                                <a className="mr-2" href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Lovely"><img src="images/icon/07.png" className="img-fluid" alt /></a>
                              </div>
                            </div>
                          </div>
                          <div className="total-like-block ml-2 mr-3">
                            <div className="dropdown">
                              <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                140 Likes
                              </span>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Max Emum</a>
                                <a className="dropdown-item" href="#">Bill Yerds</a>
                                <a className="dropdown-item" href="#">Hap E. Birthday</a>
                                <a className="dropdown-item" href="#">Tara Misu</a>
                                <a className="dropdown-item" href="#">Midge Itz</a>
                                <a className="dropdown-item" href="#">Sal Vidge</a>
                                <a className="dropdown-item" href="#">Other</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="total-comment-block">
                          <div className="dropdown">
                            <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                              20 Comment
                            </span>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">Max Emum</a>
                              <a className="dropdown-item" href="#">Bill Yerds</a>
                              <a className="dropdown-item" href="#">Hap E. Birthday</a>
                              <a className="dropdown-item" href="#">Tara Misu</a>
                              <a className="dropdown-item" href="#">Midge Itz</a>
                              <a className="dropdown-item" href="#">Sal Vidge</a>
                              <a className="dropdown-item" href="#">Other</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="share-block d-flex align-items-center feather-icon mr-3">
                        <a href="javascript:void();"><i className="ri-share-line" />
                          <span className="ml-1">99 Share</span></a>
                      </div>
                    </div>
                    <hr />
                    <ul className="post-comments p-0 m-0">
                      <li className="mb-2">
                        <div className="d-flex flex-wrap">
                          <div className="user-img">
                            <img src="images/user/02.jpg" alt="userimg" className="avatar-35 rounded-circle img-fluid" />
                          </div>
                          <div className="comment-data-block ml-3">
                            <h6>Monty Carlo</h6>
                            <p className="mb-0">Lorem ipsum dolor sit amet</p>
                            <div className="d-flex flex-wrap align-items-center comment-activity">
                              <a href="javascript:void();">like</a>
                              <a href="javascript:void();">reply</a>
                              <a href="javascript:void();">translate</a>
                              <span> 5 min </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex flex-wrap">
                          <div className="user-img">
                            <img src="images/user/03.jpg" alt="userimg" className="avatar-35 rounded-circle img-fluid" />
                          </div>
                          <div className="comment-data-block ml-3">
                            <h6>Paul Molive</h6>
                            <p className="mb-0">Lorem ipsum dolor sit amet</p>
                            <div className="d-flex flex-wrap align-items-center comment-activity">
                              <a href="javascript:void();">like</a>
                              <a href="javascript:void();">reply</a>
                              <a href="javascript:void();">translate</a>
                              <span> 5 min </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <form className="comment-text d-flex align-items-center mt-3" action="javascript:void(0);">
                      <input type="text" className="form-control rounded" />
                      <div className="comment-attagement d-flex">
                        <a href="javascript:void();"><i className="ri-link mr-3" /></a>
                        <a href="javascript:void();"><i className="ri-user-smile-line mr-3" /></a>
                        <a href="javascript:void();"><i className="ri-camera-line mr-3" /></a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                <div className="iq-card-body">
                  <div className="user-post-data">
                    <div className="d-flex flex-wrap">
                      <div className="media-support-user-img mr-3">
                        <img className="rounded-circle img-fluid" src="images/user/02.jpg" alt />
                      </div>
                      <div className="media-support-info mt-2">
                        <h5 className="mb-0 d-inline-block"><a href="#" className>Paige Turner</a></h5>
                        <p className="mb-0 d-inline-block">Added New Video in his Timeline</p>
                        <p className="mb-0 text-primary">1 day ago</p>
                      </div>
                      <div className="iq-card-post-toolbar">
                        <div className="dropdown">
                          <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                            <i className="ri-more-fill" />
                          </span>
                          <div className="dropdown-menu m-0 p-0">
                            <a className="dropdown-item p-3" href="#">
                              <div className="d-flex align-items-top">
                                <div className="icon font-size-20"><i className="ri-save-line" /></div>
                                <div className="data ml-2">
                                  <h6>Save Post</h6>
                                  <p className="mb-0">Add this to your saved items</p>
                                </div>
                              </div>
                            </a>
                            <a className="dropdown-item p-3" href="#">
                              <div className="d-flex align-items-top">
                                <div className="icon font-size-20"><i className="ri-close-circle-line" /></div>
                                <div className="data ml-2">
                                  <h6>Hide Post</h6>
                                  <p className="mb-0">See fewer posts like this.</p>
                                </div>
                              </div>
                            </a>
                            <a className="dropdown-item p-3" href="#">
                              <div className="d-flex align-items-top">
                                <div className="icon font-size-20"><i className="ri-user-unfollow-line" /></div>
                                <div className="data ml-2">
                                  <h6>Unfollow User</h6>
                                  <p className="mb-0">Stop seeing posts but stay friends.</p>
                                </div>
                              </div>
                            </a>
                            <a className="dropdown-item p-3" href="#">
                              <div className="d-flex align-items-top">
                                <div className="icon font-size-20"><i className="ri-notification-line" /></div>
                                <div className="data ml-2">
                                  <h6>Notifications</h6>
                                  <p className="mb-0">Turn on notifications for this post</p>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
                  </div>
                  <div className="user-post">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/j_GsIanLxZk?rel=0" allowFullScreen />
                    </div>
                  </div>
                  <div className="comment-area mt-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="like-block position-relative d-flex align-items-center">
                        <div className="d-flex align-items-center">
                          <div className="like-data">
                            <div className="dropdown">
                              <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                <img src="images/icon/01.png" className="img-fluid" alt />
                              </span>
                              <div className="dropdown-menu">
                                <a className="ml-2 mr-2" href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Like"><img src="images/icon/01.png" className="img-fluid" alt /></a>
                                <a className="mr-2" href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Love"><img src="images/icon/02.png" className="img-fluid" alt /></a>
                                <a className="mr-2" href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Happy"><img src="images/icon/03.png" className="img-fluid" alt /></a>
                                <a className="mr-2" href="#" data-toggle="tooltip" data-placement="top" title data-original-title="HaHa"><img src="images/icon/04.png" className="img-fluid" alt /></a>
                                <a className="mr-2" href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Think"><img src="images/icon/05.png" className="img-fluid" alt /></a>
                                <a className="mr-2" href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Sade"><img src="images/icon/06.png" className="img-fluid" alt /></a>
                                <a className="mr-2" href="#" data-toggle="tooltip" data-placement="top" title data-original-title="Lovely"><img src="images/icon/07.png" className="img-fluid" alt /></a>
                              </div>
                            </div>
                          </div>
                          <div className="total-like-block ml-2 mr-3">
                            <div className="dropdown">
                              <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                                140 Likes
                              </span>
                              <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Max Emum</a>
                                <a className="dropdown-item" href="#">Bill Yerds</a>
                                <a className="dropdown-item" href="#">Hap E. Birthday</a>
                                <a className="dropdown-item" href="#">Tara Misu</a>
                                <a className="dropdown-item" href="#">Midge Itz</a>
                                <a className="dropdown-item" href="#">Sal Vidge</a>
                                <a className="dropdown-item" href="#">Other</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="total-comment-block">
                          <div className="dropdown">
                            <span className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                              20 Comment
                            </span>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">Max Emum</a>
                              <a className="dropdown-item" href="#">Bill Yerds</a>
                              <a className="dropdown-item" href="#">Hap E. Birthday</a>
                              <a className="dropdown-item" href="#">Tara Misu</a>
                              <a className="dropdown-item" href="#">Midge Itz</a>
                              <a className="dropdown-item" href="#">Sal Vidge</a>
                              <a className="dropdown-item" href="#">Other</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="share-block d-flex align-items-center feather-icon mr-3">
                        <a href="javascript:void();"><i className="ri-share-line" />
                          <span className="ml-1">99 Share</span></a>
                      </div>
                    </div>
                    <hr />
                    <ul className="post-comments p-0 m-0">
                      <li className="mb-2">
                        <div className="d-flex flex-wrap">
                          <div className="user-img">
                            <img src="images/user/02.jpg" alt="userimg" className="avatar-35 rounded-circle img-fluid" />
                          </div>
                          <div className="comment-data-block ml-3">
                            <h6>Monty Carlo</h6>
                            <p className="mb-0">Lorem ipsum dolor sit amet</p>
                            <div className="d-flex flex-wrap align-items-center comment-activity">
                              <a href="javascript:void();">like</a>
                              <a href="javascript:void();">reply</a>
                              <a href="javascript:void();">translate</a>
                              <span> 5 min </span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex flex-wrap">
                          <div className="user-img">
                            <img src="images/user/03.jpg" alt="userimg" className="avatar-35 rounded-circle img-fluid" />
                          </div>
                          <div className="comment-data-block ml-3">
                            <h6>Paul Molive</h6>
                            <p className="mb-0">Lorem ipsum dolor sit amet</p>
                            <div className="d-flex flex-wrap align-items-center comment-activity">
                              <a href="javascript:void();">like</a>
                              <a href="javascript:void();">reply</a>
                              <a href="javascript:void();">translate</a>
                              <span> 5 min </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <form className="comment-text d-flex align-items-center mt-3" action="javascript:void(0);">
                      <input type="text" className="form-control rounded" />
                      <div className="comment-attagement d-flex">
                        <a href="javascript:void();"><i className="ri-link mr-3" /></a>
                        <a href="javascript:void();"><i className="ri-user-smile-line mr-3" /></a>
                        <a href="javascript:void();"><i className="ri-camera-line mr-3" /></a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
       */