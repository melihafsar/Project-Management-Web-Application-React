import React from 'react'
import ButtonMailto from '../helpers/ButtonMailTo';
import noUser from "../static/noUser.jpg";
import ReactWhatsapp from 'react-whatsapp';
import RuleHR from './RuleHR';


function ContactCard(props) {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="user">
                        <img src={noUser} alt="user" />
                        <div className="user-info">
                            <h4>{props.data.name} {props.data.surname}</h4>
                            <small>{props.data.degree}</small>
                        </div>
                    </div>
                    <h5>
                    <ButtonMailto label={props.data.email} mailto= {`mailto: ${props.data.email}`}/>
                    </h5>
                    <RuleHR color="orange" />
                    <div className='card1-row'>
                        <p>
                        <i className='bx bxl-whatsapp'></i>
                        <ReactWhatsapp number={`+9${props.data.phone}`} message="Merhaba" style={{border: "none",
    backgroundColor: "white"}}>{`-${props.data.phone}`}</ReactWhatsapp>
                        </p>
                        <p>
                             {props.data.room_no}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactCard
