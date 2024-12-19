import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import filter from '../../../assets/Icons/filter.png'
import search from '../../../assets/Icons/search.png'
import { useDispatch } from 'react-redux'
import { setSearchText } from '../../../redux/slices/projectsSlice'

const tabItems = [
  { label: 'Projects', link: '/' },
  { label: 'Saved', link: '/portfolio/saved' },
  { label: 'Shared', link: '/portfolio/shared' },
  { label: 'Achivements', link: '/portfolio/achivements' },
]
const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase())
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setSearchText(searchTerm))
  }, [searchTerm, dispatch])

  return (
    <div className="w-full px-6 py-3 bg-white dark:bg-gray-800 shadow-lg">
      <h1 className="text-xl  md:text-2xl font-bold">Portfolio</h1>
      <header className="w-full flex justify-between py-5">
        <div className="md:w-[500px] w-full flex items-center border-b dark:border-gray-600">
          {tabItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              className={({ isActive }: { isActive: boolean }) =>
                `text-[15px] font-[16px] 'font-bold' py-2  mr-5  ${isActive ? 'border-b-[4px] border-[#DF5532] font-semibold' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex gap-2 items-center cursor-pointer">
          <img
            src={filter}
            className="size-6 dark:brightness-200 hidden md:block"
            alt="filter"
          />
          <span className="font-[22px] hidden md:block">Filter</span>

          <div className="flex items-center gap-2 border dark:border-gray-600 rounded-lg p-2">
            <input
              value={searchTerm}
              onChange={handleSearch}
              type="text"
              placeholder="Search"
            />
            <img src={search} className="size-6" alt="searchicon" />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
