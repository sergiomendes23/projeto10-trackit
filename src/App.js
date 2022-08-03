import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Habits from "./Habits";


export default function App(){
    return(
        <BrowserRouter>        
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/Header" element={<Habits />} />
                
            </Routes>
        </BrowserRouter>
    )
}