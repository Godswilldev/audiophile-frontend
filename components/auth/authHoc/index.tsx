import toast from "react-hot-toast";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { PageLoader } from "components/pageLoader";
import { transport } from "redux/api/axiosBaseQuery";
import { getAuthUser } from "redux/reducers/authUser.reducer";
import { useAppDispatch, useAppSelector } from "redux/store/store";

const withAuth = (Component: any) => {
  const AuthenticatedComponent = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { user } = useAppSelector(({ authUserReducer }) => authUserReducer);

    useEffect(() => {
      (async () => {
        try {
          const { data } = await transport({
            url: "/auth/verify-cookie",
            method: "get",
            headers: {
              Authorization: `Bearer ${JSON.parse(localStorage.getItem("jwt") as string)}`,
            },
          });
          localStorage.setItem("jwt", JSON.stringify(data.token));
          dispatch(getAuthUser({ user: data.data }));
        } catch (err) {
          toast.error("You must login or signup to checkout");
          dispatch(getAuthUser({ user: null }));
          router.push("/auth/login");
        }
      })();
    }, [router, dispatch]);

    return !!user ? <Component /> : <PageLoader />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
