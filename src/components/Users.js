import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Users() {
const [users,setUsers] = useState([]);
const [isLoading,setIsLoading] = useState(true);

useEffect(() => {
axios('https://jsonplaceholder.typicode.com/users')
.then(res =>  setUsers(res.data))
.finally(() => setIsLoading(false));
},[])

  return (
    <div>
        <h2>Users</h2>
        {isLoading && <div>Loading....</div>}
      <ul>
        {users.map(user =>(
          <>
            <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default Users;
