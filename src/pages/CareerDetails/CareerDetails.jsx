import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useAddJobApplyFormMutation } from "../../redux/api/jobApplyFormApi";
import { useGetJobByIdQuery } from "../../redux/api/jobsApi";
import "./CareerDetails.css";

export default function CareerDetails() {
  // window.scroll(0, 0);
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    facebook: "",
    yearsOfExperience: "",
    expectedSalary: "",
    coverLetter: "",
    file: [],
  });

  const { data, isLoading } = useGetJobByIdQuery(id);
  const [addJobApplyForm] = useAddJobApplyFormMutation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const job = data?.data;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resume = form.file[0];

    if (!resume) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please upload your resume",
      });
    }

    const formData = new FormData();
    formData.append("jobId", id);
    formData.append("positionName", job?.title);
    formData.append("resume", resume);

    Object.keys(form).forEach((key) => {
      formData.append(key, form[key]);
    });

    try {
      const res = await addJobApplyForm(formData).unwrap();

      if (res?.success) {
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          linkedin: "",
          facebook: "",
          yearsOfExperience: "",
          expectedSalary: "",
          coverLetter: "",
          file: [],
        });

        Swal.fire({
          icon: "success",
          title: "",
          text: "Apply success",
        });

        navigate("/career");
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "",
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
              <input type="text" name="" disabled defaultValue={job?.title} />
            </div>

            <div className="form_control ">
              <label htmlFor="">Name</label>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  defaultValue={form.firstName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  defaultValue={form.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 sm:gap-4">
              <div className="form_control">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  defaultValue={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form_control">
                <label htmlFor="">Number</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="+880"
                  defaultValue={form.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form_control">
              <label htmlFor="">Address</label>
              <textarea
                name="address"
                rows="3"
                placeholder="state, city"
                defaultValue={form.address}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="form_control">
              <label htmlFor="">Linkedin profile</label>
              <input
                type="text"
                name="linkedin"
                placeholder="https://"
                defaultValue={form.linkedin}
                onChange={handleChange}
              />
            </div>

            <div className="form_control">
              <label htmlFor="">Facebook profile</label>
              <input
                type="text"
                name="facebook"
                placeholder="https://"
                defaultValue={form.facebook}
                onChange={handleChange}
              />
            </div>

            <div className="grid sm:grid-cols-2 sm:gap-4">
              <div className="form_control">
                <label htmlFor="">Years of experience</label>
                <input
                  type="text"
                  name="yearsOfExperience"
                  placeholder="0"
                  defaultValue={form.yearsOfExperience}
                  onChange={handleChange}
                />
              </div>
              <div className="form_control">
                <label htmlFor="">Expected Salary</label>
                <input
                  type="text"
                  name="expectedSalary"
                  placeholder="0000"
                  defaultValue={form.expectedSalary}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form_control">
              <label htmlFor="">Cover Letter</label>
              <textarea
                name="coverLetter"
                rows="4"
                placeholder="Type here..."
                defaultValue={form.coverLetter}
                onChange={handleChange}
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
                name="file"
                accept="application/pdf"
                onChange={(e) =>
                  setForm({
                    ...form,
                    file: e.target.files,
                  })
                }
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
