import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";

export default function ServicesList() {
  return (
    <section>
      <div className="p-4 border-b bg-base-100 rounded">
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-neutral">Services List</h1>
          <Link
            to="/admin/services/add-service"
            className="gradient-primary-btn"
          >
            Add New Service
          </Link>
        </div>
      </div>

      <div className="bg-base-100 rounded relative overflow-x-auto shadow mt-2">
        <table>
          <thead>
            <tr>
              <th>Sl</th>
              <th>Icon</th>
              <th>Title</th>
              <th>image</th>
              <th>Technologies</th>
              <th>Pricing</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <img src="" alt="icon" className="w-10" />
              </td>
              <td>Web Development Solutions</td>
              <td>
                <img src="" alt="icon" className="w-10" />
              </td>
              <td>x</td>
              <td>x</td>
              <td>
                <div className="flex items-center gap-2">
                  <Link to="/admin/services/edit/1">
                    <FaRegEdit className="text-[17px] hover:text-secondary" />
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
