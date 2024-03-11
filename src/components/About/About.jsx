import aboutImg from '../../images/Home/About/about.jpg'

function About() {
  return (
    <section className=" container px-[160px] font-poppins py-[150px]">
        {/* Heading */}
        <h2 className=" font-volkhov font-bold text-[50px] text-[#14183E] text-center">About this website</h2>
        {/* About info */}
        <div className='flex justify-between items-center'>
            {/* about image */}
            <div className=" w-[500px] h-[71px] flex-shrink-0"><img className=" w-full h-full" src={aboutImg} alt="" /></div>
            {/* About Paragraph */}
            <div>
                <p>Welcome to Stay Dz, your premier destination for seamless travel experiences in Algeria and beyond. Our platform offers effortless booking, personalized recommendations, and round-the-clock support to ensure every stay is tailored to your needs. Unlock exclusive deals and discover unforgettable accommodations with us. Start your journey with Stay Dz safely and with high quality services today.</p>
            </div>
        </div>
    </section>
  )
}

export default About