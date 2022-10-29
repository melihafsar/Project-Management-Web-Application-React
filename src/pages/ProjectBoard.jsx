import React from 'react'
import DragNDrop from '../components/DragNDrop';
import SideBar from "../components/SideBar";

const data = [
  {
      title: "Group1",
      items: ["1", "2", "3"]
  },
  {
      title: "Group2",
      items: ["4"]
  },
  {
      title: "Group3",
      items: ["7", "8"]
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