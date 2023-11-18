import { Route, Routes } from "react-router";
import AuthLayout from "../layouts/AuthLayout";

const AuthRoutes = () => (
  <Routes>
    <Route path="/" element={<AuthLayout />}>
      <Route index element={<h1>login</h1>} />
      <Route path="login" element={<h1>login</h1>} />
      <Route path="register" element={<h1>register</h1>} />
    </Route>
  </Routes>
);

export default AuthRoutes;
