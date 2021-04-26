/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoPersonAddOutline } from 'react-icons/io5';
// We use Link from react-router-dom
// Instead of <a> tag because with <a> tag app will reload on every
// route change and we dont want this in SPA.
// Note : It will work only it this components is wrapper inside BrowserRouter
// In Link component we use to instead of href
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        {/* <a className="navbar-brand" href="/">User Management System</a> */}
        <NavLink className="navbar-brand" exact to="/">User Management System</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home

              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/contact">Contact US</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about">About US</NavLink>
            </li>
          </ul>

        </div>
        <NavLink to="/users/add" className="btn btn-outline-light ml-3">
          <IoPersonAddOutline size="1.6em" />
        </NavLink>
      </div>

    </nav>
  );
}

export default Navbar;
