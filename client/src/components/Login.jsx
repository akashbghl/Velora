import React, { useState , useEffect } from 'react';
import axios from 'axios';
import ErrorBox from './ErrorBox';
import {useNavigate} from 'react-router-dom'



const NeonLogin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error,setError] = useState('');
  const[loading,setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/auth/login',formData,{withCredentials:true});
      alert(res.data.message);
      navigate('/dashboard');
    } catch (error) {
      setError(error.response?.data?.message || 'Some Error Occured !');
    }finally{
      setLoading(false);
    }
  };

  useEffect(()=>{
    if(error){
      const timer = setTimeout(()=>{setError('')},3000);
      return()=>{clearTimeout(timer)};
    }
  },[error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-500 via-pink-200 to-pink-500 px-4">
      <div className="w-full max-w-md bg-white/40 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Login to your account</h2>
                {
          error && 
            <ErrorBox errorMessage={error}/>
        }
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
          >
            {loading? 'Signing in ...' : 'Sign In'}
          </button>
        </form>


        <p className="mt-6 text-sm text-center text-gray-600">
          Don’t have an account?{' '}
          <a href="/signup" className="text-blue-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default NeonLogin;
