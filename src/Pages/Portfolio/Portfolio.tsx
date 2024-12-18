import React from 'react'
import Home from '../../components/Home'
import Project from '../../components/Project'
import Header from './Components/Header'

const Portfolio: React.FC = () => {
  return (
    <Home>
      <div className=" bg-white dark:bg-gray-800 shadow-lg">
        <Header />
        {/* ADDING A SCROLLBAR TO VIEW MULTILPLE PROJECT BY SCROLL  */}
        <main className="w-[100%] px-5 mt-3 h-screen overflow-y-auto">
          <Project />
        </main>
      </div>
    </Home>
  )
}

export default Portfolio
