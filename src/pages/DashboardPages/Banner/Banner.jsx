import { useEffect, useState } from "react";
import {
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

  const [edit, setEdit] = useState(false);

  const handleEditBanner = async (e) => {
    e.preventDefault();
    const id = data?.data[0]?.id;

    const title = e.target.title.value;
    const description = e.target.description.value;

    const banner = {
      title,
      description,
    };

    await updateBannerById({ id, banner });
  };

  useEffect(() => {
    if (updateIsError) {
      return swal.fire(
        "",
        updateError?.data?.error
          ? updateError?.data?.error
          : "Something went wrong",
        "error"
      );
    }

    if (isSuccess) {
      swal.fire("", "update success", "success");
    }
  }, [updateIsError, updateError, isSuccess]);

  let content = null;

  if (isLoading) {
    return (content = <Spinner />);
  }

  if (isError) {
    content = <p className="p-4 text-red-500">{error?.data?.error}</p>;
  }

  if (!isLoading && !isError && data?.success) {
    content = (
      <form onSubmit={handleEditBanner} className="p-4">
        <div>
          <p className="font-medium mb-1">Title*</p>
          <input
            type="text"
            name="title"
            defaultValue={data?.data[0]?.title}
            disabled={!edit && "disabled"}
            required
          />
        </div>
        <div className="mt-3">
          <p className="font-medium mb-1">Description*</p>
          <textarea
            name="description"
            rows="3"
            defaultValue={data?.data[0]?.description}
            disabled={!edit && "disabled"}
            required
          ></textarea>
        </div>

        <div className="mt-4">
          {edit ? (
            <div className="flex gap-2">
              <button
                disabled={updateLoading && "disabled"}
                className="gradient-primary-btn"
              >
                {updateLoading ? "Loading..." : "Update Banner"}
              </button>
              <div
                onClick={() => setEdit(false)}
                className="bg-primary cursor-pointer w-max px-6 rounded flex justify-center items-center"
              >
                Cancel
              </div>
            </div>
          ) : (
            <div
              onClick={() => setEdit(true)}
              className="gradient-primary-btn cursor-pointer w-max"
            >
              Edit Banner
            </div>
          )}
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
