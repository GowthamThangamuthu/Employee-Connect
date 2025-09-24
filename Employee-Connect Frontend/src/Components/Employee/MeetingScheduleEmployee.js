import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import Context from '../Authentication';
import { useState } from 'react';
import { getEmployeeMeetByStatus } from '../../Service/MeetService';

function MeetingScheduleEmployee(props) {

    const reader = useContext(Context);
    const {mail} = reader;
    const [meet,setMeet] = useState([]);

    useEffect(()=>{
        getEmployeeMeetByStatus(mail,0).then((res)=>{
            setMeet(res.data);
        })
    })
    return (
        <div className='contentContainer'>
            <div className='tableContainer'>
                <table className='center'>
                  <caption>MEETING SCHEDULED</caption>
                <thead>
                    <tr>
                        
                        <th>HR NAME</th>
                        <th>DATE</th>
                        <th>TIME</th>
                        <th>LINK</th>
                        
                    </tr>
                </thead>
                <tbody>

                    {meet.map((v)=>{
                        return(<tr>
                            <td>{v.hr.name}</td>
                            <td>{v.date}</td>
                            <td>{v.time}</td>
                            <td><a href={v.link}><button className='link_btn'>LINK</button></a></td>
                        </tr>)
                    })} 
                </tbody>
              </table>
              </div>
        </div>
    );
}

export default MeetingScheduleEmployee;