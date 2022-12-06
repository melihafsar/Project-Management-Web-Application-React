import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import FormData from 'form-data';
import RuleHR from './RuleHR'
import { useAuth } from '../context/AuthContext';

function ModalForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const { userId } = useAuth(); 
    //!:  person_id giris yapmis kisinin id'si olacak sekilde ayarlanacak.
    const person_id = userId;


    async function doPostRequest() {
        const form_data = new FormData();
        form_data.append('title', title);
        form_data.append('description', description);
        form_data.append('person_id', person_id);

        let res = await axios.post('http://localhost:3000/note_info/note', form_data,
            {
                headers: form_data.getHeaders ? form_data.getHeaders() : { 'Content-Type': 'application/json' }
            });
        let data = res.data;
        console.log(data);
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
            <RuleHR color="orange" />
            <form onSubmit={handleSubmit}>
                <label>Not Ana Başlığı
                <br />
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <br />
                <br />
            <label> Not Ayrıntıları
                <br />
                <textarea value={description} style={{width : "300px"}} onChange={(e) => setDescription(e.target.value)} />
            </label>
                <br />
                <button type="submit">Ekle </button>
            </form>

        </>

    )

}

export default ModalForm