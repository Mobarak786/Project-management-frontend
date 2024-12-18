import React from 'react'
import Home from '../components/Home'

const Dashboard: React.FC = () => {
  return (
    <Home>
      <div className="w-full p-5">
        <h1 className="text-xl md:text-2xl font-bold">Dashboard</h1>
        
        <main className="w-[100%] h-screen mt-5">
          {/* Add your dashboard content here */}
        </main>
      </div>
    </Home>
  )
}

export default Dashboard
