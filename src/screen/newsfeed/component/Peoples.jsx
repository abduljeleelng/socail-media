import React from 'react';
import {Link} from 'react-router-dom';
export default function(){
    return(
        <div class="nearby-user">
            <div class="row">
                <div class="col-md-2 col-sm-2">
                    <img src="http://placehold.it/300x300" alt="user" class="profile-photo-lg" />
                </div>
                <div class="col-md-7 col-sm-7">
                    <h5><Link to="#" class="profile-link">Sophia Page</Link></h5>
                    <p>Software Engineer</p>
                    <p class="text-muted">500m away</p>
                </div>
                <div class="col-md-3 col-sm-3">
                    <button class="btn btn-primary pull-right">Add Friend</button>
                </div>
            </div>
      </div>
    )
}