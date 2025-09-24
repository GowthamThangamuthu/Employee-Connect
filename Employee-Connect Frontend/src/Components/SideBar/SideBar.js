import React from 'react';
import EmployeeSideBar from './EmployeeSideBar';
import HRSideBar from './HRSideBar';
import { useContext } from 'react';
import Context from '../Authentication';
import ManagerSideBar from './ManagerSideBar';
import BUSideBar from './BUSideBar';

function SideBar(props) {
    const reader = useContext(Context);
    const {role} = reader;
    return (
        <div>
            {(role==='Admin'||role==='Employee')&&<EmployeeSideBar/> }
            {(role==='HR')&&<HRSideBar/>}
            {(role==='Manager')&&<ManagerSideBar/>}
            {(role==='BU Head')&&<BUSideBar/>}
        </div>
    );
}

export default SideBar;