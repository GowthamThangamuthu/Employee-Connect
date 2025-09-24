import React, { useContext, useEffect, useState } from 'react';
import Login from './Login';
import Home from './Home';
import Context from './Authentication';
import NavBar from './NavBar/NavBar';
import SideBar from './SideBar/SideBar';
import { Outlet } from 'react-router-dom';
import RequestAccess from './ReqAcess/RequestAccess';

function Layout(props) {
    
    const reader = useContext(Context);
    const {auth,role} = reader;
    
    return (
        <div className='homeContainer'>
            {!auth?<Login/>:
            
            <>

            <NavBar/>
            
            
            {(role!==-1 && role!==null)&&
            <div className='bodyContainer'>
                <>
                <SideBar/>
                <Outlet/>
                </>
            </div>}
            
            
            </>
            }
        </div>
    );
}

export default Layout;