import Image from 'next/image'
import { Logo, HomeIcon, ProfileIcon, AccOfficerIcon, StatementIcon, BenefitIcon, CertificateIcon, MailIcon, ArrowsIcon, FaqIcon, SupportIcon, SettingsIcon, CalculatorIcon } from '../public/assets/images'

const Sidebar = () => {
  return (
    <nav className='bg-white w-[260px] h-screen'>
        <div>
            <div className='pb-6 pt-2 pl-10'>
                <Image src={Logo} alt='logo' width={128} height={60} className='object-contain'/>
            </div>
            <div className='bg-[#065EAB] pl-7 pr-5 pt-10 overflow-hidden h-[90vh]'>
                <ul className='list-none'>
                    <div>
                        <li className='sidebar-list-item'>
                            <span><Image src={HomeIcon} alt='home-icon' /></span>
                            <span className='text-white text-[1rem]'>Dashboard</span>
                        </li>
                        <li className='sidebar-list-item'>
                            <span><Image src={ProfileIcon} alt='home-icon' /></span>
                            <span className='text-white text-[1rem]'>Profile</span>
                        </li>
                        <li className='sidebar-list-item'>
                            <span><Image src={AccOfficerIcon} alt='home-icon' /></span>
                            <span className='text-white text-[1rem]'>Account Officer</span>
                        </li>
                        <li className='sidebar-list-item'>
                            <span><Image src={StatementIcon} alt='home-icon' /></span>
                            <span className='text-white text-[1rem]'>Statement</span>
                        </li>
                        <li className='sidebar-list-item'>
                            <span><Image src={BenefitIcon} alt='home-icon' /></span>
                            <span className='text-white text-[1rem]'>Benefits</span>
                        </li>
                        <li className='sidebar-list-item'>
                            <span><Image src={CertificateIcon} alt='home-icon' /></span>
                            <span className='text-white text-[1rem]'>Certificate Request</span>
                        </li>
                        <li className='sidebar-list-item'>
                            <span><Image src={MailIcon} alt='home-icon' /></span>
                            <span className='text-white text-[1rem]'>Embassey Letter</span>
                        </li>
                        <li className='sidebar-list-item'>
                            <span><Image src={ArrowsIcon} alt='home-icon' /></span>
                            <span className='text-white text-[1rem]'>Interfund</span>
                        </li>
                        <li className='sidebar-list-item'>
                            <span><Image src={FaqIcon} alt='home-icon' /></span>
                            <span className='text-white text-[1rem]'>FAQ</span>
                        </li>
                        <li className='sidebar-list-item'>
                            <span><Image src={SupportIcon} alt='home-icon' /></span>
                            <span className='text-white text-[1rem]'>Support</span>
                        </li>
                        <li className='sidebar-list-item'>
                            <span><Image src={SettingsIcon} alt='home-icon' /></span>
                            <span className='text-white text-[1rem]'>Settings</span>
                        </li>
                        <li className='sidebar-list-item'>
                            <span><Image src={CalculatorIcon} alt='home-icon' /></span>
                            <span className='text-white text-[1rem]'>Lifestyle Calculator</span>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
      
    </nav>
  )
}

export default Sidebar