import React from 'react'
import noUser from "../static/noUser.jpg";
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
                        {props.data.personnelEmail}
                    </h5>
                    <RuleHR color="orange" />
                    <div className='card1-row'>
                        <p> Tel:
                            {props.data.personnelTel}
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
