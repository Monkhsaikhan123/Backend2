
import React, { useState, useEffect} from 'react';
import Usershome from './usershome'

export default function UserDetails() {
        const [userData, setUserData] = useState('')
        const [Admin,setAdmin] = useState(false)

        useEffect(()=>{
            fetch('http://localhost:3000/userData',{
                method:"POST",
                crossDomain:true,
                headers:{
                    "Content-Type" : 'application/json',
                    Accept: 'appilcation/json',
                    'Access-Control-Allow-Origin' : '*',
                },
                body:JSON.stringify({
                    token:window.localStorage.getItem("token")
                })
            })
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data,'userData')
                
                if(data.data.Usertype==="Admin"){
                    console.log(data.data.Usertype)
                    setAdmin(true);
                    
                }else{
                    console.log(data.data.Usertype)
                }

                setUserData(data.data)
                if(data.data ==='token expired'){
                    alert("Token expired");
                    window.localStorage.clear();
                    window.location.href='./sign-in'
                }
            })
            
        }, []);

        const logOut=()=>{
            window.localStorage.clear();
            window.location.href='./sign-in'
        };
        return(
            Admin?
            <div className='adminheader' style={{backgroundColor:'gold'}}>
                <div>
                    <h1>Welcome Admin</h1>
                    <h1>Category</h1>
                    <button onClick={logOut}>Log Out</button>
                </div>
            </div>:<Usershome userData={userData}/>
            
            
        )
    }
    