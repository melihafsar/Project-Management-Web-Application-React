import React from 'react'
import RuleHR from './RuleHR'
import { ModalContext, useContext } from '../context/ModalContext';
import { successAlert, errorAlert } from "../helpers/AlertHelper";
import axios from 'axios';

function NoteCard({data, change}) {
    const { setModalIsOpen, setModalNoteData } = useContext(ModalContext);

    const handleDeleteNote = async () => {
        await axios.delete(`http://localhost:3000/note_info/delete-note/:${data.note_id}`)
            .then(response => { 
                successAlert("Notunuz başarıyla silindi");
            })
            .catch(error => { console.error(error);
                errorAlert("Notunuz silinemedi");
                return Promise.reject(error);
        });
        change();
    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div>
                        {/* This element updates the note from the database.. */}
                        <i className='bx bxs-edit bx-sm' onClick={() => {
                            setModalIsOpen(true);
                            setModalNoteData(data);
                        }}></i>
                        {/* This element deletes the note from the database. */}
                        <i className='bx bx-trash bx-sm' onClick={() => {
                            handleDeleteNote();
                        }}></i>
                    </div>
                <div
                onClick={() => {
                    setModalIsOpen(true);
                    setModalNoteData(data);
                }}>
                    <div className="note">
                        <div className="note-info">
                            <h4>{data.title}</h4>
                        </div>
                    </div>
                    <RuleHR color="orange" />
                    <div className='card1-row'>
                        <p>
                            {data.description}
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default NoteCard
