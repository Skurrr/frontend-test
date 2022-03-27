import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeRoutes from "./HomeRoutes";
import UserDetailsRoutes from "./UserDetailsRoutes";
import UsersRoutes from "./UsersRoutes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoutes />} />
        <Route path="/users" element={<UsersRoutes />} />
        <Route path="/user/:id" element={<UserDetailsRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
