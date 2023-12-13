import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useDeleteBenefitMutation,
  useGetBenefitsQuery,
} from "../../../../redux/api/benefitsApi";

export default function BenefitList() {
  const { data, isLoading } = useGetBenefitsQuery();
  const [deleteBenefit] = useDeleteBenefitMutation();

  if (isLoading) return <h1>Loading...</h1>;

  const benefits = data?.data;
  // console.log(blogs);

  const handleDelete = async (id) => {
    try {
      const res = await deleteBenefit(id).unwrap();
      if (res.success) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: res.message,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <section>
      <div className="flex justify-between mb-2 bg-base-100 p-3 rounded shadow">
        <h1>Benefits List</h1>
        <Link to="/admin/benefits/add-benefit" className="gradient-primary-btn">
          Add New Benefit
        </Link>
      </div>
      <div className="relative overflow-x-auto shadow">
        <table className="dashboard_table">
          <thead>
            <tr>
              <th>SL</th>
              <th>Icon</th>
              <th>Title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {benefits?.map((benefit, index) => (
              <tr key={benefit.id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={`${import.meta.env.VITE_SERVER_IMG}/benefit/${
                      benefit?.image
                    }`}
                    alt=""
                    className="w-10 h-10"
                  />
                </td>
                <td>{benefit?.title}</td>
                <td>
                  <div className="flex items-center gap-2">
                    <Link to={`/admin/benefit/edit-benefit/${benefit.id}`}>
                      <FaRegEdit className="text-[17px] hover:text-secondary" />
                    </Link>
                    <button onClick={() => handleDelete(benefit?.id)}>
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
