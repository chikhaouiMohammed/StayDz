import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ReactCountryFlag from "react-country-flag"

import './header.css'

function Header() {
    const [language, setLanguage] = useState('EN');
    const [arrowStatus, setarrowStatus] = useState(false);

    const handleChange = (value) => {
        setLanguage(value);
    };

    return (
        <header className='container px-[160px] font-poppins flex justify-between items-center py-[50px] text-mainTextColor'>
            {/* Logo */}
            <div className='text-[32px] font-bold cursor-pointer'>Logo</div>
            {/* Navbar */}
            <nav className='py-5 text-base'>
                <ul className='flex justify-center items-center gap-10'>
                    <li><a href="" className=' transition-all ease-in duration-300 hover:text-black'>Destinations</a></li>
                    <li><a href="" className=' transition-all ease-in duration-300 hover:text-black'>Hotels</a></li>
                    <li><a href="" className=' transition-all ease-in duration-300 hover:text-black'>About</a></li>
                    <li><a href="" className=' transition-all ease-in duration-300 hover:text-black'>Contact</a></li>
                    {/* languages */}
                    <li className='z-50'>
                        <div className="dropdown">
                        <div onMouseEnter={()=>{setarrowStatus(true)}} onMouseOut={()=>{setarrowStatus(false)}}>
                            <button  className="dropbtn ">{language}</button>
                            <div className="dropdown-content ">
                                <div className=' flex justify-center items-center'>
                                    <a onClick={() => handleChange("EN")} href="#">English</a>
                                    <div className=' cursor-pointer' onClick={() => handleChange("EN")}> <ReactCountryFlag style={{width:"50px", height:"25px", borderRadius:"15px"}} countryCode="US" svg /></div>
                                </div>
                                <div className=' flex justify-center items-center'>
                                    <a onClick={() => handleChange("FR")} href="#">French</a>
                                    <div className=' cursor-pointer' onClick={() => handleChange("FR")}> <ReactCountryFlag style={{width:"50px", height:"25px", borderRadius:"15px"}} countryCode="FR" svg /></div>
                                </div>
                                <div className=' flex justify-center items-center'>
                                    <a onClick={() => handleChange("AR")} href="#">Arabic</a>
                                    <div className=' cursor-pointer' onClick={() => handleChange("AR")}> <ReactCountryFlag style={{width:"50px", height:"25px", borderRadius:"15px"}} countryCode="DZ" svg /></div>
                                </div>
                                
                            </div>
                            {arrowStatus ? <KeyboardArrowUpIcon sx={{ color: "#212832", cursor: "pointer" }} /> : <KeyboardArrowDownIcon sx={{ color: "#212832", cursor: "pointer" }} />}
                        </div>
                        </div>
                    </li>
                    <li className=' px-[30px] py-[12px] bg-transparent cursor-pointer rounded-3xl border-[1px] border-solid border-mainColor transition-all duration-500 ease-in-out hover:bg-mainColor hover:text-white'>Log In</li>
                    <li className='px-[30px] py-[12px] bg-mainColor text-white cursor-pointer rounded-3xl transition-all duration-500 ease-in-out hover:bg-transparent hover:text-mainTextColor border-[1px] border-white hover:border-mainColor border-solid'>Sign Up</li>
                </ul>
                
            </nav>
        </header>
    )
}

export default Header;
