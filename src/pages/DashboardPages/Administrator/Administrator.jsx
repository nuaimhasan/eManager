import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
// import Spinner from "../../../components/Spinner/Spinner";
// import { useEffect } from "react";
// import Swal from "sweetalert2";

export default function Administrator() {
  return (
    <section>
      <div className="flex justify-end mb-2">
        <Link
          to="/admin/administrator/add-administrator"
          className="gradient-primary-btn"
        >
          Add Administrator
        </Link>
      </div>
      <div className="relative overflow-x-auto shadow-lg">
        <table className="dashboard_table">
          <thead>
            <tr>
              <th>User name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="flex items-center gap-2">
                  {/* <img
                    src={`${import.meta.env.VITE_BACKEND_URL}/images/users/${
                      user?.image
                    }`}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  /> */}
                  <img src="" alt="" className="w-10 h-10 rounded-full" />
                  Name
                </div>
              </td>
              <td>email</td>
              <td>phone</td>
              <td>
                <button>
                  <AiOutlineDelete className="text-lg hover:text-red-500" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
