import React from 'react';
import {BrowserRouter,Link} from 'react-router-dom';
export default function({logo,user}){
    return(
        <header id="header">
        <nav className="navbar navbar-default navbar-fixed-top menu">
        <BrowserRouter>
          <div className="container">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <Link className="navbar-brand" to="/"> <img src={logo} alt="logo" width="80"  /> </Link>
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right main-menu">
                <li className="dropdown">
                  <Link to="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Home </Link>
                </li>
                <li className="dropdown">
                  <Link to="/user" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span><img src={logo} width="50" alt="user" /></span> Yusuff</Link>
                </li>
              </ul>
              <form className="navbar-form navbar-right hidden-sm">
                <div className="form-group">
                  <i className="icon ion-android-search" />
                  <input type="text" className="form-control" placeholder="Search friends, photos, videos" />
                </div>
              </form>
            </div>{/* /.navbar-collapse */}
          </div>{/* /.container */}
        </BrowserRouter>
        </nav>
      </header>
    )
}