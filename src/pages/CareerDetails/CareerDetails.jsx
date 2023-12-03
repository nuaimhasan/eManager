import "./CareerDetails.css";

export default function CareerDetails() {
  window.scroll(0, 0);
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
              />
            </div>

            <div className="form_control ">
              <label htmlFor="">Name</label>
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" name="" placeholder="First Name" />
                <input type="text" name="" placeholder="Last Name" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 sm:gap-4">
              <div className="form_control">
                <label htmlFor="">Email</label>
                <input type="email" name="" placeholder="example@gmail.com" />
              </div>
              <div className="form_control">
                <label htmlFor="">Number</label>
                <input type="text" name="" placeholder="+880" />
              </div>
            </div>

            <div className="form_control">
              <label htmlFor="">Address</label>
              <textarea name="" rows="3" placeholder="state, city"></textarea>
            </div>

            <div className="form_control">
              <label htmlFor="">Linkedin profile</label>
              <input type="text" name="" placeholder="https://" />
            </div>

            <div className="form_control">
              <label htmlFor="">Facebook profile</label>
              <input type="text" name="" placeholder="https://" />
            </div>

            <div className="grid sm:grid-cols-2 sm:gap-4">
              <div className="form_control">
                <label htmlFor="">Years of experience</label>
                <input type="text" name="" placeholder="0" />
              </div>
              <div className="form_control">
                <label htmlFor="">Expected Salary</label>
                <input type="text" name="" placeholder="0000" />
              </div>
            </div>

            <div className="form_control">
              <label htmlFor="">Cover Letter</label>
              <textarea name="" rows="4" placeholder="Type here..."></textarea>
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
              />
              <p className="text-sm text-neutral-content">
                Accepted file types: pdf, Max. file size: 5 MB.
              </p>
            </div>

            <div className="mt-8">
              <button className="gradient-primary-btn w-full">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
