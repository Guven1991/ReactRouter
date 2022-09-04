import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_ENDPOINT}/users`)
      .then((res) => setUsers(res.data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      {isLoading && <div>Loading....</div>}
      {/* <div style={{ display: 'flex' }}> */}
        <ul style={{ flex: 1 }}>
          {users.map((user) => (
            <>
              <li key={user.id}>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </li>
            </>
          ))}
        </ul>
        {/* <div style={{ flex: 2 }}> */}
          <Outlet />
        {/* </div> */}
      {/* </div> */}
    </div>
  );
}

export default Users;
