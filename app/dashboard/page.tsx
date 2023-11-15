import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const Index = () => {
  return (
    <div className='ml-[260px] px-4'>
      <Header/>
      <div className='mt-6 flex flex-col'>
        <b className='text-[28px] ml-4 mb-10'>Welcome to your dashboard, HELEN ADAMS</b>
        <div className='flex-auto bg-[#d2eaff] py-5 px-6 rounded-[20px]'>
          <h3 className='text-[#667085] text-[28px]'>
            <b>Current Balance:</b>
          </h3>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Index