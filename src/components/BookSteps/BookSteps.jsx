import destinationImg from '../../images/Home/BookSteps/destination.png'
import paymentImg from '../../images/Home/BookSteps/payment-method.png'
import dateImg from '../../images/Home/BookSteps/calendar.png'
import tlemcenTripImg from '../../images/Home/BookSteps/card/Rectangle 17.png'
import tlemcenProfileImg from '../../images/Home/BookSteps/card/image 32.png'
import effectImg from '../../images/Home/BookSteps/effect.png'
import firstIcon from '../../images/Home/BookSteps/card/icons/send 2.png'
import secondIcon from '../../images/Home/BookSteps/card/icons/LEAF.png'
import thirdIcon from '../../images/Home/BookSteps/card/icons/map 1.png'
import fourthIcon from '../../images/Home/BookSteps/card/icons/Group.png'

function BookSteps() {
  return (
    <section className="container px-[160px] font-poppins">
        <div className="flex justify-between items-center">
            {/* Info */}
            <div className="flex flex-col justify-center items-start">
                {/* Heading */}
                <div className=' mb-10'>
                    <h4 className="text-[#5E6282] text-base font-semibold">Easy and Fast</h4>
                    <h2 className="text-[50px] text-[#14183E] font-volkhov font-bold">Book your next trip <br /> in 3 easy steps</h2>
                </div>
                {/* Steps */}
                <div className="flex flex-col justify-center items-start gap-[60px] text-base text-[#5E6282]">
                    {/* choose destination */}
                    <div className="flex justify-center items-center gap-3">
                        {/* icon */}
                        <div className='w-[50px] h-[50px]'><img className='w-full h-full' src={destinationImg} alt="" /></div>
                        {/* info */}
                        <div className=" flex flex-col justify-center items-start gap-2">
                            <h4 className="font-bold">Choose Destination</h4>
                            <span className="font-medium">Chose anny hotel in anny city you like.</span>
                        </div>
                    </div>
                    {/* make payment */}
                    <div className="flex justify-center items-center gap-3">
                        {/* icon */}
                        <div className='w-[50px] h-[50px]'><img className='w-full h-full' src={paymentImg} alt="" /></div>
                        {/* info */}
                        <div className=" flex flex-col justify-center items-start gap-2">
                            <h4 className="font-bold">Make Payment</h4>
                            <span className="font-medium">Make payment in anny methode you like.</span>
                        </div>
                    </div>
                    {/* choose destination */}
                    <div className="flex justify-center items-center gap-3">
                        {/* icon */}
                        <div className='w-[50px] h-[50px]'><img className='w-full h-full' src={dateImg} alt="" /></div>
                        {/* info */}
                        <div className=" flex flex-col justify-center items-start gap-2">
                            <h4 className="font-bold">Select the Date</h4>
                            <span className="font-medium">Chose the date even earlier and guarantee good services.</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Images */}
            <div className=' mr-10 relative '>
                {/* Card */}
                <div className='px-[25px] py-[20px] shadow-2xl rounded-2xl z-20 bg-white'>
                    {/* Image */}
                    <div><img src={tlemcenTripImg} alt="" /></div>
                    {/* info */}
                    <div className='text-[#84829A] py-[26px]'>
                        <h3 className='text-black text-base font-medium'>Trip To Tlemcen</h3>
                        <span>14-29 June |   by Ibis</span>
                        <div className='flex justify-start items-center gap-3'>
                            <div className='bg-[#F5F5F5] p-[10px] rounded-full'><img src={firstIcon} alt="" /></div>
                            <div className='bg-[#F5F5F5]  rounded-full'><img src={secondIcon} alt="" /></div>
                            <div className='bg-[#F5F5F5] p-[10px] rounded-full'><img src={thirdIcon} alt="" /></div>
                        </div>
                        <div className='flex justify-start items-center gap-3'>
                            <div><img src={fourthIcon} alt="" /></div>
                            <span>24 hotel exist</span>
                        </div>
                    </div>
                </div>
                {/* Effect Image */}
                <div className=' absolute bottom-0 -right-[5px] -z-10'>
                    <img src={effectImg} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default BookSteps
