import React from 'react'
import '../styles/Header.css'
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
        <div className="leftSide">
            <h2>RAYCHELLE'S PORTFOLIO</h2>
        </div>
        <div className="rightSide">
            <ul className='sections'>
                <li><Link to='About'>About</Link></li>
                <li><Link to='Projects'>Projects</Link></li>
                <li><Link to='Contact' >Contact</Link></li>
            </ul>
            
        </div>
        
     </div>
    
      )
    }
    

export default Header;
