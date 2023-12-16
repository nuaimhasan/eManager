import { useEffect } from "react";
import {
  useAddBannerMutation,
  useGetBannerQuery,
  useUpdateBannerByIdMutation,
} from "../../../redux/api/bannerApi";

import swal from "sweetalert2";
import Spinner from "../../../components/Spinner/Spinner";

export default function Banner() {
  const { data, isLoading, isError, error } = useGetBannerQuery();
  const [
    updateBannerById,
    {
      isLoading: updateLoading,
      isError: updateIsError,
      error: updateError,
      isSuccess,
    },
  ] = useUpdateBannerByIdMutation();

  const [
    addBanner,
    {
      isLoading: addLoading,
      isError: addIsError,
      error: addError,
      isSuccess: addSuccess,
    },
  ] = useAddBannerMutation();

  const id = data?.data[0]?.id;

  const handleAddUpdateBanner = async (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const description = e.target.description.value;

    const banner = {
      title,
      description,
    };

    if (id) {
      await updateBannerById({ id, banner });
    } else {
      await addBanner(banner);
    }
  };

  useEffect(() => {
    if (updateIsError || addIsError) {
      swal.fire(
        "",
        updateError?.data?.error || addError?.data?.error
          ? updateError?.data?.error || addError?.data?.error
          : "Something went wrong",
        "error"
      );
      return;
    }

    if (isSuccess || addSuccess) {
      swal.fire("", "Banner updated successfully", "success");
      return;
    }
  }, [updateIsError, updateError, isSuccess, addIsError, addError, addSuccess]);

  let content = null;

  if (isLoading) {
    return (content = <Spinner />);
  }

  if (isError) {
    content = <p className="p-4 text-red-500">{error?.data?.error}</p>;
  }

  if (!isLoading && !isError && data?.success) {
    content = (
      <form onSubmit={handleAddUpdateBanner} className="p-4">
        <div>
          <p className="font-medium mb-1">Title*</p>
          <input
            type="text"
            name="title"
            defaultValue={data?.data[0]?.title}
            required
          />
        </div>
        <div className="mt-3">
          <p className="font-medium mb-1">Description*</p>
          <textarea
            name="description"
            rows="3"
            defaultValue={data?.data[0]?.description}
            required
          ></textarea>
        </div>

        <div className="mt-4">
          <div className="flex gap-2">
            <button
              disabled={(updateLoading || addLoading) && "disabled"}
              className="gradient-primary-btn"
            >
              {updateLoading || addLoading
                ? "Loading..."
                : id
                ? "Update Banner"
                : "Add Banner"}
            </button>
          </div>
        </div>
      </form>
    );
  }

  return (
    <section className="bg-base-100 shadow rounded">
      <div className="p-4 border-b text-neutral font-medium flex justify-between items-center">
        <h3>Banner Setting</h3>
      </div>

      {content}
    </section>
  );
}
