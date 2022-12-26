import React from 'react'
import RuleHR from './RuleHR'

function WorkDayCard({data}) {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="user">
                        <div className="user-info">
                            <h4>{data[0].name} {data[0].surname}</h4>
                            <small>{data[0].degree}</small>
                        </div>
                    </div>
                    <RuleHR color="orange" />
                    <h6 id='timeH6'>
                        Çalışma Gün ve Saatleri
                    </h6>
                    <div className='work-row'>
                        {
                            data.map((date, index) => (
                                <div key={index} className='work-col'>
                                    <p>{date.day}</p>
                                    <p>{date.start_time}.00 - {date.end_time}.00</p>
                                </div>
                            ))
                        }
                        <p style={{fontWeight: 'bold', fontSize: '0.7em'}}>
                            {data[0].room_no}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkDayCard