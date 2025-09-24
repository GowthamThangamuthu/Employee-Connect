


import React from 'react';
import { Link } from 'react-router-dom';
import {GiOrganigram} from 'react-icons/gi';
const BUSideBar = () => {
    const blocks = [
        {name:"Reportees Info", path:`/`,icon:< GiOrganigram style={{marginRight:"5px"}}/>}
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

export default BUSideBar;