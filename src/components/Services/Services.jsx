import seamlessIcon from '../../images/Home/Services/seamless.png'
import suggestionIcon from '../../images/Home/Services/suggestion.png'
import supportIcon from '../../images/Home/Services/support.png'
import discountIcon from '../../images/Home/Services/discount.png'
import './services.css'

function Services() {
  return (
    <section className='container px-[160px] py-[100px] font-poppins'>
        {/* Heading */}
        <div className='w-fit mx-auto flex justify-center items-center flex-col mb-[45px]'>
            <h3 className='uppercase text-[#5E6282] text-base font-semibold'>category</h3>
            <h1 className='text-[#14183E] font-bold font-volkhov text-[50px]'>We Offer Best Services</h1>
        </div>
        {/* Services */}
        <div className=' flex justify-center gap-28 items-center'>
            {/* Card */}
            <div className=' px-[30px] py-[40px]  hover:rounded-3xl service-card  flex flex-col justify-center items-center gap-[46px] text-center'>
                {/* img */}
                <div><img src={seamlessIcon} alt="" /></div>
                {/*Card Info */}
                <div className=' flex flex-col justify-center items-center gap-3'>
                    <h3>Seamless Booking</h3>
                    <span className='text-[#5E6282] leading-6'>Effortless reservations for your ideal stay.</span>
                </div>
            </div>
            {/* Card */}
            <div className=' px-[30px] py-[40px]  hover:rounded-3xl service-card flex flex-col justify-center items-center gap-[46px] text-center'>
                {/* img */}
                <div><img src={supportIcon} alt="" /></div>
                {/*Card Info */}
                <div className=' flex flex-col justify-center items-center gap-3'>
                    <h3>Tailored Suggestions</h3>
                    <span className='text-[#5E6282] leading-6'>Tailored suggestions for a curated experience.</span>
                </div>
            </div>
            {/* Card */}
            <div className=' px-[30px] py-[40px]  hover:rounded-3xl service-card flex flex-col justify-center items-center gap-[46px] text-center'>
                {/* img */}
                <div><img src={suggestionIcon} alt="" /></div>
                {/*Card Info */}
                <div className=' flex flex-col justify-center items-center gap-3'>
                    <h3>24/7 Support</h3>
                    <span className='text-[#5E6282] leading-6'>Round-the-clock assistance for your peace of mind.</span>
                </div>
            </div>
            {/* Card */}
            <div className='  px-[30px] py-[50px]  hover:rounded-3xl service-card flex flex-col justify-center items-center gap-[46px] text-center'>
                {/* img */}
                <div><img src={discountIcon} alt="" /></div>
                {/*Card Info */}
                <div className=' flex flex-col justify-center items-center gap-3'>
                    <h3>Exclusive Deals</h3>
                    <span className='text-[#5E6282] leading-6'>Special offers and discounts just for you.</span>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Services
