import { useSelector } from "react-redux";
import { useLoginMutation } from "../../redux/api/userApi";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const { loggedUser } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (loggedUser?.success || loggedUser !== undefined) {
    navigate(from, { replace: true });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const data = {
      email,
      password,
    };

    try {
      const result = await login(data).unwrap();

      if (result?.success) {
        e.target.reset();
      }

      setErrorMessage("");
    } catch (error) {
      console.log(error);
      setErrorMessage(error?.data?.error);
    }
  };

  return (
    <section className="flex items-center justify-center w-full min-h-screen bg-gray-100">
      <div className="bg-base-100 rounded shadow lg:w-[500px] py-5">
        <div className="p-4 border-b">
          <h3 className="font-medium text-neutral text-center uppercase">
            Admin Login
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-4">
          <div>
            <p className="mb-1">Email</p>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <p className="mb-1">Password</p>
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              required
            />
          </div>

          {errorMessage && (
            <p className="text-sm text-red-500">{errorMessage}</p>
          )}

          <div>
            <button
              disabled={isLoading && "disabled"}
              type="submit"
              className="gradient-primary-btn w-full mt-2"
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
