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

      {/* show mobile device navigation bellow the screen on small devices */}
      {width < 768 && <MobileDeviceNav />}

      {/* show filter button on small devices*/}
      {width < 786 && (
        <div className="z-10 absolute bottom-[100px] left-[50%] translate-x-[-50%] w-[150px] h-[50px] rounded-3xl flex items-center justify-center gap-5 bg-[#c75c41] shadow-lg shadow-[#c75c41]/50">
          <img src={filter_mobile} alt="filterlogo" className="size-7" />
          <span className="font-[500] text-xl text-white">Filter</span>
        </div>
      )}
    </div>
  )
}

export default Home
