import romeImg from '../../images/Home/Destinations/rome.png'
import londonImg from '../../images/Home/Destinations/london.png'
import greeceImg from '../../images/Home/Destinations/greece.png'
import decoreBg from '../../images/Home/Destinations/Decore.png'
import NearMeIcon from '@mui/icons-material/NearMe';
import './destinations.css'

function Destinations() {
    const cardBg = (url) => {
        return {
            background: `url(${url})`,
            backgroundSize: '160%',
            backgroundPosition: '-90px -20px',
            backgroundRepeat: 'no-repeat',
            
        };
      };
      

  return (
    <section className="container px-[160px] pb-[180px] font-poppins relative"> 
      {/* Heading */}
      <div className='w-fit mx-auto flex justify-center items-center flex-col mb-[60px]'>
        <h3 className='uppercase text-[#5E6282] text-base font-semibold'>Top Places</h3>
        <h1 className='text-[#14183E] font-bold font-volkhov text-[50px]'>Top Destinations</h1>
      </div>
      {/* Top 3 Destinations */}
      <div className='flex justify-between items-center gap-5'>
        {/* card */}
        <div className='w-[315px] h-[457px] rounded-2xl overflow-hidden relative card-shadow cursor-pointer' > 
          {/* img */}
          <div className='w-full h-full bg-red-600' style={cardBg(romeImg)}></div>
          {/* info */}
          <div className="absolute bottom-0 left-0 right-0 pt-[27px] pb-[42px] px-[20px] flex flex-col justify-between items-center text-[#5E6282] bg-white z-30"> 
            <div className='w-full flex justify-between items-center'>
                <h4>Algiers</h4>
                <span>$200</span>
            </div>
            <div className='w-full flex justify-start items-center gap-[14px] mt-[19px]'>
                <div className=' text-black'><NearMeIcon/></div>
                <div>10 Days Trip</div>
            </div>
          </div>
        </div>
        {/* card */}
        <div className='w-[315px] h-[457px] rounded-2xl overflow-hidden relative card-shadow cursor-pointer' > 
          {/* img */}
          <div className='w-full h-full bg-red-600' style={cardBg(londonImg)}></div>
          {/* info */}
          <div className="absolute bottom-0 left-0 right-0 pt-[27px] pb-[42px] px-[20px] flex flex-col justify-between items-center text-[#5E6282] bg-white z-30"> 
            <div className='w-full flex justify-between items-center'>
                <h4>Tlemcen</h4>
                <span>$200</span>
            </div>
            <div className='w-full flex justify-start items-center gap-[14px] mt-[19px]'>
                <div className=' text-black'><NearMeIcon/></div>
                <div>10 Days Trip</div>
            </div>
          </div>
        </div>
        {/* card */}
        <div className='w-[315px] h-[457px] rounded-2xl overflow-hidden relative card-shadow cursor-pointer' > 
          {/* img */}
          <div className='w-full h-full bg-red-600' style={cardBg(greeceImg)}></div>
          {/* info */}
          <div className="absolute bottom-0 left-0 right-0 pt-[27px] pb-[42px] px-[20px] flex flex-col justify-between items-center text-[#5E6282] bg-white z-30"> 
            <div className='w-full flex justify-between items-center'>
                <h4>Algiers</h4>
                <span>$350</span>
            </div>
            <div className='w-full flex justify-start items-center gap-[14px] mt-[19px]'>
                <div className=' text-black'><NearMeIcon/></div>
                <div>10 Days Trip</div>
            </div>
          </div>
        </div>
        
      </div>
      {/* Decore img */}
      <div className='absolute right-[7%] top-[40%] -z-50'><img className='w-full h-full' src={decoreBg} alt="" /></div>
    </section>
  )
}

export default Destinations;
