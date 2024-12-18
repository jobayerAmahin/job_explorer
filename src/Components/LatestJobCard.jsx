import React from "react";
import { Link } from "react-router-dom";

const LatestJobCard = ({ job }) => {
  const {
    _id,
    description,
    requirements,
    salaryRange,
    category,
    jobType,
    location,
    title,
    company_logo,
  } = job;
  return (
    <div class="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
        className="w-12"
          src={company_logo}
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <p>{description}</p>
        <div className="flex flex-wrap gap-2">
            {requirements.map(demand=><p className="border-2 p-2 rounded-xl font-bold">{demand}</p> )}
        </div>
        <div class="card-actions justify-end">
            <div>
                <p>Salary({salaryRange.currency}): {salaryRange.min}- {salaryRange.max}</p>
            </div>
            <Link to={`/job/${_id}`}>
                 <button class="btn btn-primary">Apply!</button>
            </Link>
          
        </div>
      </div>
    </div>
  );
};

export default LatestJobCard;
