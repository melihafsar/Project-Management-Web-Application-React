import React from 'react'
import RuleHR from './RuleHR';

function ClassroomCard(props) {
  return (
    <>
      <div className="card">
                <div className="card-body">
                    <div className="user">
                        <div className="user-info">
                            <h4>{props.data.class_code}</h4>
                        </div>
                    </div>
                    <h5>
                    {/* {props.data.personnelEmail} */}
                    </h5>
                    <RuleHR color="orange" />
                    <div className='card1-row'>
                        <p> Sınıf Kapasitesi  :{props.data.capacity}</p>
                        <p>
                             {/* {props.data.personnelAddress} */}
                        </p>
                    </div>
                </div>
            </div>
    </>
  )
}

export default ClassroomCard
