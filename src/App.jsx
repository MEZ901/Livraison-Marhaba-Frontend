import { Route, Routes } from "react-router";
import { RootLayout } from "./shared/layouts";
import { NotFoundPage } from "./shared/pages";
import AuthRoutes from "./features/auth/routes/AuthRoutes";
import MailRoutes from "./features/mail/routes/MailRoutes";
import ProductRoutes from "./features/products/routes/ProductRoutes";
import AdminRoutes from "./features/adminDashboard/routes/AdminRoutes";



function App() {
  return (
    
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<h1>Home Page</h1>} />
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/mail/*" element={<MailRoutes />} />
        <Route path="/products/*" element={<ProductRoutes />} />
        <Route path="/dashboard/*" element={<AdminRoutes />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>

  );
}

export default App;
