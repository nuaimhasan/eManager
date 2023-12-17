import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes";
import useAuthCheck from "./hook/useAuthCheck";
import Loader from "./components/Loader/Loader";

export default function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  const authChecked = useAuthCheck();
  if (!authChecked) {
    return <Loader />;
  }

  return (
    <>
      {loading ? <Loader /> : <RouterProvider router={routes}></RouterProvider>}
    </>
  );
}
