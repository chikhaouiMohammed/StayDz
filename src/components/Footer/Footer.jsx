import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import logo from '../../images/Home/Footer/Logo.png'

function Footer() {
  return (
    <footer className=" container px-[160px] font-poppins py-[100px] text-[#5E6282] font-medium">
        <div className='flex justify-center gap-[83px] items-center'>
            {/* logo */}
            <div className=' flex flex-col justify-center gap-10 items-center'>
                <div><img src={logo} alt="" /></div>
                <span className='text-[#5E6282]'>Book your trip in minute, get full <br /> Control for much longer.</span>
            </div>
            {/* Footer section */}
            <div className=' flex flex-col gap-7'>
                {/* Heading */}
                <div className='flex justify-between items-center'>
                    <h3 className='text-black font-bold text-[21px]'>Menu</h3>
                    <h3 className='text-black font-bold text-[21px]'>Contact Info</h3>
                    <h3 className='text-black font-bold text-[21px]'>Follow Us</h3>
                </div>
                <div className='flex justify-between items-center gap-[200px]'>
                    {/* Menu */}
                    <div>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Hotels</a></li>
                            <li><a href="">Sign up</a></li>
                        </ul>
                    </div>
                    {/* Contact */}
                    <div className="flex flex-col justify-center items-center gap-3">
                        
                        <div className='flex justify-center items-center gap-2'>
                            <div><LocalPhoneIcon/></div>
                            <span>+213 656 03 53 64</span>
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                            <div><EmailIcon/></div>
                            <span>+213 656 03 53 64</span>
                        </div>
                    </div>
                    {/* Follow US on Social media */}
                    <div className='flex flex-col justify-between items-center'>

                        <div className='flex justify-center items-center gap-4 text-gray-900'>
                            <div><a href=""><FacebookRoundedIcon/></a></div>
                            <div><a href=""><InstagramIcon/></a></div>
                            <div><a href=""><XIcon/></a></div>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    </footer>
  )
}

export default Footer
