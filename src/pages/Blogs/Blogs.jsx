import "./Blogs.css";
import BlogCard from "../../components/BlogCard/BlogCard";
import { useGetBlogsQuery } from "../../redux/api/blogApi";
import Spinner from "../../components/Spinner/Spinner";

export default function Blogs() {
  window.scroll(0, 0);

  const { data, isLoading } = useGetBlogsQuery();
  if (isLoading) return <Spinner />;
  const blogs = data?.data;

  return (
    <section className="py-6">
      <div className="container">
        <div className="flex items-center gap-2 text-neutral-content text-sm border-b pb-1">
          <p>Home</p>
          <p>-</p>
          <p>Blogs</p>
        </div>

        <div className="mt-5 lg:flex gap-5">
          <div className="lg:w-[72%]">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {blogs?.map((blog) => (
                <BlogCard key={blog?.id} blog={blog} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
