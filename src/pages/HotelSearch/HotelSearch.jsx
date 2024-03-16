import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import ReactCountryFlag from "react-country-flag"
import userImg from '../../images/Home/paymentPage/alexander-hipp-iEEBWgY_6lA-unsplash.jpg'
import './hotelSearch.css'
import { Box, TextField } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];
const destinations = [
    'Tlemcen',
    'Oran',
    'Algiers'
]

function HotelSearch() {
    const [language, setLanguage] = useState('EN');
    const [arrowStatus, setarrowStatus] = useState(false);
    const [personName, setPersonName] = useState([]);
    const [theDestination, setDestination] = useState([]);

    const handleRoomTypeChange = (event) => {
        const {
        target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const handleDestinationChange = (event) => {
        const {
        target: { value },
        } = event;
        setDestination(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleLanguageChange = (value) => {
        setLanguage(value);
    };

  return (
    <div>
        <header className='w-full px-[100px] py-[50px] flex justify-between items-center mb-[74px] box-shadow'>
        {/* Logo */}
        <div className=' text-xl font-bold cursor-pointer'>Logo</div>
        {/* nav */}
        <nav className='flex justify-center items-center gap-5'>
            {/* languages */}
            <div className="dropdown mr-2">
                <div onMouseEnter={()=>{setarrowStatus(true)}} onMouseOut={()=>{setarrowStatus(false)}}>
                    <button  className="dropbtn ">{language}</button>
                    <div className="dropdown-content ">
                        <div className=' flex justify-center items-center'>
                            <a onClick={() => handleLanguageChange("EN")} href="#">English</a>
                            <div className=' cursor-pointer' onClick={() => handleLanguageChange("EN")}> <ReactCountryFlag style={{width:"50px", height:"25px", borderRadius:"15px"}} countryCode="US" svg /></div>
                        </div>
                        <div className=' flex justify-center items-center'>
                            <a onClick={() => handleLanguageChange("FR")} href="#">French</a>
                            <div className=' cursor-pointer' onClick={() => handleLanguageChange("FR")}> <ReactCountryFlag style={{width:"50px", height:"25px", borderRadius:"15px"}} countryCode="FR" svg /></div>
                        </div>
                        <div className=' flex justify-center items-center'>
                            <a onClick={() => handleLanguageChange("AR")} href="#">Arabic</a>
                            <div className=' cursor-pointer' onClick={() => handleLanguageChange("AR")}> <ReactCountryFlag style={{width:"50px", height:"25px", borderRadius:"15px"}} countryCode="DZ" svg /></div>
                        </div>
                        
                    </div>
                    {arrowStatus ? <KeyboardArrowUpIcon sx={{ color: "#212832", cursor: "pointer" }} /> : <KeyboardArrowDownIcon sx={{ color: "#212832", cursor: "pointer" }} />}
                </div>
            </div>
            {/* User Account */}
            <div className='flex justify-center items-center gap-4'>
                {/* user image */}
                <div className='w-[40px] h-[40px] overflow-hidden rounded-full cursor-pointer'><img className=' w-full h-full' src={userImg} alt="" /></div>
                {/* info */}
                <div className='flex flex-col justify-center items-center text-mainTextColor '>
                    <h4 className='font-extrabold text-[14px] leading-[140%]'>Your Account</h4>
                    <span className='text-[12px]'>Nobody</span>
                </div>
            </div>
        </nav>
        </header>
        <section className="container px-[100px] py-[63px]">
            {/* CheckIn & CheckOut ans search info */}
            <div className='px-[24px] py-[32px] flex justify-center gap-5 items-center box-shadow'>
                {/* Destination */}
                <div className='w-[400px]'>
                    <FormControl fullWidth sx={{ m: 1, width: 300 }}>
                        <InputLabel id="demo-multiple-checkbox-label">Enter Destination</InputLabel>
                        <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={theDestination}
                        onChange={handleDestinationChange}
                        input={<OutlinedInput label="Enter Destination" />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                        >
                        {destinations.map((destination) => (
                            <MenuItem key={destination} value={destination}>
                            <Checkbox checked={theDestination.indexOf(destination) > -1} />
                            <ListItemText primary={destination} />
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>

                </div>
                {/* Check In */}
                <div className='w-[340px]'>
                    <Box sx={{width:'100%'}}>
                        <LocalizationProvider  dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DateTimePicker']}>
                                <DateTimePicker label="Check out date" />
                            </DemoContainer>
                        </LocalizationProvider>
                    </Box>
                </div>
                {/* Check Out */}
                <div className='w-[340px]'>
                    <Box sx={{width:'100%'}}>
                        <LocalizationProvider  dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DateTimePicker']}>
                                <DateTimePicker label="Check out date" />
                            </DemoContainer>
                        </LocalizationProvider>
                    </Box>
                </div>
                {/* Room Type */}
                <div className='w-fit'>
                    <FormControl fullWidth sx={{ m: 1, width: 300 }}>
                        <InputLabel id="demo-multiple-checkbox-label">Room Types</InputLabel>
                        <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={personName}
                        onChange={handleRoomTypeChange}
                        input={<OutlinedInput label="Room Types" />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                        >
                        {names.map((name) => (
                            <MenuItem key={name} value={name}>
                            <Checkbox checked={personName.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </div>
            </div>
            {/*  */}
        </section>
    </div>
    
  )
}

export default HotelSearch
