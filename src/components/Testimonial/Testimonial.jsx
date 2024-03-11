import CircleIcon from '@mui/icons-material/Circle';
import profileImg from '../../images/Home/Testimonials/Image.png'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './testimonials.css'

function Testimonial() {
  return (
    <section className=" container px-[160px] py-[130px] font-poppins relative">
        <div className='flex justify-between items-center'>
            {/* Heading  */}
            <div className=" flex flex-col justify-center items-start gap-2">
                <h4 className="text-[#5E6282] text-base uppercase">Testimonials</h4>
                <h2 className=" font-volkhov text-mainTextColor text-[50px] font-bold">What people say<br />about Us.</h2>
                {/* Dots */}
                <div className='flex justify-center items-center gap-3 mt-[60px]'>
                    <div className=' active'><CircleIcon sx={{width:'12px',height:'12px'}}/></div>
                    <div ><CircleIcon sx={{width:'12px',height:'12px',color:'#E5E5E5'}}/></div>
                    <div ><CircleIcon sx={{width:'12px',height:'12px',color:'#E5E5E5'}}/></div>
                </div>
            </div> 
            {/* Cards  */}
            <div className=' bg-white relative'>
                {/* card */}
                <div className=' relative shadow-2xl rounded-2xl z-10'>
                    {/* Card image */}
                    <div className='w-[68px] h-[68px] absolute -top-7 -left-7'><img className=' w-full h-full' src={profileImg} alt="" /></div>
                    {/* card info */}
                    <div className='w-[504px] h-[245px] pt-[28px] pb-4 pl-[34px] pr-[68px] text-[#5E6282]'>
                        <p className=' font-medium text-[16px] mb-[35px]'>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                        <h3 className=' text-[20px] font-semibold'>Tlemcen Tourism Director</h3>
                        <span className=' text-[14px]'>Tlemcen, Algeria</span>
                    </div>
                </div>
                {/* card */}
                <div className=' absolute -bottom-20 bg-[#F7F7F7] -right-16 -z-10 shadow-lg border-solid border-2 border-gray-200 rounded-2xl'>
                    
                    {/* card info */}
                    <div className='w-[504px] h-[245px] pt-[28px] pb-4 pl-[34px] pr-[68px] text-[#5E6282]'>
                        <p className=' font-medium text-[16px] mb-[35px]'>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                        <h3 className=' text-[20px] font-semibold'>Tlemcen Tourism Director</h3>
                        <span className=' text-[14px]'>Tlemcen, Algeria</span>
                    </div>
                </div>
            </div>
            {/* Up & Down Arrows */}
        <div className='flex flex-col justify-center items-center gap-5 absolute right-5 top-[45%]'>
                <div className=' cursor-pointer w-fit h-fit'><KeyboardArrowUpIcon sx={{ color:'#BCB7C2'}}/></div>
                <div className=' cursor-pointer w-fit h-fit'><KeyboardArrowDownIcon sx={{color:'black'}}/></div>
        </div>
        </div>
        
    </section>
  )
}

export default Testimonial