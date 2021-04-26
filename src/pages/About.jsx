import React from 'react';

function About() {
  return (
    <div className="container">
      <div className="py-4">
        <h1>About Page</h1>
        <p className="lead">
          This is a User Management System Web application. It has all CRUD functionality.
          Technology used in this web application :
          {' '}
          <br />
          {' '}
          <br />
          <h5>Front-End</h5>
          <ul>
            <li>React js</li>
            <li>React Hooks like- useState , useEffect , Context</li>
            <li>React-DOM-Router</li>
            <li>React-Icons</li>
            <li>Bootstrap</li>
          </ul>

          <h5>Back-End</h5>
          <ul>
            <li>Node js</li>
            <li>Express js Web Framework</li>
            <li>Mongodb Atlas (AWS Hosted Free tier)</li>
          </ul>
          {' '}
          <br />
          <h5>Deployemnt</h5>
          <ul>
            <li>Heroku for Backend</li>
            <li>Netlify for Frontend</li>

          </ul>
        </p>
        <p className="lead">
          About Us and Contact us pages have no functionality. They are just to demonstrate
          React Router Feature.
        </p>
        <h4 className="m-3 text-center">
          Developed by
          {' '}
          <a href="https://diveshkswn.github.io/portfolio_/">Divesh Keswani</a>
        </h4>

      </div>
    </div>
  );
}

export default About;
