import React from 'react'

function ModalInfo(props) {
  return (
    <>
      <hr />
      <h1>Proje ID: {props.data.projectID}</h1>
      <h2>Proje İsmi: {props.data.projectName}</h2>
      <hr />
      <p className='modal-paragraph'> Proje Açıklaması: {props.data.projectDescription}</p>
      <hr />
      <div className='work-row'>
        <p className='modal-paragraph'> Projeyi Oluşturan Kişi: {props.data.projectCreator}</p>
        <p className='modal-paragraph'> Projenin Oluşturma Tarihi: {props.data.projectStartDay}</p>
      </div>
      <div className='work-row'>
        <p className='modal-paragraph'> Projeyi Alan Kişi: {props.data.projectOwner ? `${props.data.projectOwner}` : "Bilinmiyor"}</p>
        <p className='modal-paragraph'> Projenin Bitme Tarihi: {props.data.projectEndDay ? `${props.data.projectEndDay}` : "Henüz Bitmedi"}</p>
      </div>
      <div className='modal-bottom'>
        <p className='modal-paragraph'> Projenin Bilinen Konumu: {props.data.projectLocation ? `${props.data.projectLocation}` : "Belirtilmemiş"}</p>
        <p className='modal-paragraph'> Proje Önceliği: {props.data.projectPriority}</p>
        <hr />
      </div>
    </>
  )
}

export default ModalInfo
