import React, { useContext } from 'react';
import {FaUser} from 'react-icons/fa';
import Context from './Authentication';
import { useNavigate } from 'react-router-dom';
function Profile({x}) {
    const reader = useContext(Context);
    const {name,mail,logout,role} = reader;
    const history = useNavigate()
    const a = ()=>{
        logout();
        history('/')
    }
    return (
        <div className='profile' >
        {/* <h3>Profile</h3> */}
            <FaUser />
            <p>Name: {name}</p>
            <p>Email Id : {mail}</p>
            <p>Role: {role}</p>
            <button onClick={()=>a()}>Logout</button>
        </div>
    );
}

export default Profile;