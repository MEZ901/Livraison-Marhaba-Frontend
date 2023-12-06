import { Routes, Route } from "react-router-dom";
import DeliveryTrackingPage from "../pages/DeliveryTrackingPage";

const DeliveryTrackingRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DeliveryTrackingPage />} />
    </Routes>
  );
};

export default DeliveryTrackingRoutes;
