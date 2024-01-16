import React from 'react';

export default function Userhome({userData}) {
    const logOut=()=>{
        window.localStorage.clear();
        window.location.href='./sign-in'
    };
        return(
            <div className='user-header' style={{width:1300, display:'flex', justifyContent:'space-between', flexDirection:'column'}}>
                    <div style={{width:1300, backgroundColor:'gold', height:100, display:'flex'}}>
                        <h1>Хэрэглэгч</h1>
                        Name<h3>{userData.fname}</h3>
                        Email<h3>{userData.email}</h3>
                        <br/>
                        <button onClick={logOut}>Log Out</button>
                    </div>
                    <div className='user-home' style={{width:1300, height:500,}}>
                    
                    </div>
                    
            </div>
        )
    }