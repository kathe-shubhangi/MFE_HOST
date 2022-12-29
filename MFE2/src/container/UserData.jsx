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
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => setUser(data));
    }

    const editItem = (id)=> {
        setShowModal(true);
        let newEditItem = user.find((ele)=> {
            return ele.id === id;
        })
        console.log('newEditItem', newEditItem);
        setInput(newEditItem);
    }

    const deleteItem = (id) => {
        const updatedItem = user.filter((ele, ind) => {
           return ind !== id;
        })
        setUser(updatedItem);
    }

    useEffect(() => {
        fetchData();
    },[])

    return(
        <div className='userContainer'>
            {showModal && <Modal data={inputName} userData={user} setData={setUser} setShowModal={setShowModal}/>}
            <ModalForItem setUser={setUser} user={user}/>
            <h2>User Data</h2>
            <ul>
                {user && user.length > 0 && user.map((userObj, index) => (
                    <div className='userInfo'>
                    <li key={userObj.id} style={{paddingRight: 20}}>{userObj.name}</li>
                    <button onClick={()=> editItem(userObj.id)} style={{marginRight: 20}}>Edit</button>
                    <button onClick={()=> deleteItem(index)}>Delete</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default UserData;