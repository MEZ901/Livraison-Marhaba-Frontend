import { Route, Routes } from "react-router";
import { RootLayout } from "./shared/layouts";
import { NotFoundPage } from "./shared/pages";
import AuthRoutes from "./features/auth/routes/AuthRoutes";
import MailRoutes from "./features/mail/routes/MailRoutes";
import { useEffect } from "react";
import socketIOClient from "socket.io-client";
import DeliveryTrackingRoutes from "./features/deliveryTracking/routes/DeliveryTrackingRoutes";
import { AuthMiddleware } from "./features/auth/middlewares";

function App() {
  useEffect(() => {
    const socket = socketIOClient("http://localhost:8080");

    return () => {
      socket.disconnect();
    };
  }, []);

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
