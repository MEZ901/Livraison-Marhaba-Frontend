import { Route, Routes } from "react-router";

// import React from 'react';
// import { Provider } from 'react-redux';
import store from './features/ordern/store';
import AddToCartForm from './features/ordern/components/OrderForm';
import ConfirmationPage from './features/ordern/pages/ConfirmationPage';
import DeliveryDashboard from "./features/delivery/components/Dashboard";

// import { MakeOrder } from "../pages/makeOrder";

const food = {
  name: 'Example Food',
  description: 'This is an example food description.',
  // Add other properties as needed
};
const OrderRoute = () => (

  // <Routes>
  //   <Route>
  //   <Route path="/make-order" element={<MakeOrder />} />
  //   </Route>
  // </Routes>

  
    <Routes  store={store}>
    {/* //       <Route path="/" /> */}
             <Route index element={<h1>Home Page</h1>} />
             <Route path="/dashboard" element={<DeliveryDashboard />} />
             <Route path="/order" element={<    AddToCartForm food={food}  />} />
    
            <Route path="/confirm" element={<ConfirmationPage />} />
            {/* <Route path="*" element={<NotFoundPage />} /> */}
    {/* //       </Route> */}
       </Routes>
);

export default OrderRoute;

// import { Route, Routes } from "react-router";
// import AuthLayout from "../layouts/AuthLayout";
// import { LoginPage, RegisterPage } from "../pages";

// const AuthRoutes = () => (
//   <Routes>
//     <Route path="/" element={<AuthLayout />}>
//       <Route index element={<LoginPage />} />
//       <Route path="login" element={<LoginPage />} />
//       <Route path="register" element={<RegisterPage />} />
//     </Route>
//   </Routes>
// );

// export default AuthRoutes;

