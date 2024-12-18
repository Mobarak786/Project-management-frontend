import React from 'react'
import Home from '../../../components/Home'
import Header from './Header'

const Achievements: React.FC = () => {
  return (
    <Home>
      <div className=" bg-white dark:bg-gray-800 shadow-lg">
        <Header />
        {/* ADDING A SCROLLBAR TO VIEW MULTILPLE PROJECT BY SCROLL  */}
        <main className="w-[100%] px-5 h-screen overflow-y-auto">
          <h1>Achievements</h1>
        </main>
      </div>
    </Home>
  )
}

export default Achievements
