import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import heroImg from '../../images/Home/Hero/Traveller.png'
import './hero.css'
const Hero = () => {
  return (
    <section className='container px-[160px]'>
         <div className=' flex justify-center items-center'>
            {/* Hero Section Text */}
            <div className=' flex flex-col justify-center items-start w-full pt-36'>
                <h3 className='text-[#DF6951] uppercase text-[20px] font-bold mb-[24px]'>Premier Hospitality Experiences Await</h3>
                {/* Heading */}
                <div className=' text-[84px] font-volkhov text-[#181E4B] font-bold mb-[30px]'>
                    <h1>Easy Booking</h1>
                    <h1>Exceptional</h1>
                    <h1>Service</h1>
                </div>
                <p className='mb-[64px] text-[#5E6282] font-medium leading-7 space-x-5'>Discover Algeria: Your gateway to luxury stays and <br /> personalized service. Book with ease, explore with joy</p>
                {/* Buttons */}
                <div className=' flex justify-center items-center gap-[44px]'>
                    <div className='px-[27px] py-[17px] text-lg bg-mainColor text-white rounded-xl cursor-pointer transition-all duration-500 ease-in-out hover:bg-transparent hover:text-mainTextColor border-[1px] border-white hover:border-mainColor border-solid shadow-2xl hover:paly-demo'>Find out more</div>
                    <div className='flex justify-center items-center gap-5 cursor-pointer'>
                        <div className=' p-[20px] bg-mainColor rounded-full paly-demo'><PlayArrowIcon sx={{color:"white"}}/></div>
                        <span className='text-[17px] text-[#686D77]'>Play Demo</span>
                    </div>
                </div>
            </div>
            {/* Hero Section Image */}
            <div className='w-full h-full'>
            <img className='w-full h-full transform scale-150' src={heroImg} alt="" />
            </div>
         </div>
    </section>
  )
}

export default Hero
