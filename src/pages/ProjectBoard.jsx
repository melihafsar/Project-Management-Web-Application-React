import React from 'react'
import DragNDrop from '../components/DragNDrop';
import SideBar from "../components/SideBar";

const data = [
  {
      title: "Başlangıç",
      items: ["1", "2", "3","4"]
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
    items: ["9","10","11"]
}
]


function ProjectBoard() {
  return (
    <>
      <SideBar />
      <section className="home-section">
          <h1 className='page-title'>Project Board</h1>
        <div className="text board">
          <DragNDrop data={ data }/>
        </div>
      </section>
    </>

  )
}

export default ProjectBoard