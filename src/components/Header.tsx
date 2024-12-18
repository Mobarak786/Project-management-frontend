import React from 'react'
import ThemeToggle from './ThemeToggle'
import cart from '../assets/Icons/cart.png'
import arrow from '../assets/Icons/arrow.png'
import notification from '../assets/Icons/notification.svg'
import profileimage from '../assets/Images/profileimage.png'

const Header: React.FC = () => {
  return (
    <div className="w-[100%] h-[100px] px-4 flex items-center justify-end shadow-md ">
      <div className=" w-[400px] h-[50px] flex items-center justify-center gap-4">
        <div className=" w-max flex items-center justify-center gap-4">
          <ThemeToggle />
          <img src={cart} alt="Cart" className="size-6" />
          <img src={notification} alt="Notification" className="size-6" />
        </div>

        <div>
          <div className="grid grid-cols-2 w-[120px] ml-5">
            <div className="col-span-1 ">
              <img src={profileimage} alt="profile" width={50} height={50} />
            </div>
            <div className=" grid grid-rows-2">
              <div className=" flex items-center gap-2">
                <h2 className="text-xl font-semibold">Mobarak</h2>
                <img src={arrow} alt="arrow" />
              </div>
              <div className="row-span-1 text-[#848484] text-xl">Manager</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
