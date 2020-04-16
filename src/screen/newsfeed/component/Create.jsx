import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom'

export default class Create extends Component {
    render() {
        return (
            <Fragment>
                <div className="create-post">
                    <div className="row">
                        <div className="col-md-7 col-sm-7">
                            <div className="form-group">
                            <img src="https://placehold.it/300x300" alt="user" className="profile-photo-md" />
                            <textarea name="texts" id="exampleTextarea" cols={30} rows={1} className="form-control" placeholder="Write what you wish" />
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-5">
                            <div className="tools">
                                <ul className="publishing-tools list-inline">
                                    <li><Link to="#"><i className="ion-compose" /></Link></li>
                                    <li><Link to="#"><i className="ion-images" /></Link></li>
                                    <li><Link to="#"><i className="ion-ios-videocam" /></Link></li>
                                    <li><Link to="#"><i className="ion-map" /></Link></li>
                                </ul>
                                <button className="btn btn-primary pull-right">Publish</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    };
};
