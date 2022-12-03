import React from 'react'

function ModalNote(props) {
    return (
        <div>
            <hr /><hr />
            <h1>{`Not Başlığı :\t${props.data.data.title}`}</h1>
            <h3>Not Ayrıntıları:</h3>
            <hr /><hr />
            <div className='work-row'>
                <p className='modal-paragraph'>{props.data.data.description}</p>
            </div>
        </div>
    )
}

export default ModalNote
