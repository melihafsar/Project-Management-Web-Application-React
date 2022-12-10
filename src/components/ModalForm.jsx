import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import FormData from 'form-data';
import RuleHR from './RuleHR'
import { useAuth } from '../context/AuthContext';
import { successAlert, errorAlert } from "../helpers/AlertHelper";

function ModalForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const { userId } = useAuth();
    //const person_id = userId;

    async function doPostRequest() {
        const form_data = new FormData();
        form_data.append('title', title);
        form_data.append('description', description);
        form_data.append('person_id', userId);

        try {
            await axios.post('http://localhost:3000/note_info/note', form_data,
                {
                    headers: form_data.getHeaders ? form_data.getHeaders() : { 'Content-Type': 'application/json' }
                });
            successAlert("Notunuz başarıyla eklendi");
        } catch (error) {
            console.error(error);
            errorAlert("Notunuz eklenemedi");
            return Promise.reject(error);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        doPostRequest();
        setTitle("");
        setDescription("");
    }

    return (
        <>
            <h1>Not Ekle  : </h1>
            <RuleHR color="orange" width="100%" />
            <form onSubmit={handleSubmit}>
                <br />
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
                    <textarea value={description} style={{ width: "100%", resize: "none", height: "150px" }} onChange={(e) => setDescription(e.target.value)} />
                </label>
                <br />
                <div className='form-button-container'>
                    <button className='form-button' type="submit">Ekle</button>
                </div>
            </form>

        </>

    )

}

export default ModalForm