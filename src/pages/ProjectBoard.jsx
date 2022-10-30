import React, { useState } from 'react'
import DragNDrop from '../components/DragNDrop';
import SideBar from "../components/SideBar";
import Modal from "react-modal";
import { ModalContext } from "../context/ModalContext";

// const data2 = [
//   {
//     title: "Başlangıç",
//     items: ["1", "2", "3", "4"]
//   },
//   {
//     title: "İlerliyor",
//     items: ["14", "5", "6"]
//   },
//   {
//     title: "Kontrol",
//     items: ["7", "8", "12", "13"]
//   },
//   {
//     title: "Bitti",
//     items: ["9", "10", "11"]
//   }
// ]

const data = [
  {
    title: "Başlangıç",
    items: [
      {
        projectID: 1,
        projectName: "Afiş Tasarımı",
        projectDescription: "Fakülte Semineri İçin konuya uygun iki farklı tasarım oluşturulacak.",
        projectDate: "30.10.2022",
        projectOwner: null,
        projectCreator: "Melih Afşar",
        projectPriority: "Yüksek",
        projectLocation: null,
      },
      {
        projectID: 2,
        projectName: "Bilgisayar Onarımı",
        projectDescription: "5 Bilgisayar için hard disk değişimi yapılmalıdır.",
        projectDate: "30.11.2022",
        projectOwner: null,
        projectCreator: "Kenan Baylan",
        projectPriority: "Orta",
        projectLocation: "T4-115",
      },
      {
        projectID: 23,
        projectName: "Bilgisayar Yazılımı Yükleme",
        projectDescription: "Proteus yazılımı yüklenmelidir.",
        projectDate: "30.01.2023",
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
        projectDate: "30.08.2022",
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
        projectDate: "30.09.2022",
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
        projectDate: "03.01.2022",
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
            <h1>Proje ID: {modalInfoData.projectID}</h1>
            <h2>Proje İsmi: {modalInfoData.projectName}</h2>
            <p> Proje Açıklaması: {modalInfoData.projectDescription}</p>
            <p> Projeyi Oluşturan Kişi: {modalInfoData.projectCreator}</p>
            <p> Projenin Oluşturma Tarihi: {modalInfoData.projectDate}</p>
            <p> Proje Önceliği: {modalInfoData.projectPriority}</p>
            <p> Projenin Bilinen Konumu: {modalInfoData.projectLocation ? `${modalInfoData.projectDescription}` : "Belirtilmemiş"}</p>
            <p> Projeyi Alan Kişi: {modalInfoData.projectOwner ? `${modalInfoData.projectOwner}` : "Bilinmiyor"}</p>
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