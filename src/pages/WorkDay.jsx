import React from 'react'
import SideBar from "../components/SideBar";
import WorkDayCard from "../components/WorkDayCard";

const dayData = [
  {
    personnelID: "2",
    personnelName: "Melih",
    personnelSurname: "Afşar",
    personnelStatus: "Ögrenci",
    personnelAddress: "T4-336",
    personnelWorkDay: {
      monday: "8-17",
      tuesday: null,
      wednesday: null,
      thursday: "12-17",
      friday: null
    },
  },
  {
    personnelID: "4",
    personnelName: "Aziz Eren",
    personnelSurname: "Sağanda",
    personnelStatus: "Ögrenci",
    personnelAddress: "T4-337",
    personnelWorkDay: {
      monday: "8-17",
      tuesday: null,
      wednesday: "8-12",
      thursday: "12-17",
      friday: null
    },
  },
  {
    personnelID: "5",
    personnelName: "Kenan",
    personnelSurname: "Baylan",
    personnelStatus: "Ögrenci",
    personnelAddress: "T4-338",
    personnelWorkDay: {
      monday: "8-12",
      tuesday: null,
      wednesday: null,
      thursday: "12-17",
      friday: null
    },
  },
  {
    personnelID: "6",
    personnelName: "Emirhan",
    personnelSurname: "Ese",
    personnelStatus: "Ögrenci",
    personnelAddress: "T4-339",
    personnelWorkDay: {
      monday: "8-17",
      tuesday: "12-17",
      wednesday: null,
      thursday: "12-17",
      friday: null
    },
  },
  {
    personnelID: "7",
    personnelName: "Şerif",
    personnelSurname: "Yılmaz",
    personnelStatus: "Ögrenci",
    personnelAddress: "T4-340",
    personnelWorkDay: {
      monday: "8-17",
      tuesday: null,
      wednesday: null,
      thursday: "12-16",
      friday: "8-17"
    },
  },
  {
    personnelID: "3",
    personnelName: "Yusuf",
    personnelSurname: "Yıldırım",
    personnelStatus: "Ögrenci",
    personnelAddress: "T4-341",
    personnelWorkDay: {
      monday: "8-17",
      tuesday: null,
      wednesday: null,
      thursday: "12-17",
      friday: null
    },
  },
  {
    personnelID: "10",
    personnelName: "Şamil",
    personnelSurname: "Neoldum",
    personnelStatus: "Ögrenci",
    personnelAddress: "T4-342",
    personnelWorkDay: {
      monday: "8-17",
      tuesday: null,
      wednesday: null,
      thursday: "12-17",
      friday: null
    },
  },
  {
    personnelID: "11",
    personnelName: "Furkan",
    personnelSurname: "Bostan",
    personnelStatus: "Ögrenci",
    personnelAddress: "T4-343",
    personnelWorkDay: {
      monday: "8-17",
      tuesday: null,
      wednesday: null,
      thursday: "12-17",
      friday: null
    },
  },
  {
    personnelID: "12",
    personnelName: "Semih",
    personnelSurname: "Afşar",
    personnelStatus: "Ögrenci",
    personnelAddress: "T4-330",
    personnelWorkDay: {
      monday: "8-17",
      tuesday: null,
      wednesday: null,
      thursday: "12-17",
      friday: null
    },
  },
]

function WorkDay() {
  return (
    <>
      <SideBar />
      <section className="home-section">
        <div className="text">
          <h1 className='page-title'>Personnel Çalışma Günleri</h1>
        </div>


        <div className='card-b'>
          {
            dayData.map((personnel, index) => (
              <div key={index} className="container">
                <WorkDayCard data={personnel} />
              </div>
            ))
          }
        </div>
      </section>
    </>

  )
}

export default WorkDay