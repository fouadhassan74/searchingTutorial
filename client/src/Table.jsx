import React from "react";
import "./App.css";
function Table({ users }) {
  return (
    <div className='table'>
      <table>
        <tbody>
          <tr>
            <th>name</th>
            <th>surname</th>
            <th>email</th>
          </tr>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
