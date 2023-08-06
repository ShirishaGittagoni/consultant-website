import React from 'react'

export default function Contactus() {
  return (
    <div className="row">
        <div className="col-sm-3 col-12">
          <div className="form-group mt-2">
            <label>First Name:</label>
            <input
              type="name"
              className="form-control"
              placeholder="first name"
            />
          </div>
        </div>
        <div className="col-sm-3 col-12">
          <div className="form-group mt-2">
            <label>Last Name:</label>
            <input
              type="name"
              className="form-control"
              placeholder="last name"
            />
          </div>
        </div>
       
        <div className='col-sm-3 col-12 mt-3 pt-2 scaling-center scaling-mb scaling-mtop'>
        <button
                className="btn-unic-search active m-r-2 mt-1"
              >
                Submit
              </button>
              
        </div>
        </div>
  )
}
