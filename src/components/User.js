import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function User() {
  const { id } = useParams();
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios(`${process.env.REACT_APP_API_ENDPOINT}/users/${id}`)
      .then((res) => setUser(res.data))
      .finally(() => setIsLoading(false));
  }, [id]);

  console.log(user);

  return (
    <div>
      <h1>User Detail</h1>
      {isLoading && <div>Loading....</div>}
      {JSON.stringify(user)}
      {/* <div className="card">
        <h3>{user?.name}</h3>
        <p>{user?.username}</p>
        <p>{user?.email}</p>
        <p>{user?.phone}</p>
      </div> */}

      <br></br>
      <br></br>
      <Link to={`/users/${parseInt(id) + 1}`}>
        Next User({parseInt(id) + 1})
      </Link>
    </div>
  );
}

export default User;
