import axios from 'axios';
import React, { useState, useRef } from 'react'
import { useEffect } from 'react';
import { ModalContext, useContext } from "../context/ModalContext";
import { successAlert, errorAlert } from "../helpers/AlertHelper";

function DragNDrop({ newData, changeRender }) {
    const { setModalIsOpen, setModalInfoData } = useContext(ModalContext);
    const [list, setList] = useState(newData);
    const [dragging, setDragging] = useState(false);
    const dragItem = useRef();
    const dragNode = useRef();

    let userId = parseInt(localStorage.getItem("userId"));

    Array.prototype.forEach.call(
        document.querySelectorAll(".dnd-item"),
        function (el) {
            el.addEventListener("dragstart", function () {
                let workID = parseInt(el.id);
                sessionStorage.setItem("workID", workID);
            });
        }
    );

    const setWorkOwner = async (work_id, work_owner, work_status) => {
        try {
            const body = { work_owner, work_status, work_id, };
            await axios.put(
                "http://localhost:3000/dashboard/setWorkOwner",
                body
            );
            successAlert("İş başarıyla atandı.");
            changeRender();
            

        } catch (err) {
            errorAlert("İş ataması sırasında bir hata oluştu.");
            console.error(err.message);
        }
    };

    useEffect(() => {
        setList(newData);
    }, [newData]);

    function handleDragStart(e, params) {
        dragItem.current = params;
        dragNode.current = e.target;
        dragNode.current.addEventListener('dragend', handleDragEnd);
        setTimeout(() => {
            setDragging(true);
        }, 0)
    };

    function handleDragEnd() {
        const work_status = dragItem.current.groupIndex;
        userId = localStorage.getItem("userId");
        const work_id = sessionStorage.getItem("workID");

        if (work_id !== 0 && work_id !== null && work_id !== undefined) {
            if (work_status === 0) {
                setWorkOwner(work_id, 0, 0);
            } else {
                setWorkOwner(work_id, userId, work_status);
            }
        }
        else{
            errorAlert("İş ataması sırasında bir hata oluştu. Tekrar deneyiniz.");
        }

        setDragging(false)
        dragNode.current.removeEventListener('dragend', handleDragEnd);
        dragItem.current = null;
        dragNode.current = null;
        sessionStorage.removeItem("workID");
    }

    function handleDragEnter(e, params) {
        const currentItem = dragItem.current;
        if (e.target !== dragNode.current) {
            setList(oldList => {
                let newList = JSON.parse(JSON.stringify(oldList));
                newList[params.groupIndex].items.splice(params.itemIndex, 0, newList[currentItem.groupIndex].items.splice(currentItem.itemIndex, 1)[0]);
                dragItem.current = params;
                return newList
            })
        }
    }

    function getStyles(params) {
        const currentItem = dragItem.current;
        if (currentItem.groupIndex === params.groupIndex && currentItem.itemIndex === params.itemIndex) {
            return "current dnd-item";
        }
        return "dnd-item";
    }

    return (

        <div className="drag-n-drop">
            {
                list.map((group, groupIndex) => (
                    <div key={groupIndex} className="dnd-group"
                        onDragEnter={dragging && !groupIndex.length ? (e) => handleDragEnter(e, { groupIndex, itemIndex: 0 }) : null}
                    >
                        {groupIndex === 0 ?
                            <div className={"work-col"}>
                                <div className="group-title">
                                    {group.title}
                                </div>
                                <div onClick={() => console.log("tiklandi")}>
                                    <i className={'bx bx-plus'} style={{ color: '#ffffff' }}  ></i>
                                </div>
                            </div>
                            :
                            <div className="group-title">
                                {group.title}
                            </div>
                        }
                        {
                            group.items.map((item, itemIndex) => (
                                <div
                                    id={item.work_id}
                                    className={dragging ? getStyles({ groupIndex, itemIndex }) : "dnd-item"}
                                    onClick={() => {
                                        setModalIsOpen(true);
                                        setModalInfoData(item);
                                    }}
                                    key={itemIndex}
                                    draggable={ item.work_owner === 0  || userId === item.work_owner ? true : false }
                                    onDragStart={(e) => { handleDragStart(e, { groupIndex, itemIndex }) }} onDragOver={dragging ? (e) => handleDragEnter(e, { groupIndex, itemIndex }) : null}
                                >
                                    <h2 className='card-title'>Proje ID: {item.work_id}</h2>
                                    <h3 className='card-name'>{item.work_name}</h3>
                                    <hr /><br />
                                    <p className='card-paragraph'> Projeyi Oluşturan Kişi: {item.work_creator}</p>
                                    <p className='card-paragraph'> Proje Önceliği: {item.priority}</p>
                                    <p className='card-paragraph'> Projeyi Alan Kişi: {item.work_owner ? `${item.work_owner}` : "Bilinmiyor"}</p>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default DragNDrop
