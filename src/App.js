import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState} from "react";

import Login from "./Login";
import SignUp from "./SignUp";
import Habits from "./Habits";
import Today from "./Today";
import History from "./History";

import TokenContext from "./Context/TokenContext.js";



export default function App(){

    const [userHabits, setUserHabits] = useState([]);
    const [token, setToken] = useState ("");
    const [image, setImage] = useState("");


    return(
        <BrowserRouter> 
            <TokenContext.Provider value={{ token, setToken, 
                                            userHabits, setUserHabits, 
                                            image, setImage,
                                        }}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/SignUp" element={<SignUp />} />
                    <Route path="/Habits" element={<Habits />} />
                    <Route path="/Today" element={<Today />} />
                    <Route path="/History" element={<History />} />
                   
                    
                </Routes>
            </TokenContext.Provider>
        </BrowserRouter>
    )
}