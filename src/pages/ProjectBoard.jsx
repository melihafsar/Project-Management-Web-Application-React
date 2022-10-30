import React, { useState } from 'react'
import DragNDrop from '../components/DragNDrop';
import SideBar from "../components/SideBar";
import Modal from "react-modal";
import { ModalContext } from "../context/ModalContext";

const data = [
  {
    title: "Başlangıç",
    items: ["1", "2", "3", "4"]
  },
  {
    title: "İlerliyor",
    items: ["14", "5", "6"]
  },
  {
    title: "Kontrol",
    items: ["7", "8", "12", "13"]
  },
  {
    title: "Bitti",
    items: ["9", "10", "11"]
  }
]

const customStyles = {
  content: {
    position: 'absolute',
    top: '20%',
    left: '20%',
    right: 'auto',
    bottom: 'auto',
    width: '60%',
    height: '60%',
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
            <h1>{modalInfoData.title}</h1>
            <p>deneme</p>
          </Modal>
          <h1 className='page-title'>Project Board</h1>
          <div className="text board">
            <DragNDrop data={data} />
          </div>
        </section>
      </ModalContext.Provider>
    </>

  )
}

export default ProjectBoard