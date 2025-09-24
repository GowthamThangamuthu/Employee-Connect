import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Context from '../Authentication';
import { getHrMeetByStatus, updateMeetStatus } from '../../Service/MeetService';
function MeetingScheduledHR(props) {
    
    const history = useNavigate();
    const complete = (id)=>{
        history(`/complete/${id}`)
    }

    const cancel =(id)=>{
        updateMeetStatus(id,3);
    }

    const reschedule = (id)=>{
        updateMeetStatus(id,2);
        history(`/${id}`)
    }
    const reader = useContext(Context);
    const {mail} = reader;
    const [meet,setMeet] = useState([]);
    useEffect(()=>{
        getHrMeetByStatus(mail,0).then((res)=>{
            setMeet(res.data);
            console.log(meet);
        })
    },[cancel,reschedule,complete])
    return (
        <div className='contentContainer'>
            <div className='tableContainer'>
                <table className='center'>
                  <caption>MEETING SCHEDULED</caption>
                <thead>
                    <tr>
                        
                        <th>EMPLOYEE NAME</th>
                        <th>DATE</th>
                        <th>TIME</th>
                        <th>LINK</th>
                        <th>ACIONS</th>
                    </tr>
                </thead>
                <tbody>
                        {meet.map((v)=>{
                            return(<tr>
                                <td>{v.employee.name}</td>
                                <td>{v.date}</td>
                                <td>{v.time}</td>
                                <td><a href={v.link}><button className='link_btn'>LINK</button></a></td>
                                <td>
                            <button className='reschedule_btn' onClick={()=>reschedule(v.id)}>RE-SCHEDULE</button>
                            <button className='cancel_btn' onClick={()=>cancel(v.id)}>CANCEL</button>
                            <button className='completed_btn' onClick={()=>complete(v.id)}>COMPLETED</button>
                        </td>
                            </tr>)
                        })}
                </tbody>
              </table>
              </div>
        </div>
    );
}

export default MeetingScheduledHR;