/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function Contact() {
  return (
    <div className="container">
      <div className="py-4">
        <h1>Contact Page</h1>
        <p className="lead">
          About Us and Contact us pages have no functionality. They are just to demonstrate
          React Router Feature.
        </p>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
