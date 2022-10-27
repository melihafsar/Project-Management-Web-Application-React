import React from 'react'
import { Routes, Route } from "react-router-dom";
import ClassroomInfo from '../pages/ClassroomInfo';
import Contact from '../pages/Contact';
import LoginPage from '../pages/LoginPage';
import MyNotes from '../pages/MyNotes';
import ProjectBoard from '../pages/ProjectBoard';
import WorkDay from "../pages/WorkDay";
import Profile from "../pages/Profile";
import Page404 from '../pages/Page404';

function MainRoute() {
    return (
        <>
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/project-board' element={<ProjectBoard />} />
                <Route path='/work-day' element={<WorkDay />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/my-notes' element={<MyNotes />} />
                <Route path='/classroom-info' element={<ClassroomInfo />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='*' element={<Page404 />} />
            </Routes>
        </>
    )
}

export default MainRoute