import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';
import ReactCountryFlag from "react-country-flag"
import userImg from '../images/Home/paymentPage/alexander-hipp-iEEBWgY_6lA-unsplash.jpg'
import firstHotelImg from '../images/Home/paymentPage/HotelImages/image 33.png'
import secondHotelImg from '../images/Home/paymentPage/HotelImages/image 34.png'
import thirdHotelImg from '../images/Home/paymentPage/HotelImages/image 35.png'
import fourthHotelImg from '../images/Home/paymentPage/HotelImages/image 5.png'
import LinearProgress from '@mui/material/LinearProgress';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Payment() {
    const [language, setLanguage] = useState('EN');
    const [arrowStatus, setarrowStatus] = useState(false);

    const handleChange = (value) => {
        setLanguage(value);
    };

  return (
    <div className=' container px-[130px] font-poppins'>
      <header className='py-[50px] flex justify-between items-center mb-[74px]'>
        {/* Logo */}
        <div className=' text-xl font-bold cursor-pointer'>Logo</div>
        {/* nav */}
        <nav className='flex justify-center items-center gap-5'>
            {/* languages */}
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
            {/* User Account */}
            <div className='flex justify-center items-center gap-4'>
                {/* user image */}
                <div className='w-[50px] h-[50px] overflow-hidden rounded-full cursor-pointer'><img className=' w-full h-full' src={userImg} alt="" /></div>
                {/* info */}
                <div className='flex flex-col justify-center items-center gap-[1px] text-mainTextColor '>
                    <h4 className='font-extrabold text-[16px]'>Your Account</h4>
                    <span className='text-[14px]'>Nobody</span>
                </div>
            </div>
        </nav>
      </header>
      {/* payment page content */}
      <div className='flex justify-center items-center gap-3 flex-nowrap'>
        {/* left side */}
        <div className='flex flex-col justify-center items-start'>
            {/* Hotel images & info */}
            <div className='flex justify-center items-start gap-4'>
                {/* images */}
                <div className='flex flex-col justify-center items-start gap-5'>
                    <div className='rounded-xl overflow-hidden w-[142px] h-[120px] cursor-pointer'><img className='w-full h-full' src={firstHotelImg} alt="" /></div>
                    <div className='rounded-xl overflow-hidden w-[142px] h-[120px] cursor-pointer'><img src={secondHotelImg} alt="" /></div>
                    <div className='rounded-xl overflow-hidden w-[142px] h-[120px] cursor-pointer'><img src={thirdHotelImg} alt="" /></div>
                    <div className='rounded-xl overflow-hidden w-[142px] h-[120px] cursor-pointer'><img src={fourthHotelImg} alt="" /></div>
                </div>
                {/* Info */}
                <div>
                    {/* headingg */}
                    <div className='text-black mb-10'>
                        <h2 className='text-2xl font-bold'>First Hotel G</h2>
                        <span className='text-[#565656] text-sm'>Modern Hotel at Gothenburg Central Station</span>
                    </div>
                    {/* Reviews Progress */}
                    <div className='flex flex-col justify-center items-start gap-2 mb-10'>
                        <div className='w-full flex justify-between items-center'>
                            <h4 className='text-xl'>More than 4,325 Review</h4>
                            <div className='text-mainColor px-1 py-1 border-2 border-mainColor border-solid rounded-lg font-bold'>9.2</div>
                        </div>
                        <div className='w-full h-2 rounded-lg overflow-hidden'>
                            <LinearProgress variant="determinate" value={90} sx={{
                                                                                    width: '100%',
                                                                                    height: '100%',
                                                                                    '& .MuiLinearProgress-barColorPrimary': {
                                                                                    backgroundColor: '#FF432A', // This will change the color of the progress bar
                                                                                    },
                                                                                }} />
                        </div>
                    </div>
                    {/* Location information */}
                    <div className='mb-10'>
                        <div className='flex justify-start items-center gap-3'>
                            <div><LocationOnIcon fontSize='large' sx={{color:'#FF432A'}}/></div>
                            <h3 className='text-2xl font-semibold'>Location Information</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* right side */}
        <div className='flex flex-col justify-center items-start'>

        </div>
      </div>
    </div>
  )
}

export default Payment
