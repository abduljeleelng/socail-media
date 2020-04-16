import React, { Component,Fragment } from 'react';
import {Link} from 'react-router-dom';

export default class Active extends Component {
    render() {
        return (
            <Fragment>
                <div className="title">Chat online</div>
                <ul className="online-users list-inline">
                <li><Link to="newsfeed-messages.html" title="Linda Lohan"><img src="http://placehold.it/300x300" alt="user" className="img-responsive profile-photo" /><span className="online-dot" /></Link></li>
                <li><Link to="newsfeed-messages.html" title="Sophia Lee"><img src="http://placehold.it/300x300" alt="user" className="img-responsive profile-photo" /><span className="online-dot" /></Link></li>
                <li><Link to="newsfeed-messages.html" title="John Doe"><img src="http://placehold.it/300x300" alt="user" className="img-responsive profile-photo" /><span className="online-dot" /></Link></li>
                <li><Link to="newsfeed-messages.html" title="Alexis Clark"><img src="http://placehold.it/300x300" alt="user" className="img-responsive profile-photo" /><span className="online-dot" /></Link></li>
                <li><Link to="newsfeed-messages.html" title="James Carter"><img src="http://placehold.it/300x300" alt="user" className="img-responsive profile-photo" /><span className="online-dot" /></Link></li>
                <li><Link to="newsfeed-messages.html" title="Robert Cook"><img src="http://placehold.it/300x300" alt="user" className="img-responsive profile-photo" /><span className="online-dot" /></Link></li>
                <li><Link to="newsfeed-messages.html" title="Richard Bell"><img src="http://placehold.it/300x300" alt="user" className="img-responsive profile-photo" /><span className="online-dot" /></Link></li>
                <li><Link to="newsfeed-messages.html" title="Anna Young"><img src="http://placehold.it/300x300" alt="user" className="img-responsive profile-photo" /><span className="online-dot" /></Link></li>
                <li><Link to="newsfeed-messages.html" title="Julia Cox"><img src="http://placehold.it/300x300" alt="user" className="img-responsive profile-photo" /><span className="online-dot" /></Link></li>
                </ul>
            </Fragment>
        )
    }
}
