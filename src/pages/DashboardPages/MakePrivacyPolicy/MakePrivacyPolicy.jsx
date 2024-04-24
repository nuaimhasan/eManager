import { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import {
  useCreatePrivacyPolicyMutation,
  useGetPrivacyPolicyQuery,
  useUpdatePrivacyPolicyMutation,
} from "../../../redux/api/privacyPolicy";
import Swal from "sweetalert2";

export default function MakePrivacyPolicy() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const config = {
    uploader: {
      url: "https://xdsoft.net/jodit/finder/?action=fileUpload",
    },
  };

  const { data } = useGetPrivacyPolicyQuery();
  const id = data?.data?.length > 0 && data?.data[0]?._id;

  const [createPrivacyPolicy, { isLoading: addLoading }] =
    useCreatePrivacyPolicyMutation();
  const [updatePrivacyPolicy, { isLoading: updateLoading }] =
    useUpdatePrivacyPolicyMutation();

  const handleAddUpdatePrivacyPolicy = async (e) => {
    e.preventDefault();

    const contentInfo = {
      content,
    };

    if (id) {
      try {
        const res = await updatePrivacyPolicy({ id, contentInfo }).unwrap();
        if (res?.success) {
          Swal.fire("", "update success", "success");
        }
      } catch (error) {
        Swal.fire("", error?.data?.error, "error");
      }
    } else {
      try {
        const res = await createPrivacyPolicy(contentInfo).unwrap();
        if (res?.success) {
          Swal.fire("", "Privacy Policy add success", "success");
        }
      } catch (error) {
        Swal.fire("", error?.data?.error, "error");
      }
    }
  };

  return (
    <div className="make_privacy_policy">
      <form onSubmit={handleAddUpdatePrivacyPolicy}>
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
