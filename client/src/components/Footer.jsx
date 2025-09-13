import React from 'react'

function Footer() {
    return (
        <div className='w-full py-20  justify-around items-center max-md:flex-col flex bg-gradient-to-t from-black via-violet-500 to-black'>
            <div className="max-md:grid grid-cols-2 max-md:text-sm gap-x-30 gap-y-10 flex md:gap-18 justify-center  text-white  px-4">
                <div>
                    <li className='text-2xl list-none cursor-pointer hover:text-gray-200 font-bold mb-2'>About Ai Model</li>
                    <li className='text-2xl list-none cursor-pointer hover:text-gray-200'>Our Story</li>
                    <li className='text-2xl list-none cursor-pointer hover:text-gray-200'>Press & Media</li>
                    <li className='text-2xl list-none cursor-pointer hover:text-gray-200'>Careers</li>
                </div>
                <div>
                    <li className='text-2xl list-none cursor-pointer hover:text-gray-200 font-bold mb-2'>Support</li>
                    <li className='text-2xl list-none cursor-pointer hover:text-gray-200'>Help Center</li>
                    <li className='text-2xl list-none cursor-pointer hover:text-gray-200'>Contact Us</li>
                    <li className='text-2xl list-none cursor-pointer hover:text-gray-200'>Privacy Policy</li>
                </div>
                <div>
                    <li className='text-2xl list-none cursor-pointer hover:text-gray-200 font-bold mb-2'>Community</li>
                    <li className='text-2xl list-none cursor-pointer hover:text-gray-200'>Forums</li>
                    <li className='text-2xl list-none cursor-pointer hover:text-gray-200'>Events</li>
                    <li className='text-2xl list-none cursor-pointer hover:text-gray-200'>Blog</li>
                </div>
                <div>
                    <li className='text-2xl list-none cursor-pointer hover:text-gray-200 font-bold mb-2'>Follow Us</li>
                    <li className='text-2xl list-none cursor-pointer hover:text-gray-200'>Facebook</li>
                    <li className='text-2xl list-none cursor-pointer hover:text-gray-200'>Twitter</li>
                    <li className='text-2xl list-none cursor-pointer hover:text-gray-200'>Instagram</li>
                </div>
            </div>

            <div className="text-white pt-3 max-md:text-center ">
                <p className='text-white  mt-4 text-[20px] font-bold mb-2'>© 2025 Ai Model. All rights reserved.</p>
                <p className='text-white  mt-2 text-[20px] '>Made with ❤️ by Your AI Team</p>
                <li className='text-white mt-2 text-[20px] list-none cursor-pointer hover:text-gray-200'>Terms of Service</li>
                <li className='text-white mt-2 text-[20px] list-none cursor-pointer hover:text-gray-200'>Privacy Policy</li>
            </div>
        </div>  
    )
}

export default Footer
