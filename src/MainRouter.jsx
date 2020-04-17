import React, { Component } from 'react';
import {  BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PrivateRoute from './screen/auth/PrivateRoute';
import {SignUp,Forget,Chat,Friend,Home,Image,People,Video,About,Albulm,FriendTimeLIne,TimeLine} from './screen';
//import {} from './screen'

export default class MainRouter extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>  
                        <PrivateRoute exact path="/" component={Home}  />
                        <PrivateRoute exact path="/chat" component={Chat}  />
                        <PrivateRoute exact path="/friend" component={Friend}  />
                        <PrivateRoute exact path="/images" component={Image}  />
                        <PrivateRoute exact path="/people" component={People}  />
                        <PrivateRoute exact path="/video" component={Video}  />
                        <Route exact path="/:id" component={TimeLine} />
                        <Route exact path="/about/:id" component={About} />
                        <Route exact path="/friend/:id" component={FriendTimeLIne} />
                        <Route exact path="/albulm/:id" component={Albulm} />
                        <Route exact path="/user/signup" component={SignUp} />
                        <Route exact path="/user/forget" component={Forget} />
                    </Switch>
                </Router>
            </div>
        )
    }
}
