import React, { useState } from 'react'
import DragNDrop from '../components/DragNDrop';
import SideBar from "../components/SideBar";
import Modal from "react-modal";
import { ModalContext } from "../context/ModalContext";
import ModalInfo from '../components/ModalInfo';
import { useEffect } from 'react';
import axios from 'axios';
import ModalBoardForm from '../components/ModalBoardForm';

const customStyles = {
  content: {
    position: 'absolute',
    top: '15%',
    left: '23%',
    right: 'auto',
    bottom: 'auto',
    width: '60%',
    height: '63%',
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
  const [modalWorkAddIsOpen, setModalWorkAddIsOpen] = useState(false);
  const [modalInfoData, setModalInfoData] = useState({});
  const [render, setRender] = useState(false);
  const [workInfo, setWorkInfo] = useState([]);

  const changeRender = () => {
    setRender(!render);
  }
  
  async function getWorkInfo() {
    return await axios.get('http://localhost:3000/dashboard/')
    .then(response => {  
      setWorkInfo(response.data.data);
    })
    .catch(error => { console.error(error); return Promise.reject(error); });
  }
  
useEffect(() => {
    getWorkInfo(); 
}, [render]);

  const setModalData = {
    setModalIsOpen,
    setModalInfoData
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
          <Modal
            className={'modal'}
            style={customStyles}
            isOpen={modalWorkAddIsOpen}
            onRequestClose={() => {
              setModalWorkAddIsOpen(false);
            }}
            overlayClassName="overlay"
          >
            <ModalBoardForm render={changeRender} modalClose={setModalWorkAddIsOpen}/>
          </Modal>
          <div className="text">
          <h1 className='page-title'>Proje Tahtası
          <div >
                <i className={'bx bx-plus bx-md'} style={{ color: '#000000' }} onClick={() => {
                  setModalWorkAddIsOpen(true);
                }}></i>
              </div>
          </h1>
        </div>
          <div className="text board">
            <DragNDrop newData={workInfo} changeRender={changeRender} />
          </div>
        </section>
      </ModalContext.Provider>
    </>

  )
}

export default ProjectBoard