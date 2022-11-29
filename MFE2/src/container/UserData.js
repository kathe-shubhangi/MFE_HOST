import React, { useEffect, useState } from 'react';

const UserData = () => {
    const [user, setUser] = useState([]);

    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => setUser(data));
    }

    useEffect(() => {
        fetchData();
    },[])

    return(
        <div>
            <h4>Fetching user data</h4>
            <ul>
                {user && user.length > 0 && user.map((userObj, index) => (
                    <li key={userObj.id}>{userObj.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default UserData;