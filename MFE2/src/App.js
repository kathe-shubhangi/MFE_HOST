import React from 'react';
import UserData from './container/UserData';
import './App.css';
 
const App = () => {
    return(
        <>
         <div className='container'>
           <h3>Button from MFE2</h3>
           <button>MFE2 button</button>
         </div>
         <div className='user-info'>
            <UserData/>
         </div>
        </>
    )
}

export default App;