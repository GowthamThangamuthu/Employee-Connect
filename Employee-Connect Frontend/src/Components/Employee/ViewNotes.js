import React from 'react'
import { useEffect } from 'react'
import { findMeetById } from '../../Service/MeetService'
import { useState } from 'react'

function ViewNotes({x,id}) {
  const [note,setNote] = useState("");
  useEffect(()=>{
    findMeetById(id).then((res)=>{
        setNote(res.data.hrNotes);
    })
  })
  return (
    <div className='contentContainer'>
        <div className="overlay"></div>
  <div className="popupview" style={{width:"600px"}}>

 <div className='tag'><h2>Notes</h2></div>

 <p style={{marginTop:"30px"}}>{note}</p>
 
 <button className='btn_close' style={{backgroundColor:"#dc3545",marginTop:"30px"}} onClick={()=>x(false)} >Close</button>
 </div>
    </div>
  )
}

export default ViewNotes