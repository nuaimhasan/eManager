import { AiOutlineDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  useDeleteBlogMutation,
  useGetBlogsQuery,
} from "../../../redux/api/blogApi";

export default function BlogsList() {
  const { data, isLoading } = useGetBlogsQuery();
  const [deleteBlog] = useDeleteBlogMutation();

  if (isLoading) return <h1>Loading...</h1>;

  const blogs = data?.data;
  // console.log(blogs);

  const handleDelete = async (id) => {
    try {
      const res = await deleteBlog(id).unwrap();
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
            {blogs?.map((blog) => (
              <tr key={blog.id}>
                <td>{blog.createdAt ? blog.createdAt.split("T")[0] : ""}</td>
                <td>
                  <img
                    src={`${import.meta.env.VITE_BACKEND_URL}/blogs/${
                      blog?.image
                    }`}
                    alt=""
                    className="w-10 h-10"
                  />
                </td>
                <td>{blog?.title}</td>
                <td>
                  <div className="flex items-center gap-2">
                    <Link to={`/admin/blogs/edit-blog/${blog.id}`}>
                      <FaRegEdit className="text-[17px] hover:text-secondary" />
                    </Link>
                    <button onClick={() => handleDelete(blog?.id)}>
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
