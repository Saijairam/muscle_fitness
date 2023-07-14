import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar navbar-container'>
       <a href="/" className='navbar-brand logo'>MF</a>
       <div className='right-box'>
           <ul className='list'>
             <li><a href='/'>Home</a></li>
             <li><a href='/about'>About</a></li>
             <li className='plan-btn'><a href='/plan'>Plan</a></li>
           </ul>
       </div>
    </nav>
  )
}

export default Navbar