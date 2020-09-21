import React , {useEffect, useState} from 'react'
import Card from './Card'
import './style.css'

export default function UserList(){

    const [userData, setUserData] = useState([])

    useEffect(()=> {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                setUserData(data)
            })
            .catch(err=>console.log(err))

    },[])
    const user = userData[0]

    return (
        <div className="realDiv">
            <div><h1>User List</h1></div>
            <div className="wrapper"></div>
            {
                userData.map((user, index)=> {
                    return (
                    <div className="mainDiv">
                        <img src={`https://picsum.photos/id/${index*33}/400/200`} />
                        <h1>{user.name}</h1>
                        <h1>{user.email}</h1>
                    </div>
                    )
                })
            }
            
        </div>
    )
}