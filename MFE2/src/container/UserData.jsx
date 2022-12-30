import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import ModalForItem from './ModalForItem';
import './UserData.scss';

const UserData = () => {
  const [user, setUser] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [inputName, setInput] = useState('');
  const [addModal, setAddModal] = useState(false);

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  const editItem = (id) => {
    setShowModal(true);
    let newEditItem = user.find((ele) => {
      return ele.id === id;
    });
    console.log('newEditItem', newEditItem);
    setInput(newEditItem);
  };

  const deleteItem = (id) => {
    const updatedItem = user.filter((ele, ind) => {
      return ind !== id;
    });
    setUser(updatedItem);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='userContainer'>
      {showModal && (
        <Modal
          data={inputName}
          userData={user}
          setData={setUser}
          setShowModal={setShowModal}
        />
      )}
      <ModalForItem setUser={setUser} user={user} />
      <h2>User Data</h2>
      <div className='card-wrapper'>
        {user &&
          user.length > 0 &&
          user.map((userObj, index) => (
            <div className='userInfo'>
              <label className='user-name' key={userObj.id}>
                {userObj.name}
              </label>
              <div>
                <label>{userObj.website || 'domail.com'}</label>
                <br />
                <label>{userObj.phone || 987654321}</label>
              </div>
              <div className='edit-del-button'>
                <button
                  className='edit-btn'
                  onClick={() => editItem(userObj.id)}
                >
                  Edit
                </button>
                <button className='del-btn' onClick={() => deleteItem(index)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserData;
