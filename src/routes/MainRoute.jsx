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
import PrivateRoute from './PrivateRoute';

function MainRoute() {
    return (
        <>
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/project-board' element={<PrivateRoute><ProjectBoard /></PrivateRoute>} />
                <Route path='/work-day' element={<PrivateRoute><WorkDay /></PrivateRoute>} />
                <Route path='/contact' element={<PrivateRoute><Contact /></PrivateRoute>} />
                <Route path='/my-notes' element={<PrivateRoute><MyNotes /></PrivateRoute>} />
                <Route path='/classroom-info' element={<PrivateRoute><ClassroomInfo/></PrivateRoute>} />
                <Route path='/profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
                <Route path='*' element={<Page404 />} />
            </Routes>
        </>
    )
}

export default MainRoute