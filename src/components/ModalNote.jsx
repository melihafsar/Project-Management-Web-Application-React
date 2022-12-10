import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext';
import { successAlert, errorAlert } from "../helpers/AlertHelper";
import RuleHR from './RuleHR';
import axios from 'axios';

function ModalNote({ data, change, setModal }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const { userId } = useAuth();
    //const person_id = userId;

    async function updateNotes() {
        const form_data = new FormData();
        form_data.append('title', title);
        form_data.append('description', description);
        form_data.append('person_id', userId);

        try {
            await axios.put(`http://localhost:3000/note_info/update-note/:${data.note_id}`, form_data,
                {
                    headers: form_data.getHeaders ? form_data.getHeaders() : { 'Content-Type': 'application/json' }
                });
            successAlert("Notunuz başarıyla güncellendi");
        } catch (error) {
            console.error(error);
            errorAlert("Notunuz güncellenemedi");
            return Promise.reject(error);
        }
        change()
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setTitle("");
        setDescription("");
        updateNotes();
        setModal(false);
    }

    return (
        <>
            <div>
                <RuleHR color="orange" width="100%" />
                <RuleHR color="orange" width="100%" />
                <h1>{`Not Başlığı :\t${data.title}`}</h1>
                <h3>Not Ayrıntıları:</h3>
                <RuleHR color="orange" width="100%" />
                <RuleHR color="orange" width="100%" />
                <div className='work-row'>
                    <p className='modal-paragraph'>{data.description}</p>
                </div>
                <br />
                <br />
            </div>
            <div>
                <br />
                <h3>Notu Düzenle  : </h3>
                <RuleHR color="orange" width="100%" />
                <form onSubmit={handleSubmit}>
                    <label>Not Ana Başlığı
                        <br />
                        <input
                            type="text"
                            value={title}
                            style={{ width: "100%" }}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </label>
                    <br />
                    <br />
                    <label> Not Ayrıntıları
                        <br />
                        <textarea value={description} style={{ width: "100%" }} onChange={(e) => setDescription(e.target.value)} />
                    </label>
                    <br />
                    <div className='form-button-container'>
                        <button className='form-button' type="submit">Düzenle</button>
                    </div>
                </form>
            </div>
        </>


    )
}

export default ModalNote
