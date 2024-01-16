import React from 'react';

export default function Userhome({userData}) {
    const logOut=()=>{
        window.localStorage.clear();
        window.location.href='./sign-in'
    };
        return(
            <div className='user-header' style={{backgroundColor:'gold', width:1300, height:100, display:'flex', justifyContent:'space-between'}}>
                    <h1>Хэрэглэгч</h1>
                    Name<h3>{userData.fname}</h3>
                    Email<h3>{userData.email}</h3>
                    <br/>
                    <button onClick={logOut}>Log Out</button>
            </div>
        )
    }