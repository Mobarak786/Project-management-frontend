import React from 'react'
import Home from '../components/Home'

const Profile: React.FC = () => {
  return (
    <Home>
      <div className="w-full p-5">
        <h1 className="text-xl md:text-2xl font-bold">Profile</h1>

        <main className="w-[100%] h-screen mt-5">
          {/* Add your profile content here */}
        </main>
      </div>
    </Home>
  )
}

export default Profile
