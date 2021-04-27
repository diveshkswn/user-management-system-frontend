/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FiEdit, FiDelete } from 'react-icons/fi';
import { CgDetailsMore } from 'react-icons/cg';

function Home() {
  const [users, setUsers] = useState([]);
  const [userCount, setUserCount] = useState(0);
  const [loading, setLoading] = useState(true);

  async function getUsers() {
    const data = await axios.get('/api/v1/users');
    if (data.data.success === 'true') {
      setUsers(data.data.data);
      setUserCount(users.length);
      setLoading(false);
    }
  }

  async function deleteUser(userId) {
    await axios.delete(`/api/v1/users/${userId}`);
  }

  function populateUsers(user) {
    return (
      // <User/>
      <tr>
        <th scope="row">{user.id}</th>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>
          <Link className="btn btn-primary mr-2" to={`/users/view/${user.id}`}><CgDetailsMore /></Link>
          <Link className="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}><FiEdit /></Link>
          <Link className="btn btn-danger mr-2" onClick={() => { deleteUser(user.id); setUserCount((oldVal) => oldVal - 1); }}><FiDelete /></Link>
        </td>
        <td />
      </tr>
    );
  }

  useEffect(() => {
    getUsers();
  }, [userCount]);

  return (
    <div className="container">
      <div className="table-responsive-xl py-4">
        <h1>Users</h1>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(populateUsers)}
          </tbody>
        </table>
        {loading ? (
          <div className="mt-5 d-flex justify-content-center">
            {' '}
            <div className="spinner-border text-primary" style={{ width: '6rem', height: '6rem' }} role="status" />

          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
