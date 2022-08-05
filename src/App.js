import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Habits from "./Habits";
import Today from "./Today";


export default function App(){
    return(
        <BrowserRouter>        
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/Header" element={<Habits />} />
                <Route path="/Today" element={<Today />} />
                
            </Routes>
        </BrowserRouter>
    )
}