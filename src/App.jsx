import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes";
import Spinner from "./components/Spinner/Spinner";
import useAuthCheck from "./hook/useAuthCheck";

export default function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  const authChecked = useAuthCheck();
  if (!authChecked) {
    return <Spinner />;
  }

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <RouterProvider router={routes}></RouterProvider>
      )}
    </>
  );
}
