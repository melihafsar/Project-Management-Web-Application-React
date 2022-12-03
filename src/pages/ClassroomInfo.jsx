import axios from 'axios';
import React, {useState, useEffect} from 'react'
import ClassroomCard from '../components/ClassroomCard';
import SideBar from "../components/SideBar";

// const contactData = [
//   {
//     personnelID: "2",
//     personnelName: "Melih",
//     personnelSurname: "Afşar",
//     personnelStatus: "Ögrenci",
//     personnelEmail: "melihafsar@marun.edu.tr",
//     personnelTel: "05542114878",
//     personnelAddress: "T4-WorkRoom"
//   },
//   {
//     personnelID: "4",
//     personnelName: "Aziz Eren",
//     personnelSurname: "Sağanda",
//     personnelStatus: "Ögrenci",
//     personnelEmail: "aesaganda@marun.edu.tr",
//     personnelTel: "05633114455",
//     personnelAddress: "T4-303"
//   },
//   {
//     personnelID: "5",
//     personnelName: "Kenan",
//     personnelSurname: "Baylan",
//     personnelStatus: "Ögrenci",
//     personnelEmail: "kenanbylan@marun.edu.tr",
//     personnelTel: "0548746323",
//     personnelAddress: "T4-304"
//   },
//   {
//     personnelID: "6",
//     personnelName: "Emirhan",
//     personnelSurname: "Ese",
//     personnelStatus: "Ögrenci",
//     personnelEmail: "eseemirhan@marun.edu.tr",
//     personnelTel: "055055477889",
//     personnelAddress: "T4-305"
//   },
//   {
//     personnelID: "7",
//     personnelName: "Şerif",
//     personnelSurname: "Yılmaz",
//     personnelStatus: "Ögrenci",
//     personnelEmail: "serifyilmaz@marun.edu.tr",
//     personnelTel: "05542114878",
//     personnelAddress: "T4-306"
//   },
//   {
//     personnelID: "3",
//     personnelName: "Yusuf",
//     personnelSurname: "Yıldırım",
//     personnelStatus: "Ögrenci",
//     personnelEmail: "yusufyildirim@marun.edu.tr",
//     personnelTel: "05547895662",
//     personnelAddress: "T4-302"
//   },
//   {
//     personnelID: "10",
//     personnelName: "Şamil",
//     personnelSurname: "Neoldum",
//     personnelStatus: "Ögrenci",
//     personnelEmail: "samilneoldum@marun.edu.tr",
//     personnelTel: "0554565662",
//     personnelAddress: "T4-320"
//   },
//   {
//     personnelID: "11",
//     personnelName: "Furkan",
//     personnelSurname: "Bostan",
//     personnelStatus: "Ögrenci",
//     personnelEmail: "furkanbostan@marun.edu.tr",
//     personnelTel: "0554656862",
//     personnelAddress: "T4-321"
//   },
//   {
//     personnelID: "12",
//     personnelName: "Semih",
//     personnelSurname: "Afşar",
//     personnelStatus: "Ögrenci",
//     personnelEmail: "semihafsar@marun.edu.tr",
//     personnelTel: "05544578762",
//     personnelAddress: "T4-322"
//   },
//   {
//     personnelID: "7",
//     personnelName: "Şerif",
//     personnelSurname: "Yılmaz",
//     personnelStatus: "Ögrenci",
//     personnelEmail: "serifyilmaz@marun.edu.tr",
//     personnelTel: "05542114878",
//     personnelAddress: "T4-306"
//   },
//   {
//     personnelID: "6",
//     personnelName: "Emirhan",
//     personnelSurname: "Ese",
//     personnelStatus: "Ögrenci",
//     personnelEmail: "eseemirhan@marun.edu.tr",
//     personnelTel: "055055477889",
//     personnelAddress: "T4-305"
//   },
//   {
//     personnelID: "3",
//     personnelName: "Yusuf",
//     personnelSurname: "Yıldırım",
//     personnelStatus: "Ögrenci",
//     personnelEmail: "yusufyildirim@marun.edu.tr",
//     personnelTel: "05547895662",
//     personnelAddress: "T4-302"
//   },
// ]

function ClassroomInfo() {
  const [classroom, setClassroom] = useState([]);

  useEffect(() => {
    getClassroomInfo();
  }, []);

  function getClassroomInfo() {
    return axios.get("http://localhost:3000/classroom")
      .then(response => { setClassroom(response.data);})
      .catch(error => { console.error(error); return Promise.reject(error); });
  }

  return (
    <>
       <SideBar />
      <section className="home-section">
        <div className="text">
          <h1 className='page-title'>Derslik Bilgileri</h1>
        </div>
        <div className='card-b'>
          {
            classroom.map((item, index) => (
              <div key={index} className="container">
                <ClassroomCard data={item} />
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default ClassroomInfo