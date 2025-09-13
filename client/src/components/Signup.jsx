// src/components/Signup.js

import React, { useState,useEffect } from 'react'
import axios from 'axios';
import ErrorBox from './ErrorBox';
import {useNavigate} from 'react-router-dom'

function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [error,setError] = useState("");
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/auth/signup', form);
      alert(res.data.message);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || "Something Went wrong !");
    }
  }
    useEffect(()=>{
      if(error){
        const timer = setTimeout(()=>{setError('')},3000);
        return()=>{clearTimeout(timer)};
      }
    },[error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-500 via-pink-200 to-pink-500 px-4">
      <div className="w-full max-w-md bg-white/40 p-8 rounded-lg shadow-md">
        
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create an account</h2>

                  {error&&
                <ErrorBox errorMessage={error}/>
          }
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:ring-blue-500 focus:outline-none"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:ring-blue-500 focus:outline-none"
              placeholder="john@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:ring-blue-500 focus:outline-none"
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-400 rounded-md focus:ring-blue-500 focus:outline-none"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 hover:underline">Login here</a>
        </p>
      </div>
    </div>
  )
}

export default Signup
