import { Route, Routes } from "react-router";
import { RootLayout } from "./shared/layouts";
import { NotFoundPage } from "./shared/pages";
import AuthRoutes from "./features/auth/routes/AuthRoutes";
import MailRoutes from "./features/mail/routes/MailRoutes";
import MenuRoutes from "./features/menu/routes/menuRoutes";
import SearchMapRoutes from "./features/searchMap/routes/SearchMapRoutes";
import LandingPage from "./shared/pages/LandingPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<LandingPage/>} />
        <Route path="/auth/*" element={<AuthRoutes />} />
        <Route path="/mail/*" element={<MailRoutes />} />
        <Route path="/menu/*" element={<MenuRoutes />} />
        <Route path="/search/*" element={<SearchMapRoutes />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
