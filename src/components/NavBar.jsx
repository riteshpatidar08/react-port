import React from 'react'
import { Link } from 'react-scroll'
function NavBar() {
  return (
    <div>
     <header className='h-20 bg-secondary text-white flex justify-between items-center'>
        <h1 className="ml-5 text-4xl font-dynalight text-primary">Ritesh</h1>
        <nav className='flex space-x-4 text-lg font-semibold'>
  <Link to="home" duration={500}>Home</Link>
  <Link to="education" duration={500}>Education</Link>
  <Link to="skills" duration={500}>Skills</Link>
  <Link to="projects" duration={500}>Projects</Link>

        </nav>
        <Link className='mr-5 px-6 py-2 bg-primary text-white rounded-md hover:bg-white hover:text-black hover:border-2 transition-all ease-in-out duration-300 hover:border-primary font-semibold cursor-pointer'>Contact Us</Link>
     </header>
    </div>
  )
}

export default NavBar
