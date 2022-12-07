import React, { useState } from 'react'
import DragNDrop from '../components/DragNDrop';
import SideBar from "../components/SideBar";
import Modal from "react-modal";
import { ModalContext } from "../context/ModalContext";
import ModalInfo from '../components/ModalInfo';
import { useEffect } from 'react';
import axios from 'axios';

const customStyles = {
  content: {
    position: 'absolute',
    top: '15%',
    left: '23%',
    right: 'auto',
    bottom: 'auto',
    width: '60%',
    height: '67%',
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

function ProjectBoard() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalInfoData, setModalInfoData] = useState({});
  const [workInfo, setWorkInfo] = useState([]);
  
  async function getWorkInfo() {
    return await axios.get('http://localhost:3000/dashboard/')
    .then(response => {  
      setWorkInfo(response.data.data);
    })
    .catch(error => { console.error(error); return Promise.reject(error); });
  }
  
useEffect(() => { 
}, [workInfo]);

  const setModalData = {
    setModalIsOpen,
    setModalInfoData
  }

  if(Object.keys(workInfo).length === 0) {
    getWorkInfo();
  }

  return (
    <>
      <ModalContext.Provider value={setModalData}>
        <SideBar />
        <section className="home-section">
          <Modal
            className={'modal'}
            style={customStyles}
            isOpen={modalIsOpen}
            onRequestClose={() => {
              setModalIsOpen(false);
            }}
            overlayClassName="overlay"
          >
            <ModalInfo data={modalInfoData} />
          </Modal>
          
          <div className="text">
          <h1 className='page-title'>Proje Tahtası</h1>
        </div>
          <div className="text board">
            <DragNDrop newData={workInfo} />
          </div>
        </section>
      </ModalContext.Provider>
    </>

  )
}

export default ProjectBoard