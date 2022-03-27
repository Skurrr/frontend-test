import { Suspense } from "react";
import { ViewUserDetails } from "../components/User";

const UserDetailsRoutes = () => {
  return (
    <Suspense fallback={"loading..."}>
      <ViewUserDetails />
    </Suspense>
  );
};

export default UserDetailsRoutes;
