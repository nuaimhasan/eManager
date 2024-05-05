import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  useDeleteWhyChooseMutation,
  useGetAllWhyChooseQuery,
} from "../../../redux/api/WhyChooseApi";

import swal from "sweetalert2";

export default function WhyChooseLists() {
  const { data, isLoading } = useGetAllWhyChooseQuery();
  const [deleteWhyChoose] = useDeleteWhyChooseMutation();

  if (isLoading) return <div>Loading...</div>;
  const chooseLists = data?.data;

  const handleDelete = async (id) => {
    const isConfirm = window.confirm("Are you sure delete this item?");
    if (isConfirm) {
      try {
        await deleteWhyChoose(id);

        swal.fire({
          title: "Success!",
          text: "Deleted Successfully!",
          icon: "success",
          confirmButtonText: "Ok",
        });
      } catch (error) {
        // console.log(error);
        swal.fire({
          title: "Error!",
          text: "Something went wrong!",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    }
  };

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
            {chooseLists?.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}/whychoose/${
                      item?.icon
                    }`}
                    alt="icon"
                    className="w-10"
                  />
                </td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>
                  <div className="flex items-center gap-2">
                    <Link to={`/admin/why-choose/edit/${item._id}`}>
                      <FaRegEdit className="text-[17px] hover:text-primary" />
                    </Link>
                    <button onClick={() => handleDelete(item?._id)}>
                      <AiOutlineDelete className="text-lg hover:text-red-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
