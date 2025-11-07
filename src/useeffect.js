import { useState, useEffect } from "react";

export function Users() {
  const [users, setUsers] = useState([]);      // store fetched data
  const [loading, setLoading] = useState(true); // show loading text

  useEffect(() => {
    // Fetch user data when component first loads
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty array → runs only once when component mounts

  if (loading) {
    return <h3>Loading users...</h3>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
