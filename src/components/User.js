import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function User() {
  const { id } = useParams();
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  console.log(id);
  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .finally(() => setIsLoading(false));
  }, [id]);

  return (
    <div>
      <h1>User Detail</h1>
      {isLoading && <div>Loading....</div>}
      {!isLoading && JSON.stringify(user)}
      <br></br>
      <br></br>
      <Link to={`/users/${parseInt(id) + 1}`}>
        Next User({parseInt(id) + 1})
      </Link>
    </div>
  );
}

export default User;
