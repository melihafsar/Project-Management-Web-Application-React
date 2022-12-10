import axios from "axios";
import React, { useState, useEffect } from "react";
import ClassroomCard from "../components/ClassroomCard";
import SideBar from "../components/SideBar";

function ClassroomInfo() {
  const [classroom, setClassroom] = useState([]);

  useEffect(() => {
    getClassroomInfo();
  }, []);

  function getClassroomInfo() {
    return axios
      .get("http://localhost:3000/classroom")
      .then((response) => {
        setClassroom(response.data);
      })
      .catch((error) => {
        console.error(error);
        return Promise.reject(error);
      });
  }

  return (
    <>
      <SideBar />
      <section className="home-section">
        <div className="text">
          <h1 className="page-title">Derslik Bilgileri</h1>
        </div>
        <div className="card-b">
          {classroom.map((item, index) => (
            <div key={index} className="container">
              <ClassroomCard data={item} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ClassroomInfo;
