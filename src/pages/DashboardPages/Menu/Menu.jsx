import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <section>
      <div className="mb-2 bg-base-100 p-3 rounded shadow">
        <h1 className="font-medium text-neutral">Menu Lists</h1>
      </div>

      <div className="relative overflow-x-auto shadow-lg">
        <table className="dashboard_table">
          <thead>
            <tr>
              <th>Sl</th>
              <th>Name</th>
              <th>Order</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Home</td>
              <td>1</td>
              <td>
                <Link to="/admin/front-end/menu/edit/1">
                  <FaRegEdit className="text-[17px] hover:text-secondary" />
                </Link>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Services</td>
              <td>2</td>
              <td>
                <Link to="/admin/front-end/menu/edit/2">
                  <FaRegEdit className="text-[17px] hover:text-secondary" />
                </Link>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>About Us</td>
              <td>3</td>
              <td>
                <Link to="/admin/front-end/menu/edit/3">
                  <FaRegEdit className="text-[17px] hover:text-secondary" />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
