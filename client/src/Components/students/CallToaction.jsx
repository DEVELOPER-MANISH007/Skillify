import React from 'react'
import { assets } from '../../assets/assets'

const CallToaction = () => {
  return (
    <div className='relative flex flex-col items-center gap-6 pt-16 pb-24 px-8 md:px-0 overflow-hidden'>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50"></div>
      <div className='relative z-10 flex flex-col items-center gap-6 max-w-3xl mx-auto text-center'>
        <h1 className='text-3xl md:text-5xl font-bold text-gray-900 leading-tight'>
          Learn anything, <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">anytime</span>, anywhere
        </h1>
        <p className='text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed'>
          Start your learning journey today. Access thousands of courses from expert instructors and transform your skills at your own pace.
        </p>
        <div className='flex flex-col sm:flex-row items-center font-medium gap-4 mt-4'>
          <button className='px-8 py-3.5 rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 font-semibold'>
            Get Started
          </button>
          <button className='flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors font-semibold'>
            Learn more 
            <img src={assets.arrow_icon} alt="arrow_icon" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CallToaction