import { useGetBlogSectionQuery } from "../../../redux/api/blogSectionApi";
import BlogCard from "../../BlogCard/BlogCard";
import "./Blogs.css";
import { Link } from "react-router-dom";

export default function Blogs() {
  const {data} = useGetBlogSectionQuery();

  const blogSection = data?.data[0];
  return (
    <section className="py-10 lg:py-20 bg-base-100" id="blogs">
      <div className="container">
        <div className="text-center ">
          <h3 className="text-lg text-neutral-content">
            {blogSection?.subtitle}
          </h3>
          <h2 className="text-4xl font-bold text-neutral">
            {blogSection?.title}
          </h2>
          <p className="text-sm text-neutral-content mt-3">
            {blogSection?.description}
          </p>
        </div>

        <div className="mt-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 lg:mx-20">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link to="/blogs" className="gradient-primary-btn">
            All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}
