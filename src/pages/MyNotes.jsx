import React, { useState, useEffect } from 'react'
import axios from "axios";
import SideBar from "../components/SideBar";
import NoteCard from '../components/NoteCard';
import ModalNote from '../components/ModalNote';
import Modal from 'react-modal';
import { ModalContext } from '../context/ModalContext';
import ModalForm from '../components/ModalForm';

const customStyles = {
  content: {
    position: 'absolute',
    top: '25%',
    left: '25%',
    right: 'auto',
    bottom: 'auto',
    width: '50%',
    height: '50%',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '10px',
    outline: 'none',
    padding: '20px',
    backgroundColor: 'rgb(17, 16, 28)',
  }
}

Modal.setAppElement('#root');

function MyNotes() {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalFormIsOpen, setModalFormIsOpen] = useState(false);
  const [modalNoteData, setModalNoteData] = useState({});
  const [notes, setNotes] = useState([]);

  // setModalData controls the modal structure with the context API.  
  const setModalData = {
    setModalIsOpen,
    setModalNoteData
  }

  useEffect(() => {
    getUsers();
  }, [modalFormIsOpen]);
  function getUsers() {
    return axios.get("http://localhost:3000/note_info")
      .then(response => { setNotes(response.data); })
      .catch(error => { console.error(error); return Promise.reject(error); });
  }

  return (
    <>
      <ModalContext.Provider value={setModalData}>
        <SideBar />
        <section className="home-section">
          {/* Modal --> ModalForm is the interface used to add personal notes to the database. */}
          <Modal
            className={'modal'}
            style={customStyles}
            isOpen={modalFormIsOpen}
            onRequestClose={() => {
              setModalFormIsOpen(false);
            }}
            overlayClassName="overlay"
          >
            <ModalForm data={"elma"} />
          </Modal>
          {/* Modal --> ModalNote provides detailed information of notes on cards. */}
          <Modal
            className={'modal'}
            style={customStyles}
            isOpen={modalIsOpen}
            onRequestClose={() => {
              setModalIsOpen(false);
            }}
            overlayClassName="overlay"
          >
            <ModalNote data={modalNoteData} />
          </Modal>
          <div className="text">
            <h1 className='page-title'>
              Notlarım
              <div >
                <i className={'bx bx-plus bx-md'} style={{ color: '#000000' }}  onClick={() => {
                setModalFormIsOpen(true);
              }}></i>
              </div>
            </h1>
          </div>
          <div className='card-b'>
            {
              notes.map((note, index) => (
                <div key={index} className="container">
                  <NoteCard data={note} />
                </div>
              ))
            }
          </div>
        </section>
      </ModalContext.Provider>
    </>
  )
}

export default MyNotes