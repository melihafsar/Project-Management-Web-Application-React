import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import FormData from 'form-data';
import RuleHR from './RuleHR'
import { useAuth } from '../context/AuthContext';
import { successAlert, errorAlert } from "../helpers/AlertHelper";
import { getFullDateAndTime } from '../helpers/time';

function ModalBoardForm({render, modalClose}) {
// clasroom_id, //TODO: burada sorgu ve checkbox şeklinde düzenlemek gerekiyor

    const [workName, setWorkName] = useState("");
    const [details, setDetails] = useState("");
    const [estimated_time, setEstimated_time] = useState("");
    const [clasroom_id, setClasroom_id] = useState(1000);
    const [priority, setPriority] = useState(0);

    const { userId } = useAuth();

    async function doPostRequest() {
        const createTime = getFullDateAndTime();

        const form_data = new FormData();
        form_data.append('work_name', workName);
        form_data.append('details', details);
        form_data.append('work_creator', userId);
        form_data.append('estimated_time', estimated_time);
        form_data.append('clasroom_id', clasroom_id);
        form_data.append("create_time", createTime)
        form_data.append('priority', priority);

        try {
            await axios.post('http://localhost:3000/dashboard/work', form_data,
                {
                    headers: form_data.getHeaders ? form_data.getHeaders() : { 'Content-Type': 'application/json' }
                });
            successAlert("Görev başarıyla eklendi");
            modalClose()
            render();
        } catch (error) {
            console.error(error);
            errorAlert("Görev eklenemedi");
            return Promise.reject(error);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        doPostRequest();
        setWorkName("");
        setDetails("");
        setEstimated_time(0);
        setClasroom_id(1000);
        setPriority(0);
    }

    return (
        <>
            <h1>Yeni İş Ekle  : </h1>
            <RuleHR color="orange" width="100%" />
            <form onSubmit={handleSubmit}>
                <br />
                <label>İşin İsmi
                    <br />
                    <input
                        type="text"
                        value={workName}
                        style={{ width: "100%" }}
                        onChange={(e) => setWorkName(e.target.value)}
                    />
                </label>
                <br />
                <br />
                <label> İşin Detayları
                    <br />
                    <input
                        type="text"
                        value={details}
                        style={{ width: "100%" }}
                        onChange={(e) => setDetails(e.target.value)}
                    />
                </label>
                
                <br />
                <br />
                <label> İşin Tahmini Bitirilme Süresi (gün)
                    <br />
                    <input
                        type="text"
                        value={estimated_time}
                        style={{ width: "100%" }}
                        placeholder="Gün giriniz"
                        onChange={(e) => setEstimated_time(e.target.value)}
                    />
                </label>

                <br />
                <br />
                <label> Mevcutsa İşin Yapılması Gereken Sınıf
                    <br />
                    <input
                        type="text"
                        //value={clasroom_id}
                        style={{ width: "100%" }}
                        placeholder="Sınıf numarası giriniz"
                        onChange={(e) => setClasroom_id(e.target.value)}
                    />
                </label>

                <br />
                <br />
                <label> İşin Önceliği (1-5) (5 en yüksek) 
                    <br />
                    <input
                        type="text"
                        //value={priority}
                        style={{ width: "100%" }}
                        placeholder="1-5 arası bir değer giriniz"
                        onChange={(e) => setPriority(e.target.value)}
                    />
                </label>
                
                <div className='form-button-container'>
                    <button className='form-button' type="submit">Ekle</button>
                </div>
            </form>

        </>

    )

}

export default ModalBoardForm