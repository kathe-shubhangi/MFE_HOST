import React, { useState } from 'react';

const Modal = ({data, userData, setData, setShowModal})=>{
    const [inputValue, setInput] = useState(data);
    
    const handleSubmit = () => {
        setData(
            userData.map((ele)=> {
            if(ele.id === inputValue.id) {
                return {...ele, name: inputValue.name}
            }
            return ele;
        }))
        setShowModal(false);
    }

    return(
        <div>
            <input type='text' name='name' value={inputValue.name} onChange={(e) => setInput({...inputValue, name:e.target.value})}/>
            <button onClick={() => handleSubmit()}>Submit</button>
        </div>

    );
}

export default Modal;