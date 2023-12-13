import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useJwt } from "react-jwt";
import { userLoggedIn } from "../redux/slices/userSlice";

export default async function useAuthCheck() {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);
  const token = localStorage?.getItem("eManager_jwt");
  const { isExpired } = useJwt(token);
  if (isExpired) {
    localStorage.removeItem("eManager_jwt");
  }

  useEffect(() => {
    if (token) {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/admin/loggedUser`, {
        headers: {
          authorization: `bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.success) {
            dispatch(
              userLoggedIn({
                token: token,
                data: data,
              })
            );
          }
        })
        .finally(() => {
          setAuthChecked(true);
        });
    }
  }, [dispatch, setAuthChecked, token]);

  return authChecked;
}
