import React from 'react';
import { Link } from 'react-router-dom';

export default function Friends() {
    return (
        <div class="friend-list">
            <div class="row">
                <div class="col-md-6 col-sm-6">
                    <div class="friend-card">
                        <img src="https://placehold.it/1030x360" alt="profile-cover" class="img-responsive cover" />
                        <div class="card-info">
                            <img src="https://placehold.it/300x300" alt="user" class="profile-photo-lg" />
                            <div class="friend-info">
                                <Link to="#" class="pull-right text-green">My Friend</Link>
                                <h5><Link to="timeline.html" class="profile-link">Sophia Lee</Link></h5>
                                <p>Student at Harvard</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6">
                    <div class="friend-card">
                        <img src="https://placehold.it/1030x360" alt="profile-cover" class="img-responsive cover" />
                        <div class="card-info">
                            <img src="https://placehold.it/300x300" alt="user" class="profile-photo-lg" />
                            <div class="friend-info">
                                <Link to="#" class="pull-right text-green">My Friend</Link>
                                <h5><Link to="timeline.html" class="profile-link">Sophia Lee</Link></h5>
                                <p>Student at Harvard</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
