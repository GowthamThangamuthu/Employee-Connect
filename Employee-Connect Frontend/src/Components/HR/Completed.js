import React from 'react';
import { useState } from 'react';
import { updateMeet } from '../../Service/MeetService';
import { useNavigate } from 'react-router-dom';

function Completed(props) {
    const history =useNavigate()
    const x = window.location.pathname;
    const arr = x.split('/');
    const meet_id = arr[arr.length-1];
    const [rag,setRag] = useState(-1);
    const [notes,setNotes] = useState("");
    const [ragRem, setRagRem] = useState("");

    const green = ()=>{
        setRagRem("");
        setRag(3);
        
    }

    const update = (e)=>{
        e.preventDefault();
        if(rag===-1)return;
        if(rag===1||rag===2){
            if(ragRem==="")return;
        }
        if(notes==="")return;
        const meet = {
            ragStatus:rag,
            ragRemarks:ragRem,
            hrNotes:notes
        }
        updateMeet(meet_id,meet).then(()=>{
            history('/');
        })

        
    }

    const get=()=>{
        if(rag===1){
            return <button style={{backgroundColor:"#dc3545", width:"60px", height:"20px"}}></button>
        }else if(rag===2){
            return <button style={{backgroundColor:"#ffbf00", width:"60px", height:"20px"}}></button>
        }else if(rag===3){
            return <button style={{backgroundColor:"#28a745", width:"60px", height:"20px"}}></button>
        }
    }
    return (
        
        <div className='contentContainer'>
            <div className='completed'>
                <div style={{marginTop:"0px"}}className='heading'>
                <h1 style={{marginTop:"0px"}}>MEET UPDATE</h1>
                </div>
                <div>SELECTED: {get()}</div>
                <div><p>NOTES</p></div>
                <textarea value={notes} onChange={(e)=>setNotes(e.target.value)} rows={7} cols={70}/>
                <div className='rag' > <p style={{marginTop:"0px"}}> RAG STATUS</p>
                
                <button className='btn_red' onClick={()=>setRag(1)}></button>
                <button className='btn_yellow' onClick={()=>setRag(2)}></button>
                <button className='btn_green' onClick={()=>green()}></button>
                </div>
                
                {
                <>
                <div><p>RAG REMARKS</p></div>
                <div>
                <textarea value={ragRem} onChange={(e)=>setRagRem(e.target.value)} rows={7} cols={70}/>
                </div></>}
                <div>
                <button className='btn_update' onClick={update}>Update</button>
                </div>
            </div>
        </div>
    );
}

export default Completed
;