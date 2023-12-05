import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";

export default function WhyChooseLists() {
  return (
    <section>
      <div className="p-4 border-b bg-base-100 rounded">
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-neutral">Why Choose Setting</h1>
          <Link to="/admin/why-choose/add-new" className="gradient-primary-btn">
            Add New
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
              <th className="w-1/2">Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <img src="" alt="icon" className="w-10" />
              </td>
              <td>Expertise</td>
              <td>
                Our team consists of skilled professionals with extensive
                experience in their respective fields, ensuring top-notch
                quality and innovation in our solutions.
              </td>
              <td>
                <div className="flex items-center gap-2">
                  <Link to="">
                    <FaRegEdit className="text-[17px] hover:text-secondary" />
                  </Link>
                  <button>
                    <AiOutlineDelete className="text-lg hover:text-red-500" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <img src="" alt="icon" className="w-10" />
              </td>
              <td>Expertise</td>
              <td>
                Our team consists of skilled professionals with extensive
                experience in their respective fields, ensuring top-notch
                quality and innovation in our solutions.
              </td>
              <td>
                <div className="flex items-center gap-2">
                  <Link to="">
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
