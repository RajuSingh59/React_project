import React,{useEffect, useState} from 'react'
// import http from  "../http";

export default function Home() {

  const [user,setUsers] = useState([]);

  // useEffect(()=>{
  //  fetchAllUsers();
  // },[])

  // const fetchAllUsers = ()=>{
  //   http.get('/users').then(res=>{
  //     setUsers(res.data)
  //   })
  // }
  return (
    <div>
      <h2>Home page</h2>
      <table className='table'>
         {/* <thead>
           <tr>
            <th>S No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
           </tr>
         </thead> */}

         <tbody>
          {/* {users.map((user,index)=>(
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>edit</td>
          </tr>

          ))} */}
         </tbody>
      </table>
    </div>
  )
}
