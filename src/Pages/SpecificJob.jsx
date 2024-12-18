
import { Link, useLoaderData } from 'react-router-dom';

const SpecificJob = () => {
    const jobData=useLoaderData()
    return (
        <div>
            <h1 className='text-2xl'>{jobData.title}</h1>
            <p>{jobData.location}</p>
            <Link to={`/apply/${jobData._id}`}>
                <button>Apply Now</button>
            </Link>
        </div>
    );
};

export default SpecificJob;