import { useAdminLoginMutation } from "../../redux/api/administratorApi";

const Login = () => {
  const [adminLogin] = useAdminLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const data = {
      email,
      password,
    };

    try {
      const login = await adminLogin(data).unwrap();
      //   console.log(login);
      if (login.success) {
        // localStorage.setItem("token", login.token);
        e.target.reset();
        window.location.href = "/admin/dashboard";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex items-center justify-center w-full min-h-screen bg-gray-100">
      <div className="bg-base-100 rounded shadow lg:w-1/4 py-5">
        <div className="p-4 border-b">
          <h3 className="font-medium text-neutral text-center uppercase">
            Login
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

          <div>
            <button type="submit" className="gradient-primary-btn w-full mt-2">
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
