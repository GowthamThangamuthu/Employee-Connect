import React, { useContext } from 'react';
import {FaUser} from 'react-icons/fa';
import {IoMdNotifications} from 'react-icons/io';
import logo3 from "../Images/accoliteimage-removebg (1).png";
import Context from '../Authentication';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Profile from '../Profile';
function NavBar(props) {
  const [yes,setYes] = useState(false);
  const history = useNavigate();
    const handleNotification=()=>{
        history('/notification')
    }
    const handleProfile = ()=>{
      setYes(!yes);
    }
      return (
        <nav>
           <div className='title'>
            
           <img src={logo3} alt="My Website Logo" width="250px" height="70px"/>
           </div>

           <div className='navPN' >
          
           <div className='navNotification'>
                {window.sessionStorage.role==="Admin" && <IoMdNotifications onClick={handleNotification} className='icons' color='white' /> }
           
                {/* {<FaUser  className='icon' color='white'/>} */}
                {/* {yes && <Profile/>} */}
                {<FaUser onClick={handleProfile} className='icon' color='white'/>}
                {yes && <Profile x={setYes}/>}
           </div>

           </div>
        </nav>
      )
}

export default NavBar;
