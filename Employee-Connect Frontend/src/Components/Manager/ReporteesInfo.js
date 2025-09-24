import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ReporteesInfo(props) {
    const history = useNavigate();
    const handleQuater = (x)=>{
        history(`/qua/${x}`);
    }
    return (
        <div className='contentContainer'>
            <div className='reportees'>
                <div className='heading'>
                <h1>REPORTEES INFO</h1>
                </div>
                <div><button onClick={()=>handleQuater(1)}  className='quater1_btn'>QUATER I</button></div>
                <div><button onClick={()=>handleQuater(2)}   className='quater2_btn'>QUARTER II</button></div>
                <div><button onClick={()=>handleQuater(3)}   className='quater3_btn'>QUARTER III</button></div>
                <div><button onClick={()=>handleQuater(4)}   className='quater4_btn'>QUARTER IV</button></div>
                
            </div>
        </div>
    );
}

export default ReporteesInfo;