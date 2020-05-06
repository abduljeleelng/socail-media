import React, { Component } from 'react';
import { Route, Switch} from "react-router-dom";
import PrivateRoute from './screen/auth/PrivateRoute';
import {SignUp,Forget,ResetPassword,Home,TimeLine,Setting} from './screen';
//import {} from './screen'

export default class MainRouter extends Component {
    render() {
        return (
                    <Switch>  
                        <PrivateRoute exact path="/" component={Home}  />
                        <Route exact path="/:userId" component={TimeLine} />
                        <Route exact path="/user/setting" component={Setting} />
                        <Route exact path="/user/signup/" component={SignUp} />
                        <Route exact path="/user/forget" component={Forget} />
                        <Route exact path="/user/reset-password/:token" component={ResetPassword} />
                    </Switch>
        )
    }
}
