import React, { Component, Fragment } from 'react';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import {Header,Footer,Create,} from '../newsfeed/component';
import logo from '../asset/img/logo.png';
import noProfile from './img/profile.png'

import {postBy} from '../newsfeed/api';
import {user,update} from './api'
import { isAuthenticated } from '../auth';

export default class Setting extends Component {
  constructor(props){
    super(props);
    this.state={
      ready:false,
      user:'',
      about:'',
      photo:'',
      cover:'',
      fileSize: 0,
    }
  };
  handleChange=name=>event=>{
    this.setState({ error: "" });
    const value = name === "photo" ? event.target.files[0] : event.target.value //|| name === "cover" ? event.target.files[0] : event.target.value ;
    //const value = name === "photo" ? event.target.files[0] : event.target.value;
    this.postData.set(name, value);
    this.setState({ [name]: value });
  };

  handlePhotoUpdate=e=>{
    e.preventDefault();
    this.setState({loading:true});
    const token = isAuthenticated().token;
    const userId = isAuthenticated().user._id
    ///console.log(JSON.stringify({userId,token,}));
    //this.postData
    update(userId,token,this.postData).then(data=>{
      if(data.error){
        console.log(data);
        this.setState({loading:false});
     }
      else{
        console.log(data);
        this.setState({loading:false,gohome:true,title:"",body:"",photo:""});
      }
    })
  }
  componentDidMount(){
    this.postData = new FormData();
    this.setState({ user:isAuthenticated().user });
    const userId = isAuthenticated().user._id;
    if(!userId){this.setState({reDirect:true});}
    user(userId).then(data=>{
      if(data.error){return console.log(data.error)}
      this.setState({about:data})
    })
  }
  componentDidUpdate(prevProps,prevState){

  }
    render() {
      const {user,posts,about,loading,username,email,day,month,year}=this.state;
     /// const {username,address,qoutes,following,followers,friends,_id,email,firstName,lastName,day,month,year,gender,country,created} = about
      //console.log(JSON.stringify(about));
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
            <div className="col-sm-12">
                <div className="row">
                <div className="col-lg-6">
                    <div className="iq-card">
                    <div className="iq-card-header d-flex justify-content-between">
                        <div className="iq-header-title">
                        <h4 className="card-title">Account Setting</h4>
                        </div>
                    </div>
                    <div className="iq-card-body">
                        <div className="acc-edit">
                        <form>
                            <div className="form-group">
                            <label htmlFor="uname">Username:</label>
                            <input value={username} type="text" className="form-control" placeholder="username"  />
                            </div>
                            <div className="form-group">
                            <label htmlFor="email">Email Id:</label>
                            <input value={email} type="email"  className="form-control" />
                            </div>
                            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Date of Birth  </label>
                <div className="row">
                  <div className="col-sm-4">
                    <select onChange={this.handleChange("day")} value={day} className="form-control">
                    <option value=""> Select day</option>
                    <option value="1"> 01 </option>
                    <option value="2"> 02 </option>
                    <option value="3"> 03</option>
                    <option value="4"> 04 </option>
                    <option value="5"> 05 </option>
                    <option value="6"> 06 </option>
                    <option value="7"> 07 </option>
                    <option value="8"> 08 </option>
                    <option value="9"> 09 </option>
                    <option value="10"> 10 </option>
                    <option value="11"> 11 </option>
                    <option value="12"> 12</option>
                    <option value="13"> 13</option>
                    <option value="14"> 14</option>
                    <option value="15"> 15</option>
                    <option value="17"> 17</option>
                    <option value="18"> 18</option>
                    <option value="19"> 19</option>
                    <option value="20"> 20</option>
                    <option value="21"> 21</option>
                    <option value="22"> 22</option>
                    <option value="23"> 23</option>
                    <option value="24"> 24</option>
                    <option value="25"> 25</option>
                    <option value="26"> 26</option>
                    <option value="27"> 27</option>
                    <option value="28"> 28</option>
                    <option value="29"> 29</option>
                    <option value="30"> 30</option>
                    <option value="31"> 31</option>
                    </select> 
                  </div>
                  <div className="col-sm-4">
                    <select onChange={this.handleChange("month")} value={month} className="form-control"> 
                    <option value=""> Select Month</option>
                    <option value="1"> January </option>
                    <option value="2"> February </option>
                    <option value="3"> March </option>
                    <option value="4"> April </option>
                    <option value="5"> May</option>
                    <option value="6"> June </option>
                    <option value="7"> July </option>
                    <option value="8"> August </option>
                    <option value="9"> Septmber </option>
                    <option value="10"> October </option>
                    <option value="11"> Noveber </option>
                    <option value="12"> December </option>
                    </select>
                  </div>
                  <div className="col-sm-4">
                    <input type="text" onChange={this.handleChange("year")} value={year} className="form-control"  placeholder="1980" /> 
                  </div>
                </div>
              </div>
                            <div className="form-group">
                            <label className="d-block">Language Known:</label>
                            <div className="custom-control custom-checkbox custom-control-inline">
                                <input type="checkbox" className="custom-control-input" id="english" defaultChecked />
                                <label className="custom-control-label" htmlFor="english">English</label>
                            </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Update </button>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="iq-card">
                    <div className="iq-card-header d-flex justify-content-between">
                        <div className="iq-header-title">
                        <h4 className="card-title">Profile Picture </h4>
                        </div>
                    </div>
                    <div className="iq-card-body">
                        <div className="acc-edit">
                        <form>
                            <div className="form-group">
                            <label htmlFor="uname">Profile Picture [400X400] </label>
                            <input type="file" className="form-control" accept="image/*" onChange={this.handleChange("photo")}   />
                            </div>
                            <div className="form-group">
                            <label htmlFor="email">Profile Cover Picture [1200X400]</label>
                            <input type="file" className="form-control" accept="image/*" onChange={this.handleChange("cover")}  />
                            </div>
                            {
                              loading ? ("Loading..") :
                              <button type="submit" onClick={this.handlePhotoUpdate} className="btn btn-primary">Update picture</button>
                            }
                            
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="iq-card">
                    <div className="iq-card-header d-flex justify-content-between">
                        <div className="iq-header-title">
                        <h4 className="card-title">About me</h4>
                        </div>
                    </div>
                    <div className="iq-card-body">
                        <div className="acc-edit">
                        <form>
                            <div className="form-group">
                            <label htmlFor="uname">about :</label>
                            <input value="" type="text" className="form-control" placeholder="about"  />
                            </div>
                            <div className="form-group">
                            <label htmlFor="email">Favourite Qoutes </label>
                            <input value="" type="text"  className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
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
