import React, { Component, Fragment } from 'react';
export default class Forget extends Component {
    constructor(props){
        super(props);
        this.state={
            loading:false,
            error:'',
            email:'',
            message:'',
        }
    };
    handleChange=email=>e=>{
        this.setState({[email]:e.target.value,error:'',message:''});
    };
    handleReset=e=>{
        e.preventDefault();
        this.setState({loading:true});
    }
    render() {
        const {loading,error,email,message}=this.state;
        return (
            <Fragment>
<div>
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
        </div>
        <div className="col-md-6 bg-white pt-5">
          <div className="sign-in-from">
            <h1 className="mb-0">Forget Password</h1>
            <h2 className="mb-0">{message}</h2>
            <p>{error}</p>
            <form className="mt-4">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" onChange={this.handleChange(email)} value={email} className="form-control mb-0" id="exampleInputEmail1" placeholder="Enter email" />
              </div>
              <div className="d-inline-block w-100">
                {
                    loading ? (<button type="submit" className="btn btn-primary float-right">Loading ... </button>) :
                    (<button type="submit" onClick={this.handleReset} className="btn btn-primary float-right">Reset Password</button>)
                }
              </div>
              <div className="sign-info">
                <span className="dark-color d-inline-block line-height-2">Don't have an account? <a href="/user/signup">Sign up</a></span>
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
}
