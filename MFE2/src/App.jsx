import React from 'react';
import UserData from './container/UserData';
import './App.scss';
import { useState } from 'react';
 
const App = () => {
    const [modal, setModal] = useState(false);
    const [value, setValue] = useState('Show User Data')

    const handleClick = () => {
       setModal(!modal);
       setValue('Hide User Data');
    }

    React.useEffect(()=> {
      modal? setValue('Hide User Data') : setValue('Show User Data');
    },[modal]);

    return(
        <>
         <div className='container'>
           <h3>Button from MFE2</h3>
           <button onClick={()=> handleClick()}>{value}</button>
         </div>
         {modal && 
          <div className='user-info'>
              <UserData/>
          </div>
         }
        </>
    )
}

export default App;