import React from 'react'
import RuleHR from './RuleHR'

function ModalInfo(props) {
  return (
    <>
      <RuleHR color="orange" width="100%"/>
      <h1>Proje ID: {props.data.work_id}</h1>
      <h2>Proje İsmi: {props.data.work_name}</h2>
      <RuleHR color="orange" width="100%"/>
      <p className='modal-paragraph'> Proje Açıklaması: {props.data.details}</p>
      <RuleHR color="orange" width="100%"/>
      <div className='work-row'>
        <p className='modal-paragraph'> Projeyi Oluşturan Kişi: {props.data.work_creator}</p>
        <p className='modal-paragraph'> Projenin Oluşturma Tarihi: {props.data.create_time}</p>
      </div>
      <div className='work-row'>
        <p className='modal-paragraph'> Projeyi Alan Kişi: {props.data.work_owner ? `${props.data.work_owner}` : "Bilinmiyor"}</p>
        <p className='modal-paragraph'> Projenin Bitme Tarihi: {props.data.finish_time ? `${props.data.finish_time}` : "Henüz Bitmedi"}</p>
      </div>
      <div className='modal-bottom'>
      <RuleHR color="orange" width="100%"/>
        <p className='modal-paragraph'> Projenin Bilinen Konumu: {props.data.classroom_id ? `${props.data.classroom_id}` : "Belirtilmemiş"}</p>
        <p className='modal-paragraph'> Proje Önceliği: {props.data.priority}</p>
        <RuleHR color="orange" width="100%"/>
      </div>
    </>
  )
}

export default ModalInfo
