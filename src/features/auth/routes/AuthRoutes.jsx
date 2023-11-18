import { Route, Routes } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import { LoginPage } from "../pages";

const AuthRoutes = () => (
  <Routes>
    <Route path="/" element={<AuthLayout />}>
      <Route index element={<LoginPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<h1>register</h1>} />
    </Route>
  </Routes>
);

export default AuthRoutes;
