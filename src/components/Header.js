import React from 'react'

import '../styles/Header.css';
const Header = () => {
  return (
    <div className='header'>
       <div className="leftSide">
            <h2>RAYCHELLE'S PORTFOLIO</h2>
        </div>
        <div className="rightSide">
            <ul className='sections'>
                <li><a href='#About'>About</a></li>
                <li><a href='#Projects'>Projects</a></li>
                <li><a href='#Contact' >Contact</a></li>
            </ul>
            
        </div>
        
    </div>
  )
}

export default Header
