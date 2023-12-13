import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes";
import useAuthCheck from "./hook/useAuthCheck";
import Spinner from "./components/Spinner/Spinner";

export default function App() {
  const authChecked = useAuthCheck();
  if (!authChecked) {
    return <Spinner />;
  }

  return <RouterProvider router={routes}></RouterProvider>;
}
