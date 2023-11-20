"use client";

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { VisibilityIcon } from '@/public/assets/images'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Image from 'next/image'
import React from 'react'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend);

const Index = () => {
  const data = {
    labels: ['Total Contributions', 'Total Earnings', 'Total Withdrawal'],
    datasets: [
      {
        label: 'NGR',
        data: [300000, 80000, 0],
        backgroundColor: [
          '#18dbd5',
          '#3580c3',
          '#073f71'
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className='ml-[260px] px-4'>
      <Header/>
      <div className='mt-6 flex flex-col gap-5'>
        <b className='text-[28px] ml-4 mb-9'>Welcome to your dashboard, HELEN ADAMS</b>
        <div className='flex-auto bg-[#d2eaff] py-5 px-6 rounded-[20px] shadow'>
          <h3 className='text-[28px] text-[#1f2937] font-medium'>
            <b className='text-[#667085]'>Current Balance:</b>
              &nbsp;&nbsp;&nbsp;&nbsp;₦**********&nbsp;&nbsp;&nbsp;&nbsp;
              <Image src={VisibilityIcon} alt='visibility icon' width={17} height={17} className='inline'/>
          </h3>
        </div>
        <div className='flex gap-5'>
          <div className='bg-[#d2eaff] py-5 px-6 rounded-[20px] w-[270px] flex flex-col gap-10 shadow'>
            <div>
              <p className='text-base font-semibold text-[#374151] mb-3'>Total Balance</p>
              <p className='text-[#667085] text-[12.8px] font-medium'>It is your combination of RSA Balance and AVC Balance.</p>
            </div>
            <div>
              <p className='text-[12.8px] font-semibold text-[#667085]'>RSA Balance</p>
              <p className='text-[#1f2937] font-medium'>₦*******</p>
            </div>
            <div className='mb-10'>
              <p className='text-[12.8px] font-semibold text-[#667085]'>AVC Balance</p>
              <p className='text-[#1f2937] font-medium'>₦*******</p>
            </div>
          </div>
          <div className='bg-[#d2eaff] py-5 px-6 rounded-[20px] w-[270px] flex flex-col gap-10 shadow'>
            <div>
              <p className='text-base font-semibold text-[#374151] mb-3'>PAL RSA Fund II</p>
              <p className='text-[#667085] text-[12.8px] font-medium'> Current Price of RSA Fund II as at Nov 16, 2023 </p>
            </div>
            <div>
              <p className='text-[12.8px] font-semibold text-[#667085]'>Unit Price</p>
              <p className='text-[#1f2937] font-medium'>₦6.5731</p>
            </div>
            <div className='mb-10'>
              <p className='text-[12.8px] font-semibold text-[#667085]'>Total Units</p>
              <p className='text-[#1f2937] font-medium'>73,093.51</p>
            </div>
          </div>
          <div className='bg-[#d2eaff] py-5 px-6 rounded-[20px] w-[600px] flex justify-around items-center shadow'>
            <div className='flex flex-col'>
              <h3 className='mb-7'>
                <b className='text-[#374151] text-base'>Transaction Summary</b>
              </h3>
              <div className='flex gap-2 mb-10'>
                <div className='inline-block w-5 h-5 bg-[#18dbd5] rounded-full'></div>
                <div>
                  <p className='text-[12.8px] font-semibold text-[#667085]'>Contributions from Inception</p>
                  <p className='text-[#1f2937] font-medium'>₦*******</p>
                </div>
              </div>
              <div className='flex gap-2 mb-10'>
                <div className='inline-block w-5 h-5 bg-[#3580c3] rounded-full'></div>
                <div>
                  <p className='text-[12.8px] font-semibold text-[#667085]'>Total Earnings</p>
                  <p className='text-[#1f2937] font-medium'>₦*******</p>
                </div>
              </div>
              <div className='flex gap-2'>
                <div className='inline-block w-5 h-5 bg-[#073f71] rounded-full'></div>
                <div>
                  <p className='text-[12.8px] font-semibold text-[#667085]'>Total Withdrawals</p>
                  <p className='text-[#1f2937] font-medium'>₦*******</p>
                </div>
              </div>
             
            </div>
            <div>
              <Doughnut data={data} width={262} height={262}/>
            </div>
            
          </div>
         
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Index