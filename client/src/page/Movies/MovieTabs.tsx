import { NavLink } from 'react-router-dom'

const MovieTabs = () => {
  return (
     <div>
      <div className='my-8 md:my-14'>
        <div className="flex space-x-6">
          <h1 className='text-2xl font-semibold border-l-[4px] border-l-[#8B008B] pl-3 hidden md:flex'>PHIM</h1>
          <ul className='md:gap-x-8 gap-x-6 flex flex-wrap justify-start items-center'> 
            <li>
              <NavLink
                to='/now-movies'
                className={({ isActive }) => 
                  `font-semibold px-2 py-2 rounded-none text-sm md:text-base !shadow-none cursor-pointer 
                   ${isActive ? 'text-[#8B008B] border-b-2 border-b-[#8B008B]' : 'text-gray-500 hover:text-[#8B008B]'}`
                }
              >
                Đang Chiếu
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/coming-movies'
                className={({ isActive }) => 
                  `font-semibold px-2 py-2 rounded-none text-sm md:text-base !shadow-none cursor-pointer 
                   ${isActive ? 'text-[#8B008B] border-b-2 border-b-[#8B008B]' : 'text-gray-500 hover:text-[#8B008B]'}`
                }
              >
                Sắp Chiếu
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MovieTabs

