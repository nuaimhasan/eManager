import { useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useAddJobApplyFormMutation } from "../../redux/api/jobApplyFormApi";
import { useGetJobByIdQuery } from "../../redux/api/jobsApi";
import "./CareerDetails.css";

export default function CareerDetails() {
  window.scroll(0, 0);
  const { id } = useParams();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [facebook, setFacebook] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [expectedSalary, setExpectedSalary] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [file, setFile] = useState([]);

  const { data, isLoading } = useGetJobByIdQuery(id);
  const [addJobApplyForm] = useAddJobApplyFormMutation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const job = data?.data;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resume = file[0];

    if (!resume) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please upload your resume",
      });
    }

    const formData = new FormData();
    formData.append("positionName", job?.title);
    formData.append("jobId", id);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("linkedin", linkedin);
    formData.append("facebook", facebook);
    formData.append("yearsOfExperience", yearsOfExperience);
    formData.append("expectedSalary", expectedSalary);
    formData.append("coverLetter", coverLetter);
    formData.append("resume", resume);

    try {
      const res = await addJobApplyForm(formData).unwrap();

      if (res?.success) {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setLinkedin("");
        setFacebook("");
        setYearsOfExperience("");
        setExpectedSalary("");
        setCoverLetter("");
        setFile([]);

        Swal.fire({
          icon: "success",
          title: "Success",
          text: res.message,
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong",
      });
    }
  };

  return (
    <div className="min-h-screen">
      <div className="container pb-8">
        <h1 className="mt-6 text-xl font-dinMedium bg-base-100 p-3 rounded border-t-4 border-primary shadow-lg">
          Application Form
        </h1>

        <div className="bg-base-100 p-6 rounded-md mt-4 shadow-lg">
          <form action="" className="career_form">
            <div className="form_control">
              <label htmlFor="">Name for Position</label>
              <input
                type="text"
                name=""
                defaultValue="DIGITAL MARKETING EXPERT"
                disabled
                value={job?.title}
              />
            </div>

            <div className="form_control ">
              <label htmlFor="">Name</label>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name=""
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  name=""
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 sm:gap-4">
              <div className="form_control">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  name=""
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form_control">
                <label htmlFor="">Number</label>
                <input
                  type="text"
                  name=""
                  placeholder="+880"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="form_control">
              <label htmlFor="">Address</label>
              <textarea
                name=""
                rows="3"
                placeholder="state, city"
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
            </div>

            <div className="form_control">
              <label htmlFor="">Linkedin profile</label>
              <input
                type="text"
                name=""
                placeholder="https://"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
              />
            </div>

            <div className="form_control">
              <label htmlFor="">Facebook profile</label>
              <input
                type="text"
                name=""
                placeholder="https://"
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
              />
            </div>

            <div className="grid sm:grid-cols-2 sm:gap-4">
              <div className="form_control">
                <label htmlFor="">Years of experience</label>
                <input
                  type="text"
                  name=""
                  placeholder="0"
                  value={yearsOfExperience}
                  onChange={(e) => setYearsOfExperience(e.target.value)}
                />
              </div>
              <div className="form_control">
                <label htmlFor="">Expected Salary</label>
                <input
                  type="text"
                  name=""
                  placeholder="0000"
                  value={expectedSalary}
                  onChange={(e) => setExpectedSalary(e.target.value)}
                />
              </div>
            </div>

            <div className="form_control">
              <label htmlFor="">Cover Letter</label>
              <textarea
                name=""
                rows="4"
                placeholder="Type here..."
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
              ></textarea>
            </div>

            <div className="form_control">
              <label className="block" htmlFor="file_input">
                Upload CV/Resume
              </label>

              <input
                className="block cursor-pointer"
                aria-describedby="file_input_help"
                id="file_input"
                type="file"
                onChange={(e) => setFile(e.target.files)}
              />
              <p className="text-sm text-neutral-content">
                Accepted file types: pdf, Max. file size: 5 MB.
              </p>
            </div>

            <div className="mt-8">
              <button
                onClick={handleSubmit}
                className="gradient-primary-btn w-full"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
