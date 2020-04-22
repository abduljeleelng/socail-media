import React, { Component } from 'react';
import {  BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PrivateRoute from './screen/auth/PrivateRoute';
import {SignUp,Forget,Home,TimeLine} from './screen';
//import {} from './screen'

export default class MainRouter extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>  
                        <PrivateRoute exact path="/" component={Home}  />
                        <Route exact path="/:id" component={TimeLine} />
                        <Route exact path="/user/signup" component={SignUp} />
                        <Route exact path="/user/forget" component={Forget} />
                    </Switch>
                </Router>
            </div>
        )
    }
}
