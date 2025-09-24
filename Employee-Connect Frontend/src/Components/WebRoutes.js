import React, { useContext } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import RequestAccess from './ReqAcess/RequestAccess';
import Notification from './Admin/Notifications';
import Context from './Authentication';
import ScheduleMeet from './HR/ScheduleMeet'
import MeetingScheduledHR from './HR/MeetingScheduledHR';
import Completed from './HR/Completed';
import ClosedMeetHR from './HR/ClosedMeetHR';
import MeetingScheduleEmployee from './Employee/MeetingScheduleEmployee';
import ClosedMeetEmployee from './Employee/ClosedMeetEmployee';
import ReporteesInfo from './Manager/ReporteesInfo';
import Quater from './Manager/Quater';
import BUQuater from './BU/BUQuater';
function WebRoutes(props) {
    const reader = useContext(Context);
    const {role,auth} = reader;
    const login = createBrowserRouter([
        {
            path:"/",
            element:<Layout/>,
            children: [

            ]
        }
    ])
    const access = createBrowserRouter([
        {
            path:"/",
            element:<RequestAccess/>
        }
    ])

    const admin = createBrowserRouter([
        {
            path:"/",
            element:<Layout/>,
            children: [
                {
                    path: `/notification`,
                    element: <Notification/>,
                },
                {
                    path: `/`,
                    element: <MeetingScheduleEmployee/>,
                  },
                  {
                    path:'/closedMeet',
                    element:<ClosedMeetEmployee/>
                  }
            ]
        }
    ])
    const hr = createBrowserRouter([
        {
            path:"/",
            element:<Layout/>,
            children: [
                {
                    path: `/:id`,
                    element: <ScheduleMeet/>,
                  },
                  
                  {
                    path: `/`,
                    element: <MeetingScheduledHR/>,
                  },
                  {
                    path: '/complete/:id',
                    element: <Completed/>
                  },
                  {
                    path: '/closed',
                    element: <ClosedMeetHR/>
                  }
            ]
        }
    ])
    const employee = createBrowserRouter([
        {
            path:"/",
            element:<Layout/>,
            children: [
                {
                    path: `/`,
                    element: <MeetingScheduleEmployee/>,
                  },
                  {
                    path:'/closedMeet',
                    element:<ClosedMeetEmployee/>
                  }
                
            ]
        }
    ])
    const manager = createBrowserRouter([
        {
            path:"/",
            element:<Layout/>,
            children: [
                {
                    path: `/`,
                    element: <MeetingScheduleEmployee/>,
                  },
                  {
                    path:'/closedMeet',
                    element:<ClosedMeetEmployee/>
                  },
                  {
                    path:'/reportees',
                    element:<ReporteesInfo/>
                  },
                  {
                    path:`/qua/:id`,
                    element:<Quater/>
                  }
                
            ]
        }
    ])

    const bu = createBrowserRouter([
      {
          path:"/",
          element:<Layout/>,
          children: [
              
                {
                  path:'/',
                  element:<ReporteesInfo/>
                },
                {
                  path:`/qua/:id`,
                  element:<BUQuater/>
                }
              
          ]
      }
  ])
    return (
        <>
        {console.log(role)}
        {role==="Admin"&&<RouterProvider router={admin}/>}
        {role==="Employee"&&<RouterProvider router={employee}/>}
        {role==="HR"&&<RouterProvider router={hr}/>}
        {role==="Manager"&&<RouterProvider router={manager}/>}
        {role==="BU Head"&&<RouterProvider router={bu}/>}
        {!auth &&<RouterProvider router={login}/>}
        {((role===-1||role===null)&&auth) && <RouterProvider router={access}/>}
        </>
    );
}

export default WebRoutes;