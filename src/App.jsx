import { Route, Routes } from "react-router";
import { RootLayout } from "./shared/layouts";
import { NotFoundPage } from "./shared/pages";
import AuthRoutes from "./features/auth/routes/AuthRoutes";
import MailRoutes from "./features/mail/routes/MailRoutes";
import DeliveryTrackingRoutes from "./features/deliveryTracking/routes/DeliveryTrackingRoutes";
import { AuthMiddleware } from "./features/auth/middlewares";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<h1>Home Page</h1>} />
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/mail/*" element={<MailRoutes />} />
        <Route
          path="/delivery-tracking/*"
          element={
            <AuthMiddleware>
              <DeliveryTrackingRoutes />
            </AuthMiddleware>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
