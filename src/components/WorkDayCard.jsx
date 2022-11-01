import React from 'react'
import RuleHR from './RuleHR'



function WorkDayCard({data}) {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="user">
                        <div className="user-info">
                            <h4>{data.personnelName} {data.personnelSurname}</h4>
                            <small>{data.personnelStatus}</small>
                        </div>
                    </div>
                    <RuleHR color="orange" />
                    <h6 id='timeH6'>
                        Çalışma Gün ve Saatleri
                    </h6>
                    <div className='work-row'>
                        {   data.personnelWorkDay.monday &&
                            <p>Pazartesi: {data.personnelWorkDay.monday}</p>
                        }
                        {   data.personnelWorkDay.tuesday &&
                            <p>Salı: {data.personnelWorkDay.tuesday}</p>
                        }
                        {   data.personnelWorkDay.wednesday &&
                            <p>Çarşamba: {data.personnelWorkDay.wednesday}</p>
                        }
                        {   data.personnelWorkDay.thursday &&
                            <p>Perşembe: {data.personnelWorkDay.thursday}</p>
                        }
                        {   data.personnelWorkDay.friday &&
                            <p>Cuma: {data.personnelWorkDay.friday}</p>
                        }
                        <p>
                            {data.personnelAddress}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkDayCard