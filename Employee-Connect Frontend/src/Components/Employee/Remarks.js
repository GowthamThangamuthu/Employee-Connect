import React from 'react'
import { useState } from 'react'
import { updateRemarks } from '../../Service/MeetService';

function Remarks({x,id}) {
  const [rem,setRem] = useState("");
  const handleUpdate=()=>{
    const meet = {
      empRemarks:rem
    }
    console.log(JSON.stringify(meet));
    updateRemarks(id,meet).then((res)=>{
        console.log(res.data);
        setRem("");
        x(false);
    })
  }
  return (
    <div className='contentContainer'>
        <div className="overlay"></div>
          <div className="popupview"  style={{width:"600px"}}>

          <div className='tag'><h2>UPDATE REMARKS</h2></div>

          <textarea value={rem} onChange={(e)=>setRem(e.target.value)} style={{marginTop:"30px"}} rows={10} cols={50} placeholder='Add Remarks'/>
          <div>
          <button className='btn_close' style={{backgroundColor:"#636aea"}}onClick={()=>handleUpdate()} >UPDATE</button>
          <button className='btn_close' style={{marginLeft:"35px", backgroundColor:"#dc3545"}} onClick={()=>x(false)} >CANCEL</button>
          </div>
        </div>
    </div>
  )
}

export default Remarks