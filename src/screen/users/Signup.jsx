import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import SweetAlert from 'sweetalert2-react';
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
      gender:'',
      city:'',
      country:'',
      message:'',
      redirecTo:false,
      show:false,
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
    const user = {email,password,firstName,lastName,day,month,year,gender,city,country,age,};
    if(validateEmail(email)){
      signup(user).then(data=>{
        if(data === undefined || data === null){ this.setState({error:"networ error || internal server errors",show:false})}
        if(data.errors) return this.setState({error:data.errors,show:false});
        this.setState({loading:false,message:data.messages,show:true,});
      });
    }
    return this.setState({loading:false, error:"Enter Valid email address"});
  }
    render() {
      const {loading,error,email,password,firstName,lastName,day,month,year,gender,city,country,message,redirecTo,show} = this.state;
      if(redirecTo){return <Redirect to="/" />}
        return (
          <Fragment>
 <div>
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


<SweetAlert
        show={show}
        title="Notification"
        text={message}
        onConfirm={() => this.setState({ show:false,redirecTo:true})}
/>
    <div className="container p-0">
      <div className="row no-gutters">
        <div className="col-md-6 text-center">
{    /*
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
          */}
        </div>
        <div className="col-md-6 bg-white">
          <div className="sign-in-from">
            <h5 className="text-danger">{error}</h5>
            <form className="">
              <div className="form-group">
                <div className="row">
                  <div className="col-sm-6">
                    <label htmlFor="exampleInputEmail1">First Name </label>
                    <input type="text" onChange={this.handleChange("firstName")} value={firstName} className="form-control"  placeholder="First Name" /> 
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="exampleInputEmail1">Last Name </label>
                    <input type="text" onChange={this.handleChange("lastName")} value={lastName} className="form-control"  placeholder="Last name" /> 
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail2">Email address</label>
                <input type="email" onChange={this.handleChange("email")} value={email} className="form-control" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" onChange={this.handleChange("password")} value={password} className="form-control" placeholder="Password" />
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
                <div className="row">
                  <div className="col-sm-4">
                    <label htmlFor="exampleInputEmail1">Gender </label>
                    <select onChange={this.handleChange("gender")} value={gender} className="form-control mb-0"> 
                    <option>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Unknow">Unknow</option>
                    </select>
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
                <span className="dark-color d-inline-block line-height-2">Already Have Account ? <a href="/" >Log In</a></span>
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
