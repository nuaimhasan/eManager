import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";

export default function AllTeams() {
  return (
    <section>
      <div className="flex justify-end mb-2">
        <Link to="/admin/teams/add-team" className="gradient-primary-btn">
          Add Team Member
        </Link>
      </div>
      <div className="relative overflow-x-auto shadow-lg">
        <table className="dashboard_table">
          <thead>
            <tr>
              <th>Sl</th>
              <th>Image</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <img src="" alt="" className="w-7 h-7 rounded-full" />
              </td>
              <td>
                <div className="flex items-center gap-2">Name</div>
              </td>
              <td>MERN Stack Developer</td>
              <td>
                <div className="flex gap-1.5">
                  <Link to="/admin/teams/edit-team/1">
                    <FaUserEdit className="text-lg hover:text-secondary" />
                  </Link>
                  <button>
                    <AiOutlineDelete className="text-lg hover:text-red-500" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
