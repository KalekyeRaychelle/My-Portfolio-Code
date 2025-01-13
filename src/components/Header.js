import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Header.css'
const Header= ()=>{
return(
 <div className="header">
    <div className="leftSide">
        <h2>RAYCHELLE'S PORTFOLIO</h2>
    </div>
    <div className="rightSide">
        <ul className='sections'>
            <li><Link to=''>About</Link></li>
            <li><Link to=''>Projects</Link></li>
            <li><Link to=''>Contact</Link></li>
        </ul>
        
    </div>
    <div className='myResume'>
        <button>MY RESUME</button>
    </div>
 </div>
);
}
export default Header;
