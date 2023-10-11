import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const fetchUserByEmail = (email) => {
    return axios.get(`http://localhost:4000/users/${email}`)
}

const fetchCoursesByChannelId = (channelId) => {
    return axios.get(`http://localhost:4000/channels/${channelId}`)
}

const DependentQueries = ({email}) => {
   const {data: user} = useQuery(['user', email], () => fetchUserByEmail(email));
   
   const channelId = user?.data.channelId;
   const {data: courses} = useQuery(['courses', channelId], () => fetchCoursesByChannelId(channelId), 
   {
    enabled: !!channelId,
   });

   console.log(courses.data.courses[0]);

  return (
    <div style={{margin: '25px'}}>
        <h5>channelId: {channelId}</h5>
        <ul style={{margin: '25px'}}>
        {
            courses.data.courses.map(course => <li key={course}>{course}</li>)
        }
        </ul>
    </div>
  )
}

export default DependentQueries;