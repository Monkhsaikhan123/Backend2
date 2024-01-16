
import React, {Component} from 'react';

export default function AdminHome({userData}) {
    const logOut=()=>{
        window.localStorage.clear();
        window.location.href='./sign-in'
    };
        return(
            <div className='user-header' style={{backgroundColor:'gold', width:1300, height:100, display:'flex', justifyContent:'space-between'}}>
                    <button onClick={logOut}>Log Out</button>
            </div>
        )
    }