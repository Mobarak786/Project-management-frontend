import React from 'react'
import Header from './Header'
import Sidebar from './sidebar'

const Home: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
    </div>
  )
}

export default Home
