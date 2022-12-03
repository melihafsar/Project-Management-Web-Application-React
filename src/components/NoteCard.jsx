import React from 'react'
import RuleHR from './RuleHR'
import { ModalContext, useContext } from '../context/ModalContext';

function NoteCard(props) {
    const { setModalIsOpen, setModalNoteData } = useContext(ModalContext);
    return (
        <>
            <div className="card" onClick={() => {
                setModalIsOpen(true);
                setModalNoteData(props);
            }}>
                <div className="card-body">
                    <div>
                        {/* This element updates the note from the database.. */}
                        <i className='bx bxs-edit bx-sm' onClick={() => {
                            console.log("edit");
                        }}></i>
                        {/* This element deletes the note from the database. */}
                        <i className='bx bx-trash bx-sm' onClick={() => {
                            console.log("trash");
                        }}></i>
                    </div>

                    <div className="note">
                        <div className="note-info">
                            <h4>{props.data.title}</h4>
                        </div>
                    </div>
                    <RuleHR color="orange" />
                    <div className='card1-row'>
                        <p>
                            {props.data.description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoteCard
