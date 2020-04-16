import React,{Fragment} from 'react'

export default function Activities() {
    return (
        <Fragment>
            <h4 className="grey">Sarah's activity</h4>
            <div className="feed-item">
              <div className="live-activity">
                <p><a href className="profile-link">Sarah</a> Commended on a Photo</p>
                <p className="text-muted">5 mins ago</p>
              </div>
            </div>
            <div className="feed-item">
              <div className="live-activity">
                <p><a href className="profile-link">Sarah</a> Has posted a photo</p>
                <p className="text-muted">an hour ago</p>
              </div>
            </div>
            <div className="feed-item">
              <div className="live-activity">
                <p><a href className="profile-link">Sarah</a> Liked her friend's post</p>
                <p className="text-muted">4 hours ago</p>
              </div>
            </div>
            <div className="feed-item">
              <div className="live-activity">
                <p><a href className="profile-link">Sarah</a> has shared an album</p>
                <p className="text-muted">a day ago</p>
              </div>
            </div>
        </Fragment>
    )
}
