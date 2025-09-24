


import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../Authentication';
import { SiGooglemeet} from 'react-icons/si';
import { AiOutlineSchedule } from 'react-icons/ai';
const EmployeeSideBar = () => {
    const blocks = [
        {name:"Meeting Scheduled", path:`/`,icon:<SiGooglemeet style={{marginRight:"5px"}}/>},
        {name:"Closed Meet", path:`/closedmeet`,icon:< AiOutlineSchedule style={{marginRight:"5px"}}/>}
    ]
    //
    return (
        <div className='sidebarContainer'>
            {blocks.map((v)=>{
                return(
                    <Link style={{marginTop:"5px"}} to={v.path}><button >{v.icon}     {v.name}</button></Link>
                )
            })}
            
        </div>
    );
}

export default EmployeeSideBar;