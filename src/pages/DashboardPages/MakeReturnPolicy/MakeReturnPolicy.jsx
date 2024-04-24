import { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import Swal from "sweetalert2";
import {
  useCreateReturnPolicyMutation,
  useGetReturnPolicyQuery,
  useUpdateReturnPolicyMutation,
} from "../../../redux/api/returnPolicy";

export default function MakeReturnPolicy() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const config = {
    uploader: {
      url: "https://xdsoft.net/jodit/finder/?action=fileUpload",
    },
  };

  const { data } = useGetReturnPolicyQuery();
  const id = data?.data?.length > 0 && data?.data[0]?._id;

  const [createReturnPolicy, { isLoading: addLoading }] =
    useCreateReturnPolicyMutation();
  const [updateReturnPolicy, { isLoading: updateLoading }] =
    useUpdateReturnPolicyMutation();

  const handleAddUpdateReturnPolicy = async (e) => {
    e.preventDefault();

    const contentInfo = {
      content,
    };

    if (id) {
      try {
        const res = await updateReturnPolicy({ id, contentInfo }).unwrap();
        if (res?.success) {
          Swal.fire("", "Return Policy update success", "success");
        }
      } catch (error) {
        Swal.fire("", error?.data?.error, "error");
      }
    } else {
      try {
        const res = await createReturnPolicy(contentInfo).unwrap();
        if (res?.success) {
          Swal.fire("", "Return Policy add success", "success");
        }
      } catch (error) {
        Swal.fire("", error?.data?.error, "error");
      }
    }
  };

  return (
    <div className="make_privacy_policy">
      <form onSubmit={handleAddUpdateReturnPolicy}>
        <JoditEditor
          ref={editor}
          config={config}
          onBlur={(newContent) => setContent(newContent)}
          value={data?.data?.length > 0 ? data?.data[0]?.content : content}
        />
        <div className="mt-4">
          <button
            disabled={updateLoading || (addLoading && "disabled")}
            className="gradient-primary-btn"
          >
            {updateLoading || addLoading ? "Loading..." : "Submite"}
          </button>
        </div>
      </form>
    </div>
  );
}
