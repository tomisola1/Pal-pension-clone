import { NotificationIcon, ProfilePic } from '@/public/assets/images'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='h-24 pb-8 pt-4 pr-2 border-b-2 flex justify-end'>
        <div className='p-3 relative'>
            <span className='before:content-[""] before:absolute before:bg-red-600 before:w-3 before:h-3 before:rounded-full before:border-2 before:border-white before:top-2.5 before:right-3'></span>
            <Image src={NotificationIcon} alt={"notification icon"} width={24} height={24} />
        </div>
        <div className=''>
            <Image src={ProfilePic} alt='user-photo' width={32} height={32} className='inline rounded-full object-contain' />
            <span className='uppercase ml-2 font-medium'>Hi, Helen adams</span>
        </div>
    </div>
  )
}

export default Header