import { Suspense } from "react";
import { ViewUserDetails } from "../components/User";
import UsersTable from "../components/User/UsersTable";

const UserDetailsRoutes = () => {
  return (
    <Suspense fallback={"loading..."}>
      <ViewUserDetails />
    </Suspense>
  );
};

export default UserDetailsRoutes;
