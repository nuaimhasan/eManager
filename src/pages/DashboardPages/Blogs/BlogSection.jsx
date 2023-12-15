import Swal from "sweetalert2";
import Spinner from "../../../components/Spinner/Spinner";
import {
  useAddBlogSectionMutation,
  useGetBlogSectionQuery,
  useUpdateBlogSectionByIdMutation,
} from "../../../redux/api/blogSectionApi";

export default function BlogSection() {
  const { data, isLoading } = useGetBlogSectionQuery();
  const [updateBlogSectionById, { isLoading: updateIsLoading }] =
    useUpdateBlogSectionByIdMutation();
  const [addBlogSection, { isLoading: addIsLoading }] =
    useAddBlogSectionMutation();

  if (isLoading) {
    return <Spinner />;
  }

  const id = data?.data[0]?.id;
  const blogsection = data?.data[0];

  const updateBlogSectionHandler = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const subtitle = e.target.subTitle.value;
    const description = e.target.description.value;

    const body = {
      title,
      subtitle,
      description,
    };

    if (id) {
      try {
        const res = await updateBlogSectionById({
          id,
          body,
        }).unwrap();

        if (res.success) {
          Swal.fire({
            icon: "success",
            title: "Blog Section Updated Successfully",
          });
        }
      } catch (error) {
        // console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    } else {
      try {
        const res = await addBlogSection(body).unwrap();

        if (res.success) {
          Swal.fire({
            icon: "success",
            title: "Blog Section Added Successfully",
          });
        }
      } catch (error) {
        // console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    }
  };

  return (
    <section className="bg-base-100 rounded shadow">
      <div className="p-4 border-b">
        <h3 className="font-medium text-neutral">Blog Section Seting</h3>
      </div>

      <form
        className="flex flex-col gap-3 p-4 md:w-1/2"
        onSubmit={updateBlogSectionHandler}
      >
        <div>
          <p className="mb-1">Title</p>
          <input
            type="text"
            name="title"
            required
            defaultValue={blogsection?.title}
          />
        </div>

        <div>
          <p className="mb-1">Sub Title</p>
          <input
            type="text"
            name="subTitle"
            required
            defaultValue={blogsection?.subtitle}
          />
        </div>

        <div>
          <p className="mb-1">Description</p>
          <textarea
            name="description"
            rows="3"
            required
            defaultValue={blogsection?.description}
          ></textarea>
        </div>

        <div>
          <button
            disabled={(updateIsLoading || addIsLoading) && "disabled"}
            className="gradient-primary-btn"
          >
            {updateIsLoading || addIsLoading ? (
              "Loading..."
            ) : id ? (
              "Update"
            ) : (
              "Add"
            )}
          </button>
        </div>
      </form>
    </section>
  );
}
