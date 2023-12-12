import { Link } from "react-router-dom";

export default function BlogCard({blog}) {
  // console.log(blog);
  return (
    <div className="blog_card">
      <img
        src={`http://localhost:5000/blogs/${blog?.image}`}
        alt=""
        className="w-full h-48 rounded-t"
      />
      <div className="py-4 px-2">
        <h2 className="text-neutral text-lg font-semibold">
          {blog?.title}
        </h2>

        <div className="mt-2">
          <Link to={`/blogs/${blog?.id}`} className="text-secondary hover:underline text-sm">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
