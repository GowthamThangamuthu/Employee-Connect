import React, { useContext, useEffect, useState } from 'react';
import { getHrMeetByStatus } from '../../Service/MeetService';
import Context from '../Authentication';
import View from '../Manager/View';

function ClosedMeetHR(props) {
    const [popUp,setPopUp]=useState(false);
    const [meet_id,setMeetId] = useState(-1);
    const handleView=(id)=>{
        setMeetId(id);
        setPopUp(true);
    }

    const[meet,setMeet] = useState([]);
    useEffect(()=>{
        getHrMeetByStatus(mail,1).then((res)=>{
            setMeet(res.data);
        })
    },[])
    const reader = useContext(Context);
    const {mail} = reader;
    return (
        <div className='contentContainer'>
            <div className='tableContainer'>
                <table className='center'>
                  <caption>CLOSED MEETINGS</caption>
                <thead>
                    <tr>
                        
                        <th>EMPLOYEE</th>
                        <th>DATE</th>
                        <th>TIME</th>
                        <th>ACTIONS</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {meet.map((v)=>{
                        return(
                            <tr>
                                <td>{v.employee.name}</td>
                                <td>{v.date}</td>
                                <td>{v.time}</td>
                                <td><button className='reportview_btn' onClick={()=>handleView(v.id)} >VIEW</button></td>
                            </tr>
                        )
                    })}
                        
                </tbody>
              </table>
              {popUp&& <View x={setPopUp} meet_id={meet_id}/>}
              </div>
        </div>
    );
}

export default ClosedMeetHR;