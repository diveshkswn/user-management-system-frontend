import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function ViewUser() {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    webiste: '',
  });

  async function fetchUserData() {
    const responseData = await axios.get(`/api/v1/users/${id}`);
    if (responseData.data.success === 'true') {
      setUser(responseData.data.data);
    }
  }
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="container py-4 text-center">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4 w-50">
        User Id:
        {' '}
        {id}
      </h1>
      <hr />
      <ul className="list-group ">
        <li className="list-group-item">
          name:
          {' '}
          {user.name}
        </li>
        <li className="list-group-item">
          user name:
          {' '}
          {' '}
          {user.username}
        </li>
        <li className="list-group-item">
          email:
          {' '}
          {' '}
          {user.email}
        </li>
        <li className="list-group-item">
          phone:
          {' '}
          {' '}
          {user.phone}
        </li>
        <li className="list-group-item">
          website:
          {' '}
          {' '}
          {user.website}
        </li>
      </ul>
    </div>
  );
}

export default ViewUser;
