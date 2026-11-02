"use client";

import { useState } from "react";
import axios from "axios";



export default function signup(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function sendSignupRequest() {
        axios.post("http://localhost:3000/api/user/signup", {
            username: username,
            password: password
        });
    }
    return(
        <div className="h-screen flex justify-center items-center flex-col bg-amber-50 w-full px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <div className="text-3xl font-extrabold text-black text-center">
                    Sign Up
                </div>
                <div className="pt-2">
                    <LabelledInput label="Username" placeholder="adsfdsgffsdgf@gmail.com" onChange={(e)=> setUsername(e.target.value)}/>
                    <LabelledInput label="Password" type={"password"} placeholder="Create a new password" onChange={(e)=> setPassword(e.target.value)}/>
                    <button type="button" onClick={sendSignupRequest} className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-200
                    font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign Up</button>
                    <a href="/auth/signin" className="mt-4 text-sm text-gray-600 hover:text-gray-800">Already have an account? Sign In</a>
                </div>
          </div>
        </div>
    )
}

interface LabelInputType{
    label: string;
    placeholder: string;
    type?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function LabelledInput({label, placeholder, type, onChange}: LabelInputType){
    return <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
        rounded-lg focust:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required onChange={onChange}/>
    </div>
}