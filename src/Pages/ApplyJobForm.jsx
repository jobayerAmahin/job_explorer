
import { useParams } from "react-router-dom";
import useAuth from "../Hooks/UseAuthData";

const ApplyJobForm = () => {
  const {user}=useAuth()
  const id=useParams()
  const submitApplication=e=>{
    e.preventDefault()
    
    const form=e.target
    const linkedin=form.linkedin.value
    const github=form.github.value
    const resume=form.resume.value
    const applicationData={linkedin,github,resume,applicantEmail:user.email}
   
    fetch('http://localhost:3000/job-application',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(applicationData)
    })
      .then(res=>res.json())
      .then(data=>console.log(data))
  }
  return (
   
        <div class="card bg-base-100 w-full shadow-2xl">
          <h1 class="text-5xl font-bold text-center">Apply now!</h1>
          <form class="card-body" onSubmit={submitApplication}>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Linked URL</span>
              </label>
              <input
                type="url"
                name="linkedin"
                placeholder="Linked In"
                class="input input-bordered"
                required
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Github URL</span>
              </label>
              <input
                type="url"
                placeholder="Github"
                name="github"
                class="input input-bordered"
                required
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Resume URL</span>
              </label>
              <input
                type="url"
                placeholder="Resume"
                name="resume"
                class="input input-bordered"
                required
              />
            </div>
            <div class="form-control mt-6">
              <input type="submit" class="btn btn-primary" value='Apply'/>
            </div>
          </form>
        </div>
  );
};

export default ApplyJobForm;
