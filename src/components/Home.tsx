import React from 'react'
import Header from './Header'
import Sidebar from './sidebar'
import MobileDeviceNav from './MobileDeviceNav'
import useDeviceWidth from '../Hooks/useDeviceWidth'
import filter_mobile from '../assets/Icons/filter_mobile.png'

const Home: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const width = useDeviceWidth()

  return (
    // hide scrollbar in main element so that sidebar can be scrollable
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar />

      <main className="lg:w-[calc(100%-236px)] w-full">
        <Header />
        <div className="p-0 bg-[#d8d2d2] sm:bg-white sm:p-5 dark:bg-gray-700">
          {children}
        </div>
      </main>

      {width < 768 && <MobileDeviceNav />}
      {width < 786 && (
        <div className=" absolute z-10 shadow-xl bottom-[100px] left-[50%] translate-x-[-50%] w-[170px] h-[70px] rounded-3xl flex items-center justify-center gap-5 bg-[#DF5532]">
          <img src={filter_mobile} alt="filterlogo" className="size-7" />
          <span className="font-[500] text-2xl text-white">Filter</span>
        </div>
      )}
    </div>
  )
}

export default Home
