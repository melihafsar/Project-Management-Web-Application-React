import React, { useState, useEffect } from 'react'
import SideBar from "../components/SideBar";
import ContactCard from "../components/ContactCard";
import axios from 'axios';

function Contact() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts();
  }, []);

  function getContacts() {
    return axios.get("http://localhost:3000/contacts")
      .then(response => { setContacts(response.data);})
      .catch(error => { console.error(error); return Promise.reject(error); });
  }

  return (
    <>
      <SideBar />
      <section className="home-section">
        <div className="text">
          <h1 className='page-title'>İletişim Kanalları</h1>
        </div>
        <div className='card-b'>
          {
            contacts.map((contact, index) => (
              <div key={index} className="container">
                <ContactCard data={contact} />
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Contact