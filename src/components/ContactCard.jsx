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
                            <h4>{props.data.personnelName} {props.data.personnelSurname}</h4>
                            <small>{props.data.personnelStatus}</small>
                        </div>
                    </div>
                    <h5>
                    <ButtonMailto label={props.data.personnelEmail} mailto= {`mailto: ${props.data.personnelEmail}`} />
                    </h5>
                    <RuleHR color="orange" />
                    <div className='card1-row'>
                        <p>
                        <i class='bx bxl-whatsapp'></i>
                        <ReactWhatsapp number={`+9${props.data.personnelTel}`} message="Merhaba" style={{border: "none",
    backgroundColor: "white"}}>{`-${props.data.personnelTel}`}</ReactWhatsapp>
                        </p>
                        <p>
                             {props.data.personnelAddress}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactCard
