import React, { useState } from 'react';

const ModalForItem = ({setUser, user})=>{
    const [data, setData] = useState('');

    const handleSubmit = ()=> {
      setUser([...user, data]);
    }
    
    return(
        <div>
            <input type='text' name='name' value={data.name} onChange={(e)=> setData({id: new Date().getTime().toString(), name: e.target.value})}/>
            <button onClick={()=> handleSubmit()}>Add User</button>
        </div>

    );
}

export default ModalForItem;