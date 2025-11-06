import React from 'react'
import { assets } from '../../assets/assets'

const Compainies = () => {
  return (
   <div className='py-16 bg-white/50'>
    <p className='text-center text-sm md:text-base text-gray-600 font-medium mb-8'>
      Trusted by learners from leading companies
    </p>
    <div className='flex flex-wrap items-center justify-center gap-8 md:gap-16 px-8'>
      <img 
        src={assets.microsoft_logo} 
        alt="microsoft"  
        className='w-20 md:w-28 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0'
      />
      <img 
        src={assets.walmart_logo} 
        alt="walmart"  
        className='w-20 md:w-28 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0'
      />
      <img 
        src={assets.accenture_logo} 
        alt="accenture"  
        className='w-20 md:w-28 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0'
      />
      <img 
        src={assets.adobe_logo} 
        alt="adobe"  
        className='w-20 md:w-28 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0'
      />
      <img 
        src={assets.paypal_logo} 
        alt="paypal"  
        className='w-20 md:w-28 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0'
      />
    </div>
   </div>
  )
}

export default Compainies