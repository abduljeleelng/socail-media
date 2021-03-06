import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {signin, authenticate } from '../auth';

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

export default class SignIn extends Component {
    constructor(props){
        super(props);
        this.state={
            loading:false,
            error:'',
            email:'',
            password:'',
        }
    };
    handleChange=email=>e=>{
        this.setState({[email]:e.target.value,error:'',message:''});
    };
    handleSignIn=e=>{
        e.preventDefault();
        this.setState({loading:true});
        const {email,password} = this.state;
        const user = {email,password};
        console.log(JSON.stringify(user));
        if (password !== "" && validateEmail(email)){
          signin(user).then(data=>{
            if(data===undefined)return this.setState({loading:false, error:"network error | Internal server Error"});
            if (data.error){ return this.setState({loading:false,error:data.error});}
            if (data.token){ return authenticate(data,()=>{ this.setState({user:data.user,redirecTo:true,email:"",password:"",loading:false}); })}
            return  this.setState({loading:false,error:"Undentify Error, Conatct Web Admin"});
            })
        }
        else
        return this.setState({error:"Enter valid email and Password",loading:false});
      };
    render() {
        const {loading,error,email,password,message,redirecTo} = this.state;
        if(redirecTo){return <Redirect to="/" />}
        //window.location.reload();
        return (
           
              <section className="sign-in-page"> 

              <ul class="cb-slideshow">
                <li><span>Image 01</span><div><h3>re·lax·a·tion</h3></div></li>
                <li><span>Image 02</span><div><h3>qui·e·tude</h3></div></li>
                <li><span>Image 03</span><div><h3>bal·ance</h3></div></li>
                <li><span>Image 04</span><div><h3>e·qua·nim·i·ty</h3></div></li>
                <li><span>Image 05</span><div><h3>com·po·sure</h3></div></li>
                <li><span>Image 06</span><div><h3>se·ren·i·ty</h3></div></li>
              </ul>
                <div id="container-inside">
                  <div id="circle-small" />
                  <div id="circle-medium" />
                  <div id="circle-large" />
                  <div id="circle-xlarge" />
                  <div id="circle-xxlarge" />
                </div>
                <div className="container ">
                  <div className="row ">
                    <div className="col-md-6 text-center ">
                     { /*<div className="sign-in-detail text-white">
                        <a className="sign-in-logo mb-5" href><img src="images/logo-full.png" className="img-fluid" alt="logo" /></a>
                        <div className="owl-carousel" data-autoplay="true" data-loop="true" data-nav="false" data-dots="true" data-items={1} data-items-laptop={1} data-items-tab={1} data-items-mobile={1} data-items-mobile-sm={1} data-margin={0}>
                          <div className="item">
                            <img src="images/login/1.png" className="img-fluid mb-4" alt="logo" />
                            <h4 className="mb-1 text-white">Find new friends</h4>
                            <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                          </div>
                          <div className="item">
                            <img src="images/login/2.png" className="img-fluid mb-4" alt="logo" /> 
                            <h4 className="mb-1 text-white">Connect with the world</h4>
                            <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                          </div>
                          <div className="item">
                            <img src="images/login/3.png" className="img-fluid mb-4" alt="logo" />
                            <h4 className="mb-1 text-white">Create new events</h4>
                            <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                          </div>
                        </div>
                      </div>
              */}
                    </div>
                    <div className="col-md-6 bg-white pt-5">
                      <div className="sign-in-from">
                        <h1 className="mb-0">Sign in</h1>
                        <h5 className="text-success">{message}</h5>
                         <h5 className="text-danger">{error}</h5>
                        <form className="">
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" onChange={this.handleChange("email")} value={email} className="form-control mb-0" id="exampleInputEmail1" placeholder="Enter email" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" onChange={this.handleChange("password")} value={password} className="form-control mb-0" id="exampleInputPassword1" placeholder="Password" />
                          </div>
                          <div className="d-inline-block w-100">
                            <div className="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                              <input type="checkbox" className="custom-control-input" id="customCheck1" />
                              <label className="custom-control-label" htmlFor="customCheck1">Remember Me</label>
                            </div>
                            {
                                loading ? ("Loading .."):
                                (<button type="submit" onClick={this.handleSignIn} className="btn btn-primary float-right">Sign in</button>)
                            }
                          </div>
                          <div className="form-group">
                              <br />
                            <a href="/user/forget"  className="float-right">Forgot password? </a>
                          </div>
                          <div className="sign-info">
                            <span className="dark-color d-inline-block line-height-2">Don't have an account? <a href="/user/signup" >Sign up </a></span>
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
        )
    }
}
