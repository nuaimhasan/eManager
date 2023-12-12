import { useParams } from "react-router-dom";
import { useGetBlogByIdQuery } from "../../redux/api/blogApi";

export default function BlogDetails() {
  window.scroll(0, 0);

  const {id} = useParams();

  const {data} = useGetBlogByIdQuery(id);
  const blog = data?.data;
  // console.log(data?.data);

  return (
    <section className="pb-10">
      <div className="container">
        <img
          src={`http://localhost:5000/blogs/${blog?.image}`}
          alt=""
          className="w-full h-96"
        />

        <h2 className="mt-3 text-neutral text-xl font-semibold">
          {blog?.title}
        </h2>

        <p className="mt-4 text-[15px] text-neutral-content">
          {blog?.description}
        </p>
      </div>
    </section>
  );
}
