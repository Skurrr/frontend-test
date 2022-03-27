import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeRoutes from "./HomeRoutes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
