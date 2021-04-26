/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

function User(props) {
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.name}</td>
      <td>{props.username}</td>
      <td>{props.email}</td>
      <td />
    </tr>
  );
}

export default User;
