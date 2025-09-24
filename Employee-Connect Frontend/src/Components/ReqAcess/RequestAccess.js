import React, { useContext, useState } from 'react'
import { getAllRoles } from '../../Service/RoleService';
import Context from '../Authentication';
import { postNotification } from '../../Service/AdminService';
import logo from "./logoforwhitegb.png"
import access from "./access.png"
import { useNavigate } from 'react-router-dom';
function RequestAccess() {
    const reader = useContext(Context);
    const {logout} = reader;
    const [comments, setComments] = useState("")
    const [roles,setRoles] = useState([]);
    const [role,setRole] = useState(-1);
    const history = useNavigate();
    useState(()=>{
        getAllRoles().then((res)=>{
            console.log(res.data);
            setRoles(res.data);
        })
    },[])
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(role===-1)return;
        const req = {
            employee:window.sessionStorage.getItem('mail'),
            role:role,
            comments:comments
        }
        postNotification(req);
        logout();
        setRole(-1);
        setComments("");
        history('/');
    }
  return ( 
       <div>
        <div className='requestContainer' id='reqaccess'>
        <img src={logo} width="500px" height="100px"></img>
        <img className='accessimg' style={{float:"right"}} src={access} width="450px" height="300px"></img>
        <h1>You need access</h1>
        <p>Ask for access</p>
        <select value={role}
        onChange={(e)=>setRole(e.target.value)} required> 
            <option value="" select hidden>--SELECT ROLE--</option>
            {roles.map((x)=>{
                return <option value={x.id}>{x.role}</option>
            })}
        </select>

        <div>
            <textarea
            placeholder='Description'
            rows={7} 
            cols={102}
            type='text'
            value={comments}
            style={{marginLeft:"0px", marginTop:"30px"}}
            onChange={(e)=>setComments(e.target.value)}
            required/>
        </div>

        <div>
            <button onClick={handleSubmit}>Request access</button>
        </div>
        </div>
        </div>
    
  )
}

export default RequestAccess