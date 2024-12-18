import React, { useEffect, useState } from 'react';
import LatestJobCard from './LatestJobCard';

const LatestJobs = () => {
    const [allJobs,setAllJobs]=useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/allJobs')
        .then(res=>res.json())
        .then(data=>setAllJobs(data))
    },[])
    return (
        <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4'>
            {
                allJobs.map(job=><LatestJobCard key={job._id} job={job}></LatestJobCard>)
            }
        </div>
    );
};

export default LatestJobs;