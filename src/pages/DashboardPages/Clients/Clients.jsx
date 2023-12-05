import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Clients() {
  return (
    <section>
      <div className="p-4 border-b bg-base-100 rounded">
        <div className="flex justify-between items-center">
          <h1 className="font-medium text-neutral">Clients Setting</h1>
          <Link to="/admin/clients/add-client" className="gradient-primary-btn">
            Add New Client
          </Link>
        </div>
      </div>

      <div className="relative overflow-x-auto mt-2">
        <table>
          <thead>
            <tr>
              <th>Sl</th>
              <th>Logo</th>
              <th>Order</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>image</td>
              <td>1</td>
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
