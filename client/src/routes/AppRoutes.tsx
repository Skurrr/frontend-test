import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeRoutes from "./HomeRoutes";
import UsersRoutes from "./UsersRoutes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoutes />} />
        <Route path="/users" element={<UsersRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
