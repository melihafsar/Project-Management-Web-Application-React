import React,{ useState, useEffect } from 'react'
import SideBar from "../components/SideBar";
import WorkDayCard from "../components/WorkDayCard";
import axios from 'axios';

function WorkDay() {
  const [WorkDay, setWorkDay] = useState([]);

  useEffect(() => {
    getWorkDay();
  }, []);

  function getWorkDay() {
    return axios.get("http://localhost:3000/workingDay")
      .then(response => { setWorkDay(response.data);})
      .catch(error => { console.error(error); return Promise.reject(error); });
  }

  return (
    <>
      <SideBar />
      <section className="home-section">
        <div className="text">
          <h1 className='page-title'>Personnel Çalışma Günleri</h1>
        </div>
        <div className='card-b'>
        {
            WorkDay.map((personnel, index) => (
              <div key={index} className="container">
                <WorkDayCard data={personnel.value} />
              </div>
            ))
        }
        </div>
      </section>
    </>

  )
}

export default WorkDay