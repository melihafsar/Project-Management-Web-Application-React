import React, { useState, useEffect } from 'react'
import axios from "axios";
import SideBar from "../components/SideBar";
function MyNotes() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  function getUsers() {
    return axios.get("http://localhost:3000/users")
      .then(response => { setUsers(response.data);})
      .catch(error => { console.error(error); return Promise.reject(error); });
  }
  return (
    <>
      <SideBar />
      <section className="home-section">
        <div className="text">My-Notes
        {
          users.map((user,index) => {
            return (
                <h1 key={index}>{user.email}</h1>
            )
          })

        }
        
        </div>
      </section>
    </>

  )
}

export default MyNotes