import React, { Fragment } from "react";
import {Link} from 'react-router-dom';

export default function Follow(){
    return(
        <Fragment>
            <h4 className="grey">Who to Follow</h4>
            <div className="follow-user">
              <img src="https://placehold.it/300x300" alt="user" className="profile-photo-sm pull-left" />
              <div>
                <h5><Link to="timeline">Diana Amber</Link></h5>
                <p onClick={()=>console.log("clicked Add friend")} className="text-green">Add friend</p>
              </div>
            </div>
        </Fragment>
    )
}