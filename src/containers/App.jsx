import React from 'react'
import { Routes, Route } from "react-router-dom";
import NavBar from '../components/NavBar';
import Home from "../components/Home"
import NewMotor from './NewMotor';

const Router = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new" element={<NewMotor />} />
            </Routes>
        </div>
    )
}

export default Router;