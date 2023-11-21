"use client";

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { VisibilityIcon } from '@/public/assets/images'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
import Image from 'next/image'
import React from 'react'
import { Doughnut, Line } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement);

const Index = () => {
  const doughnutData = {
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

  const lineGraphData = {
    labels: ['13 Nov 2023', '14 Nov 2023', '15 Nov 2023', '16 Nov 2023', '17 Nov 2023', '18 Nov 2023', '19 Nov 2023'],
    datasets: [{
      data: [6.571, 6.573, 6.572, 6.573, 6.585, 6.587, 6.588],
      fill: {
        target: 1,
        below: 'rgb(24, 219, 213,0.2)'
      },
      borderColor: '#18dbd5',
      tension: 0.4,
      pointBackgroundColor: '#ef6363',
      pointBorderColor: '#fff'
    }]
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
          <div className='bg-[#d2eaff] py-5 px-6 rounded-[20px] w-[600px] flex justify-between items-center shadow'>
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
              <Doughnut data={doughnutData} width={262} height={262}/>
            </div>
            
          </div>
        </div>
        <div className='bg-[#e8f0fa] rounded-[8px] shadow'>
          <div className='flex flex-col py-5 px-6 border-b-2'>
            <b className='text-[28px] mb-2'>RSA Fund II</b>
            <span className='text-sm text-[#374156]'>RSA Fund Price for the last 7 days</span>
          </div>
          <div className='p-2'>
            <Line data={lineGraphData} width={600} height={200}/>
          </div>
        </div>
        <div className='bg-white shadow rounded-[8px] '>
          <div className='flex flex-col pt-5 px-6 border-b-2'>
            <h1 className='text-xl mb-2 font-medium'>Transaction History</h1>
            <hr className='bg-[#374156] my-4'/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Index