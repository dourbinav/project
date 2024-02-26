import React from 'react'

export default function footer() {
  return (
    <div className='bg-black sm:h-80 text-white sm:pr-24 pt-12   w-full'>
        <div className='flex text-[14px] sm:justify-around items-center p-4 m-auto  sm:w-3/4 '>
        <div className='flex flex-col   gap-2 '>
            <h4>CATEGORIES</h4>
            <span>Web Builder</span>
            <span>Hoisting</span>
            <span>Data Center</span>
            <span>Robotic-Automation</span>
        </div>
        <div className='flex flex-col   gap-2'>
            <h5>CONTACT</h5>
            <span>Contact</span>
            <span>Privacy Policy</span>
            <span>Terms of service</span>
            <span>Categories</span>
            <span>About</span>
        </div>
        <div className='center'>Unitedstates</div>
        </div>

    </div>
  )
}
