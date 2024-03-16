import imglogin1 from '../assets/25f3792bb151520d1ae87926e8e6633a 1.png';
import { FcGoogle } from "react-icons/fc";
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";
import iconfcb from '../assets/icons8-facebook-nouveau-64.png'

function SignIn() {
  return (
    <div className='w-full h-screen flex items-start'>
      <div className='relative w-1/2 h-full flex flex-col'>
        <img className='h-full w-full object-cover' src={imglogin1} alt="" />
      </div>
      
      <div className='w-1/2 h-full bg-[#FFFFFF] flex flex-col p-20 justify-between items-center '>
        <div className='w-full flex flex-col max-w-[400px]'>
          <div className='w-full flex flex-col mb-5'>
            <h3 className='text-3xl font-medium mb-4'>Sign in</h3>
            <p className='text-sm mb-2'>If you don’t have an account register<br />
              You can &nbsp;  
              <span className='text-[#FF432A]'>
                Register here !
              </span>
            </p>
          </div>
          <div className='w-full flex flex-col mt-3 '>
            <div className='relative'>
              <label htmlFor="email">Email</label>
              <TfiEmail className='absolute bottom-7'/>
              <input
                type="email"
                id="email"
                placeholder='Enter Your Email Address'
                className='w-full text-black py-3 pl-6 my-3 border-b border-[#FF432A] outline-none focus:outline-none bg-none'
              /> 
            </div>
            <div className='relative'>
              <label className='mt-8' htmlFor="">Password</label>
              <RiLockPasswordLine className='absolute bottom-7 ' />
              <input
                type="password"
                placeholder='Entrer Your Password'
                className='w-full text-black py-3 pl-5 my-3 border-b border-black outline-none focus:outline-none bg-none'
              />
            </div>
          </div>
          <div className='w-full flex items-center justify-between'>
            <div className='w-full flex items-center'>
              <input type="checkbox" className='w-4 h-4 mr-2' />
              <p className='text-sm '>Remember me For 30 days</p>
            </div>
            <p className='text-sm text-gray-600 transition-all duration-300 ease-in hover:text-black whitespace-nowrap cursor-pointer'>Forget Password ?</p>
          </div>
          <div className='w-full flex flex-col mt-8 pt-8'>
            <button className='w-full my-2 bg-mainColor rounded-3xl shadow p-4 text-center text-white flex items-center justify-center font-medium'>Login</button>
          </div>
          <div className='w-full flex items-center justify-center relative py-7'>
            <p className='text-[#B5B5B5] font-medium text-xl'>Or contune with</p>
          </div>
          <div className='flex items-center justify-center space-x-6 pt-4'>
            <a href=""><img src={iconfcb} alt="" className='w-12 h-12' /></a>
            <i><a href=""><FcGoogle className='w-10 h-10' /></a></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
