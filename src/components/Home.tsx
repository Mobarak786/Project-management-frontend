import React from 'react'
import Header from './Header'
import Sidebar from './sidebar'

const Home: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    // hide scrollbar in main element so that sidebar can be scrollable
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar />

      <main className="w-[calc(100%-236px)]">
        <Header />
        <div className="p-5 bg-[#d8d2d2] dark:bg-gray-700">{children}</div>
      </main>
    </div>
  )
}

export default Home
