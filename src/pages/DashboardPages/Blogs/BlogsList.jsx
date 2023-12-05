import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";

export default function BlogsList() {
  return (
    <section>
      <div className="flex justify-between mb-2 bg-base-100 p-3 rounded shadow">
        <h1>Blogs List</h1>
        <Link to="/admin/blogs/add-blog" className="gradient-primary-btn">
          Add New Blogs
        </Link>
      </div>
      <div className="relative overflow-x-auto shadow">
        <table className="dashboard_table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Image</th>
              <th>Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10-12-2023</td>
              <td>
                <img src="" alt="" className="w-10 h-10" />
              </td>
              <td>eManager release a new service : Domain & Hosting</td>
              <td>
                <div className="flex items-center gap-2">
                  <Link to="/admin/blogs/edit-blog/1">
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
