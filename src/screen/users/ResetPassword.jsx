import React, { Component, Fragment } from 'react';
import { resetPassword } from '../auth';
import SweetAlert from 'sweetalert2-react';
import { Redirect } from 'react-router-dom';

export default class ResetPassword extends Component {
    constructor(props){
        super(props);
        this.state={
            loading:false,
            show:false,
            error:'',
            password:'',
            password2:'',
            message:'',
            resetPasswordLink:''
        }
    };
    handleChange=email=>e=>{
        this.setState({[email]:e.target.value,error:'',message:''});
    };
    handleReset=e=>{
        e.preventDefault();
        this.setState({loading:true});
        const {password,password2,resetPasswordLink} = this.state;
        const user = {resetPasswordLink,password2}
        if (password === password2){
            resetPassword(user).then(data=>{
            if(data===undefined)return this.setState({loading:false, error:"network error | Internal server Error"});
            if (data.error) return this.setState({loading:false,error:data.error});
            if (data.message) return this.setState({loading:false,message:data.message,show:true,});
            return  this.setState({loading:false,error:"Undentify Error, Conatct Web Admin"});
            })
        }else{
            return this.setState({error:"Password must match each other",loading:false});
        } 
        
    }
    componentDidMount(){
        const token  = this.props.match.params.token;
        this.setState({resetPasswordLink:token});
    }
    render() {
        const {loading,error,password,password2,message,show,redirecTo}=this.state;
        if(redirecTo){return <Redirect to="/" />}
        return (
            <Fragment>
<div>
<SweetAlert
        show={show}
        title="Notification"
        text={message}
        onConfirm={() => this.setState({ show:false,message:'',redirecTo:true})}
/>
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
            {/*
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
                  */}
          </div>
        </div>
        <div className="col-md-6 bg-white pt-5">
          <div className="sign-in-from">
            <h1 className="mb-0">Forget Password</h1>
            <h5 className="text-danger">{error}</h5>
            <form className="mt-4">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Password</label>
                <input type="text" onChange={this.handleChange('password')} value={password} className="form-control mb-0" id="exampleInputEmail1" placeholder="Enter password" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Confirm Password</label>
                <input type="text" onChange={this.handleChange('password2')} value={password2} className="form-control mb-0" id="exampleInputEmail1" placeholder="confirm password" />
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
