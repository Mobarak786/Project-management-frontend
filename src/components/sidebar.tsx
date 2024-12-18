import React from 'react'
import dashboard from '../assets/Icons/dashboard.png'
import portfolio from '../assets/Icons/portfolio.png'
import inputs from '../assets/Icons/inputs.png'
import profile from '../assets/Icons/profile.png'
import logo from '../assets/Icons/logo.png'
import { NavLink } from 'react-router-dom'

const sidebarData = [
  { src: dashboard, label: 'Dashboard', link: '/dashboard' },
  { src: portfolio, label: 'Portfolio', link: '/' },
  { src: inputs, label: 'Inputs', link: '/inputs' },
  { src: profile, label: 'Profile', link: '/profile' },
]

const Sidebar: React.FC = () => {
  return (
    <aside className="w-[236px] h-screen bg-[#DF5532] dark:bg-gray-800 text-white">
      <div className="flex items-center pl-6 gap-2 mt-5">
        <img src={logo} alt="logo" className="size-6" />
        <h1 className="text-lg font-semibold">LOGO</h1>
      </div>
      <nav className="font-[15px] text-[15px] mt-[80px]">
        <ul>
          {sidebarData.map((item: any, index: number) => (
            <NavLink
              key={index}
              to={item.link}
              className={({ isActive }: { isActive: boolean }) =>
                `w-full h-[40px] rounded-xl flex items-center pl-6 gap-5 mb-4 ${isActive ? 'bg-[linear-gradient(91.41deg,_#FFAD98_0%,_#DF5532_100%)]' : ''}`
              }
            >
              <img src={item.src} alt={item.label} className="size-6" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
