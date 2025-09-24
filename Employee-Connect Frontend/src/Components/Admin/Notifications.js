import React, { createContext } from 'react'
import { FaUser } from 'react-icons/fa'
import NotificationPop from './NotificationPop'
import { useState } from 'react';
import { getNotification } from '../../Service/AdminService';
function Notification() {
  const [emp, setEmp] = useState(-1);
  const [role,setRole] = useState(-1);
  const [comment,setComment] = useState(-1);
  const [notifications, setNotifications] = useState([]);
  const [roleId,setRoleId] = useState(-1);
  const [id,setId] = useState(-1);
  useState(()=>{
    getNotification().then((res)=>{
        setNotifications(res.data);
    })
  })
  const upEmp=(emp,role,comment,roleId,id)=>{
    setComment(comment);
    setEmp(emp);
    setRole(role);
    setRoleId(roleId);
    setId(id);
  }
  return (
    <div className='contentContainer'>
      <h2 style={{margin:"20px",textAlign:"center"}}>NOTIFICATIONS</h2>
        {notifications.map((v)=>{
            return(<div className='reqNotification' onClick={()=>upEmp(v.employee,v.role.role,v.comments,v.role.id,v.id)}>
                <h4>{v.employee.name} had requested to grant him/her as {v.role.role}</h4>
                <p>Click for more info</p>
                
            </div>)
        })}


        {emp!==-1 && <NotificationPop id={id} setEmp={setEmp} emp={emp} role={role} setRole={setRole} comment={comment} setComment={setComment} roleId={roleId} setNotifications={setNotifications}/>}
    </div>
  )
}

export default Notification