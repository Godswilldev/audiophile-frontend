import toast from "react-hot-toast";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { PageLoader } from "components/pageLoader";
import { transport } from "redux/api/axiosBaseQuery";
import { setAuthUser } from "redux/reducers/auth.reducer";
import { useAppDispatch, useAppSelector } from "redux/store/store";

const withAuth = (Component: any) => {
  const AuthenticatedComponent = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { user } = useAppSelector(({ authReducer }) => authReducer);

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
          dispatch(setAuthUser({ jwt: data.token, user: data.data }));
        } catch (err) {
          toast.error("You must login or signup to checkout");
          router.push("/auth/login");
        }
      })();
    }, [router, dispatch]);

    return !!user?.id ? <Component /> : <PageLoader />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
