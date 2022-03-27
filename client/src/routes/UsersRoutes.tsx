import { Suspense } from "react";
import UsersTable from "../components/User/UsersTable";

const UsersRoutes = () => {
  return (
    <Suspense fallback={"loading..."}>
      <UsersTable />;
    </Suspense>
  );
};

export default UsersRoutes;
