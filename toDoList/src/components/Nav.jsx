import React from 'react'

const Nav = () => {
  return (
    <nav className='flex flex-wrap px-4 justify-between bg-slate-700 text-white py-2 w-full	 '>
        <div className="logo">
            <span className="font-bold  text-xl sm:ml-4 sm:mx-8 mx-2">SumTask</span>
        </div>
        <ul className="flex sm:gap-8 sm:mt-0 gap-3 mx-4">
            <li className=' hover:font-bold transition-all '>Home</li>
            <li className=' hover:font-bold transition-all '>MyTask</li>
            <li className=' hover:font-bold transition-all '>Done</li>
        </ul>
    </nav>
  )
}

export default Nav
