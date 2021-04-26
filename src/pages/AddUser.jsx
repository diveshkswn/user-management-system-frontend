import axios from 'axios';
import React, { useState } from 'react';

function AddUser() {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
  });
  const [successBanner, setSuccessBanner] = useState(false);

  function handleInput(event) {
    setUser((oldVal) => ({ ...oldVal, [event.target.name]: event.target.value }));
    // console.log(user);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const data = await axios.post('/api/v1/users', user);
    if (data.status === 201) {
      setSuccessBanner(true);
      setTimeout(() => {
        setSuccessBanner(false);
      }, 2400);
    }
    setUser({
      name: '',
      username: '',
      email: '',
      phone: '',
      website: '',
    });
  }

  return (
    <div className="container mt-5">
      <div className="mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={user.name}
              onChange={handleInput}

            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={user.username}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={user.email}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={user.phone}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={user.website}
              onChange={handleInput}
            />
          </div>
          <button type="button" onClick={handleSubmit} className="btn btn-primary btn-block">Add User</button>
        </form>

      </div>
      {successBanner ? (
        <div className="mt-5 alert alert-success" role="alert">
          Data saved successfully
        </div>
      ) : null }
    </div>
  );
}

export default AddUser;
