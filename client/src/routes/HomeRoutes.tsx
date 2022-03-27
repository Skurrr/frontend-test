import { Suspense } from "react";
import Home from "../components/Home";

const HomeRoutes = () => {
  return (
    <Suspense fallback={"loading..."}>
      <Home />;
    </Suspense>
  );
};

export default HomeRoutes;
