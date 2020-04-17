import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { signup} from '../auth';


function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
export default class Signup extends Component {
  constructor(props){
    super(props);
    this.state={
      loading:false,
      error:'',
      email:'',
      password:'',
      firstName:'',
      lastName:'',
      day:'',
      month:'',
      year:'',
      gender:'Unknow',
      city:'city',
      country:'country',
      message:'',
      redirecTo:false,
    };
  };
  handleChange=email=>e=>{
    this.setState({[email]:e.target.value,error:'',message:''});
  };
  handleSignUp=e=>{
    e.preventDefault();
    this.setState({loading:true})
    const {email,password,firstName,lastName,day,month,year,gender,city,country} = this.state;
    const age = `${day}/${month}/${year}`;
    const user = {email,password,firstName,lastName,day,month,year,gender,city,country,age};
    console.log(JSON.stringify(user));
    if(validateEmail(email)){
      signup(user).then(data=>{
        if(data === undefined || data === null) return this.setState({error:"networ error || internal server errors"})
        if(data.error){return this.setState({error:data.error})}
        this.setState({loading:false,message:data.messages,});
      });
    }
    return this.setState({loading:false, error:"Enter Valid email address"});
  }
    render() {
      const {loading,error,email,password,firstName,lastName,day,month,year,message,redirecTo} = this.state;
      if(redirecTo){return <Redirect to="/" />}
        return (
          <Fragment>
 <div>
   
 {/* <div id="loading">
    <div id="loading-center"></div>
        </div> */}
  {/* loader END */}
  {/* Sign in Start */}
  <section className="sign-in-page">
    <div id="container-inside">
      <div id="circle-small" />
      <div id="circle-medium" />
      <div id="circle-large" />
      <div id="circle-xlarge" />
      <div id="circle-xxlarge" />
    </div>
    <div className="container p-0">
      <div className="row no-gutters">
        <div className="col-md-6 text-center pt-5">
          <div className="sign-in-detail text-white">
            <a className="sign-in-logo mb-5" href><img src="images/logo-full.png" className="img-fluid" alt="logo" /></a>
            <div className="owl-carousel" data-autoplay="true" data-loop="true" data-nav="false" data-dots="true" data-items={1} data-items-laptop={1} data-items-tab={1} data-items-mobile={1} data-items-mobile-sm={1} data-margin={0}>
              <div className="item">
                <img src="images/login/1.png" className="img-fluid mb-4" alt="logo" />
                <h4 className="mb-1 text-white">Manage your orders</h4>
                <p>It is a long established fact that a reader will be distracted by the readable content.</p>
              </div>
              <div className="item">
                <img src="images/login/1.png" className="img-fluid mb-4" alt="logo" />
                <h4 className="mb-1 text-white">Manage your orders</h4>
                <p>It is a long established fact that a reader will be distracted by the readable content.</p>
              </div>
              <div className="item">
                <img src="images/login/1.png" className="img-fluid mb-4" alt="logo" />
                <h4 className="mb-1 text-white">Manage your orders</h4>
                <p>It is a long established fact that a reader will be distracted by the readable content.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 bg-white pt-5">
          <div className="sign-in-from">
            <h1 className="mb-0">Sign Up</h1>
            <h2 className="text-success">{message}</h2>
            <h5 className="text-danger">{error}</h5>
            <form className="mt-4">
              <div className="form-group">
                <div className="row">
                  <div className="col-sm-6">
                    <label htmlFor="exampleInputEmail1">First Name </label>
                    <input type="text" onChange={this.handleChange("firstName")} value={firstName} className="form-control mb-0"  placeholder="First Name" /> 
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="exampleInputEmail1">Last Name </label>
                    <input type="text" onChange={this.handleChange("lastName")} value={lastName} className="form-control mb-0"  placeholder="Last name" /> 
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail2">Email address</label>
                <input type="email" onChange={this.handleChange("email")} value={email} className="form-control mb-0" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" onChange={this.handleChange("password")} value={password} className="form-control mb-0" placeholder="Password" />
              </div>
              <div className="form-group">
              <label htmlFor="exampleInputEmail1">Date of Birth  </label>
                <div className="row">
                  <div className="col-sm-4">
                    <label htmlFor="exampleInputEmail1">Day </label>
                    <input type="text" onChange={this.handleChange("day")} value={day} className="form-control mb-0"  placeholder="21" /> 
                  </div>
                  <div className="col-sm-4">
                    <label htmlFor="exampleInputEmail1">Month </label>
                    <input type="text" onChange={this.handleChange("month")} value={month} className="form-control mb-0"  placeholder="02" /> 
                  </div>
                  <div className="col-sm-4">
                    <label htmlFor="exampleInputEmail1">Year </label>
                    <input type="text" onChange={this.handleChange("year")} value={year} className="form-control mb-0"  placeholder="1980" /> 
                  </div>
                </div>
              </div>
              {/***
               * 
               *<div className="form-group">
                <div className="row">
                  <div className="col-sm-4">
                    <label htmlFor="exampleInputEmail1">Gender </label>
                    <input type="text" onChange={this.handleChange("gender")} value={gender} className="form-control mb-0"  placeholder="gender" /> 
                  </div>
                  <div className="col-sm-4">
                    <label htmlFor="exampleInputEmail1">City  </label>
                    <input type="text" onChange={this.handleChange("city")} value={city} className="form-control mb-0"  placeholder="city" /> 
                  </div>
                  <div className="col-sm-4">
                    <label htmlFor="exampleInputEmail1">Country </label>
                    <input type="text" onChange={this.handleChange("country")} value={country} className="form-control mb-0"  placeholder="country" /> 
                  </div>
                </div>
              </div>

               */}

              
              <div className="d-inline-block w-100">
                <div className="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                  <input type="checkbox" className="custom-control-input" id="customCheck1" />
                  <label className="custom-control-label" htmlFor="customCheck1">I accept <a href>Terms and Conditions</a></label>
                </div>
                {
                  loading ? (<button type="submit" className="btn btn-primary float-right">Loading ...</button>):
                  (<button type="submit" onClick={this.handleSignUp} className="btn btn-primary float-right">Sign Up</button>)
                }
              </div>
              <div className="sign-info">
                <span className="dark-color d-inline-block line-height-2">Already Have Account ? <Link to="/" onClick={()=>window.location.reload()}>Log In</Link></span>
                <ul className="iq-social-media">
                  <li><a href><i className="ri-facebook-box-line" /></a></li>
                  <li><a href><i className="ri-twitter-line" /></a></li>
                  <li><a href><i className="ri-instagram-line" /></a></li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
          </Fragment>
        )
    }
};
