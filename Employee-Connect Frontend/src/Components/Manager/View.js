import React, { useEffect, useState } from 'react'
import { findMeetById } from '../../Service/MeetService';

function View({x,meet_id}) {
  const [emp,setEmp] = useState("");
  const [hr,setHr] = useState("");
  
  const [hrNotes,setHrNotes] = useState("");
  const [empRem,setEmpRem] = useState("");
  const [rag,setRag] = useState(-1);
  const [ragRem,setRagRem] = useState("");


  useEffect(()=>{
    findMeetById(meet_id).then((res)=>{
      setEmp(res.data.employee.name);
      setHr(res.data.hr.name);
      setHrNotes(res.data.hrNotes);
      setEmpRem(res.data.empRemarks);
      setRag(res.data.ragStatus);
      setRagRem(res.data.ragRemarks);
    })
  })

  const getRag = (color)=>{
    if(color===1){
        return <button className='reportview_btn' style={{width:"100px",fontWeight:"normal", fontSize:"13px", backgroundColor:"#dc3545"}}></button>
    }else if(color===2){
        return <button className='reportview_btn' style={{width:"100px",fontWeight:"normal", fontSize:"13px", backgroundColor:"#ffbf00"}}></button>
    }else if(color===3){
        return <button className='reportview_btn' style={{width:"100px",fontWeight:"normal", fontSize:"13px", backgroundColor:"#28a745"}}></button>
    }
}
  return (

    <div className='contentContainer' style={{}}>
      <div className="overlay"></div>
      <div className="popupview">
            <div className='quarterContainerView'>
                <div className='heading'>
                    <h1>MEET DETAILS</h1>
                    </div>
                    
                    <div className='tableContainer'>
                            <table className='center'>
                            <tbody>
                              <tr>
                                <td style={{fontWeight:"bold"}}>Employee Name</td>
                                <td style={{textAlign: "justify"}}>{emp}</td>
                              </tr>
                              <tr>
                                <td style={{fontWeight:"bold"}}>HR Name</td>
                                <td style={{textAlign: "justify"}}>{hr}</td>
                              </tr>
                              <tr>
                                <td style={{fontWeight:"bold"}}>RAG Status</td>
                                <td style={{textAlign: "justify"}}>{getRag(rag)}</td>
                              </tr>
                              {ragRem!==""&&<tr>
                                <td style={{fontWeight:"bold"}}>RAG Remarks</td>
                                <td style={{textAlign: "justify"}}>{ragRem}</td>
                              </tr>}
                              {hrNotes!==""&&<tr>
                                <td style={{fontWeight:"bold"}}>HR Notes</td>
                                <td style={{textAlign: "justify"}}>{hrNotes}</td>
                              </tr>}
                              {empRem!==""&&<tr>
                                <td style={{fontWeight:"bold"}}>Employee Remarks</td>
                                <td style={{textAlign: "justify"}}>{empRem}</td>
                              </tr>}
                                    
                            </tbody>
                        </table>
                        <button className='reportview_btn' onClick={()=>x(false)} style={{width:"100px",fontWeight:"normal", fontSize:"20px", backgroundColor:"#636aea", alignItems:"center",marginTop:"20px"}}>Close</button>
                    </div>
                    </div>
                    
            </div>
        </div>

  )
}

export default View