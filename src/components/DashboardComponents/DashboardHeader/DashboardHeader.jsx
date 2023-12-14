import { HiOutlineMenuAlt2 } from "react-icons/hi";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function DashboardHeader({ setSidebar }) {
  // const { loggedUser } = useSelector((state) => state.user);

  // console.log(loggedUser);

  return (
    <header className="py-3 px-6 bg-base-100 text-neutral shadow">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSidebar(true)}
            className="admin_sidebar_btn lg:hidden"
          >
            <HiOutlineMenuAlt2 className="text-xl mt-2" />
          </button>
          <Link to="/admin/dashboard">
            <img src="/images/logo/logo.png" alt="" className="w-24 sm:w-32" />
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <p className="hidden sm:block">User</p>
        </div>
      </div>
    </header>
  );
}
