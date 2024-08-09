import React from 'react'
import title from "../assets/title.png";
import user from "../assets/user.png";
 
function Navbar() {
  return (
    <div className='bottom-bar'>
    <div className="line">
    <div className='navbar'>
      <div className='title-image'>
            <img src= {title} alt="title"  className='title'/>
      </div>
      <div >
        <img src={user} alt="user-image" className="user-image" />
      </div>
      <div >
        <p className="user-name">
            Tushar saini
        </p>

      </div>
    
    </div>
    </div>
    
    </div>
    
    
   
  )
}

export default Navbar;
