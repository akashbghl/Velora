import React, { useContext } from 'react'
import bgVideo from '/bgVideo.mp4'
import { FaApple } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import { AuthContext } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

function Hero() {
    const { user, loading, valid } = useContext(AuthContext);
    const navigate = useNavigate();
    if (loading) {
        return <p>Loading ...</p>
    }
    const handleCreate = () => {
        navigate(valid?'/dashboard':'/login')
    }
    return (
        <div className="relative w-full h-screen overflow-hidden ">
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src={bgVideo}
                autoPlay
                loop
                muted
            />
            <div className="absolute inset-0 w-full h-full bg-black opacity-95 pointer-events-none" />
            <div className="max-md:text-xl absolute inset-0 flex flex-col items-center mt-[20vh] w-full h-full">
                <h1 className="text-white font-bold text-[80px] text-center white-glow-shadow custom-font">Your AI Friend</h1>
                <p className='text-white font-bold text-[70px] text-center white-glow-shadow mt-[-30px] custom-font'>Who Cares</p>
                <h1 className='text-white font-bold text-[35px] text-center custom-font'>Always here to listen and talk.</h1>
                <p className='text-white font-bold text-[30px] text-center  mt-[-15px] custom-font'>Always on your side</p>
                <button
                    onClick={handleCreate}
                    className=' cursor-pointer text-black text-[18px] mt-4 text-center w-[220px] bg-white/80 px-6 py-3 rounded-full shadow-2xl shadow-white'>Create Your AI Friend</button>
                <p className='text-white mt-2 custom-font'>also available on</p>
                <div className='flex gap-4 mt-2 '>
                    <button className='custom-font text-white text-xl flex gap-1 cursor-pointer hover:shadow-2xl shadow-white   '><FaApple />iOS</button>
                    <button className='custom-font text-white text-xl flex gap-1 cursor-pointer hover:shadow-2xl shadow-white  '><GrAndroid />Android</button>
                </div>
            </div>


        </div>
    )
}

export default Hero