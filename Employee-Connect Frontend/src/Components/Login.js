import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useContext, useEffect} from 'react';
import Context from './Authentication';
import acc from "./Images/accoliteimage-removebg (1).png"
import logo from "./Images/logo5-removebg.png";

const Login=(props)=> {
    const reader = useContext(Context);
    const {auth,name,mail,setAuth,setMail,setName,handleLogin} = reader;

    

    useEffect(()=>{
        if(window.sessionStorage.getItem('name')!==null){
            console.log(window.sessionStorage.getItem('name'))
            setName(window.sessionStorage.getItem('name'));
            setMail(window.sessionStorage.getItem('mail'));
            setAuth(true);
        }
    },[name,mail,auth])
    
    const login = useGoogleLogin({
        
        onSuccess: async response => {
            await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                headers: {
                    "Authorization": `Bearer ${response.access_token}`
                }
            }).then((res)=>{
                window.sessionStorage.setItem('mail',res.data.email);
                window.sessionStorage.setItem('name',res.data.name);
                setName(res.data.name);
                setMail(res.data.mail);
                setAuth(true);
            })
            handleLogin();
                
        }
    });

    
   
    return (
        <div className='loginContainer'>
            <img src={acc} width="300px" height="80px"/>
           <div><img className="logo" src={logo} alt="My Website Logo" width="900px" height="200px"/></div> 
           <div className='logincard'>
            <h1>Login</h1>
            <div className='loginButton'>            
                <button onClick={login}>
                    Continue with Google
                </button>
            </div>
            </div>
      
        </div>
    );
}

export default Login;

