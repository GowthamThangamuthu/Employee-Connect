import React, { useEffect } from 'react';
import { useState } from 'react';
import { getEmpByRole, updateEmp } from '../../Service/EmployeeService';
import { deleteNot, getNotification } from '../../Service/AdminService';
import { getAllBu } from '../../Service/RoleService';

const NotificationPop = ({id,emp,setEmp,role,setRole,comment,setComment,roleId,setNotifications}) =>{
    const [managers, setManagers] = useState([]);
    const [Bus, setBus] = useState([]);
    const[manager,setManager] = useState(-1);
    const[Bu,setBu] = useState(-1);


    useEffect(()=>{
        getEmpByRole("Manager").then((res)=>{
            setManagers(res.data);
        })
        getAllBu().then((res)=>{
            setBus(res.data);
        })
    },[])

    const approve = ()=>{
        console.log(Bu);
        const employeee = {
            role:roleId
        }
        if(Bu!=-1){
            employeee['bu']=Bu;
        }
        if(manager!=-1){
            employeee['manager']=manager;
        }
        
        updateEmp(emp.id,employeee);
        setEmp(-1);
        setRole(-1);
        setComment(-1);
        reject();
    }

    const reject = ()=>{
        deleteNot(id).then(()=>{
            getNotification().then((res)=>{
                setNotifications(res.data);
            })
        });
        setEmp(-1);
        setRole(-1);
        console.log("Rejected");
    }

  return (
    <div className='contentContainer'>
             <div className="overlay"></div>
           <div className="popup">

          <div className='tag'><h2>GRANT REQUEST</h2></div>
          <p style={{marginTop:"10px", fontWeight:"bold"}}>Employee Id: {emp.id}</p>
          <p style={{marginTop:"10px", fontWeight:"bold"}}>Employee Name: {emp.name}</p>
          <p style={{marginTop:"10px", fontWeight:"bold"}}>Role Requested: {role}</p>
          <p style={{marginTop:"10px", fontWeight:"bold"}}>Description: {comment}</p>
          <div><select value={manager} 
            onChange={(e)=>setManager(e.target.value)} required> 
                <option  value="" select hidden>--SELECT MANAGER--</option>
                {managers.map((x)=>{
                    return <option value={x.id}>{x.name}</option>
                })}
            </select></div>

            <div style={{marginTop:"10px"}}><select value={Bu}
            onChange={(e)=>setBu(e.target.value)} required> 
                <option value="" select hidden>--SELECT BU--</option>
                {Bus.map((x)=>{
                    return <option value={x.id}>{x.name}</option>
                })}
            </select></div>
          <div>
          <button className='btn_approve' style={{marginRight:"10px",marginTop:"30px"}}onClick={()=>approve()}>Approve</button>
          <button className='btn_reject' style={{marginRight:"10px"}} onClick={()=>reject()}>Reject</button>
          </div>
        </div>
        </div>
  )
}

export default NotificationPop;