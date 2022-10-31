import React, { useState } from 'react'
import DragNDrop from '../components/DragNDrop';
import SideBar from "../components/SideBar";
import Modal from "react-modal";
import { ModalContext } from "../context/ModalContext";
import ModalInfo from '../components/ModalInfo';

const data = [
  {
    title: "Başlangıç",
    items: [
      {
        projectID: 1,
        projectName: "Afiş Tasarımı",
        projectDescription: "Fakülte Semineri İçin konuya uygun iki farklı tasarım oluşturulacak.",
        projectStartDay: "30.10.2022",
        projectEndDay: null,
        projectOwner: null,
        projectCreator: "Melih Afşar",
        projectPriority: "Yüksek",
        projectLocation: null,
      },
      {
        projectID: 2,
        projectName: "Bilgisayar Onarımı",
        projectDescription: "5 Bilgisayar için hard disk değişimi yapılmalıdır.",
        projectStartDay: "30.11.2022",
        projectEndDay: null,
        projectOwner: null,
        projectCreator: "Kenan Baylan",
        projectPriority: "Orta",
        projectLocation: "T4-115",
      },
      {
        projectID: 23,
        projectName: "Bilgisayar Yazılımı Yükleme",
        projectDescription: "Proteus yazılımı yüklenmelidir.",
        projectStartDay: "30.01.2023",
        projectEndDay: null,
        projectOwner: null,
        projectCreator: "Ahmet Hasan Mutlu",
        projectPriority: "Düşük",
        projectLocation: "T4-101",
      }
    ]
  },
  {
    title: "İlerliyor",
    items: [
      {
        projectID: 10,
        projectName: "Klima Kontrolü",
        projectDescription: "Bölümdeki laboratuvarların klimaları kontrol edilmelidir.",
        projectStartDay: "30.08.2022",
        projectEndDay: null,
        projectOwner: "Yusuf Ağaç",
        projectCreator: "Yusuf Yıldırım",
        projectPriority: "Düşük",
        projectLocation: null,
      }
    ]
  },
  {
    title: "Kontrol",
    items: [
      {
        projectID: 15,
        projectName: "Seminer Konuşmacıları",
        projectDescription: "Yapay zeka semineri için konuşmacıların ayarlanması.",
        projectStartDay: "30.09.2022",
        projectEndDay: null,
        projectOwner: "Şerif Yılmaz",
        projectCreator: "Emirhan Ese",
        projectPriority: "Yüksek",
        projectLocation: null,
      },
    ]
  },
  {
    title: "Bitti",
    items: [
      {
        projectID: 23,
        projectName: "Bilgisayar Açılmama",
        projectDescription: "3 adet bilgisayarın açılışta siyah ekranda kalma sorunu vardır.",
        projectStartDay: "03.01.2022",
        projectEndDay: "05.01.2022",
        projectOwner: "Melih Afşar",
        projectCreator: "Aziz Eren Sağanda",
        projectPriority: "Yüksek",
        projectLocation: "T4-119",
      },]
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
            <ModalInfo data={modalInfoData} />
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