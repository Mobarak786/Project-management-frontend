import React from 'react'
import home_mobile from '../assets/Icons/home_mobile.png'
import portfolio_mobile from '../assets/Icons/portfolio_mobile.png'
import inputs_mobile from '../assets/Icons/inputs_mobile.png'
import profile_mobile from '../assets/Icons/profile_mobile.png'
import { NavLink } from 'react-router-dom'

const navData = [
  { label: 'Home', link: '/dashboard', src: home_mobile },
  { label: 'Portfolio', link: '/', src: portfolio_mobile },
  { label: 'Inputs', link: '/inputs', src: inputs_mobile },
  { label: 'Profile', link: '/profile', src: profile_mobile },
]
const MobileDeviceNav: React.FC = () => {
  return (
    <div className="absolute flex justify-between items-center bottom-0 w-full h-[70px] rounded-t-[30px] shadow-lg bg-white dark:bg-gray-800">
      {navData.map((item, index) => (
        <div
          key={index}
          className="w-[25%] h-full flex justify-center items-center"
        >
          <NavLink
            to={item.link}
            className={({ isActive }: { isActive: boolean }) =>
              `flex flex-col gap-2 items-center justify-center p-2 ${isActive ? 'border-t-[3px] border-[#DF5532]' : ''}`
            }
          >
            <img src={item.src} alt={item.label} className="size-6" />
            <span>{item.label}</span>
          </NavLink>
        </div>
      ))}
    </div>
  )
}

export default MobileDeviceNav
