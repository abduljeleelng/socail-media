import React, { Fragment } from 'react'

export default function Story(status) {
 //console.log(JSON.stringify(status));
    return (
        <Fragment>
          <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Stories</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <ul className="media-story m-0 p-0">
                  <li className="d-flex mb-4 align-items-center">
                    <i className="ri-add-line font-size-18" />
                    <div className="stories-data ml-3">
                      <h5>Creat Your Story</h5>
                      <p className="mb-0">time to story</p>
                    </div>
                  </li>
                  {
                    status.status.length > 0 ? status.status.map((status,index)=>{
                      console.log(status)
                      return (
                      <li className="d-flex mb-4 align-items-center active" key={index}>
                      <img src="" alt={status.statusBy.firstName} className="rounded-circle img-fluid" />
                      <div className="stories-data ml-3">
                        <h5> {status.statusBy.firstName}  {status.statusBy.lastName}</h5>
                        <p className="mb-0">{new Date(status.created).toLocaleTimeString()}</p>
                      </div>
                    </li>
                    )})
                    :(
                      <li className="d-flex mb-4 align-items-center active">
                      <img src="" alt="Hello" className="rounded-circle img-fluid" />
                      <div className="stories-data ml-3">
                        <h5>No Status </h5>
                        <p className="mb-0">as of {new Date().toDateString()}</p>
                      </div>
                    </li>
                    )
                  }
                </ul>
                <a href className="btn btn-primary d-block mt-3">See All</a>
              </div>
            </div>
        </Fragment>
    )
}
