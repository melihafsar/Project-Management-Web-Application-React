import React from 'react'
import SideBar from "../components/SideBar";
import noUser from "../static/noUser.jpg";

const contactData = [
  {
    personnelID: "2",
    personnelName: "Melih",
    personnelSurname: "Afşar",
    personnelStatus: "Ögrenci",
    personnelEmail: "melihafsar@marun.edu.tr",
    personnelTel: "05542114878",
    personnelAddress: "T4-WorkRoom"
  },
  {
    personnelID: "3",
    personnelName: "Yusuf",
    personnelSurname: "Yıldırım",
    personnelStatus: "Ögrenci",
    personnelEmail: "yusufyildirim@marun.edu.tr",
    personnelTel: "05547895662",
    personnelAddress: "T4-302"
  },
  {
    personnelID: "4",
    personnelName: "Aziz Eren",
    personnelSurname: "Sağanda",
    personnelStatus: "Ögrenci",
    personnelEmail: "aesaganda@marun.edu.tr",
    personnelTel: "05633114455",
    personnelAddress: "T4-303"
  },
  {
    personnelID: "5",
    personnelName: "Kenan",
    personnelSurname: "Baylan",
    personnelStatus: "Ögrenci",
    personnelEmail: "kenanbylan@marun.edu.tr",
    personnelTel: "0548746323",
    personnelAddress: "T4-304"
  },
  {
    personnelID: "6",
    personnelName: "Emirhan",
    personnelSurname: "Ese",
    personnelStatus: "Ögrenci",
    personnelEmail: "eseemirhan@marun.edu.tr",
    personnelTel: "055055477889",
    personnelAddress: "T4-305"
  },
  {
    personnelID: "7",
    personnelName: "Şerif",
    personnelSurname: "Yılmaz",
    personnelStatus: "Ögrenci",
    personnelEmail: "serifyilmaz@marun.edu.tr",
    personnelTel: "05542114878",
    personnelAddress: "T4-306"
  },
]

function Contact() {
  return (
    <>
      <SideBar />
      <section className="home-section">
        <div className="text">
          <h1 className='page-title'>İletişim Kanalları</h1>
        </div>
        <div className='card-b'>
          {
            contactData.map((personnel, index) => (
              <div key={index} className="container">
                <div className="card">
                  <div className="card-body">
                    <div className="user">
                      <img src={noUser} alt="user" />
                      <div className="user-info">
                        <h4>{personnel.personnelName} {personnel.personnelSurname}</h4>
                        <small>{personnel.personnelStatus}</small>
                      </div>
                    </div>
                    <h5>
                      {personnel.personnelEmail}
                    </h5>
                    <div className='card1-row'>
                      <p> Tel: 
                        {personnel.personnelTel}
                      </p>
                      <p>
                        {personnel.personnelAddress}
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Contact