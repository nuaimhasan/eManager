import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetMenuByIdQuery,
  useUpdateMenuByIdMutation,
} from "../../../redux/api/menuApi";

import swal from "sweetalert2";

export default function EditMenu() {
  const { id: menuId } = useParams();
  const { data, isLoading } = useGetMenuByIdQuery(menuId);
  const [updateMenuById] = useUpdateMenuByIdMutation();

  const [menuName, setMenuName] = useState("");
  const [menuOrder, setMenuOrder] = useState(0);

  useEffect(() => {
    if (!isLoading && data) {
      const { name, order } = data.data;
      setMenuName(name);
      setMenuOrder(order);
    }
  }, [data, isLoading]);

  if (isLoading) return <div>Loading...</div>;

  const updateMenuHandler = async (e) => {
    e.preventDefault();

    const data = {
      name: menuName,
      order: menuOrder,
    };

    try {
      const res = await updateMenuById({ id: menuId, body: data }).unwrap();
      if (res.success) {
        swal.fire({
          title: "Success!",
          text: res.message,
          icon: "success",
          confirmButtonText: "Ok",
        });
      }
    } catch (err) {
      swal.fire({
        title: "Error!",
        text: err.data.message,
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <section>
      <div className="p-4 border-b bg-base-100 rounded">
        <h1 className="font-medium text-neutral">Edit Menu</h1>
      </div>

      <div className="bg-base-100 rounded mt-2 p-3">
        <form className="md:w-1/2">
          <div className="mt-4">
            <p className="mb-1">Name</p>
            <input
              type="text"
              name="title"
              defaultValue={menuName}
              onChange={(e) => setMenuName(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <p className="mb-1">Order</p>
            <input
              type="number"
              name="order"
              defaultValue={menuOrder}
              onChange={(e) => setMenuOrder(e.target.value)}
            />
          </div>

          <div className="mt-5">
            <button
              onClick={updateMenuHandler}
              type="submit"
              className="gradient-primary-btn"
            >
              Update Menu
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
