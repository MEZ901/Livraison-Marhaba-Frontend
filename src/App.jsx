// import { Route, Routes } from "react-router";
// import { RootLayout } from "./shared/layouts";
// import { NotFoundPage } from "./shared/pages";
// import AuthRoutes from "./features/auth/routes/AuthRoutes";
// import MailRoutes from "./features/mail/routes/MailRoutes";
// import OrderRoute from "./features/ordern/routes/OrderRoute";
// import DeliveryDashboard from "./features/delivery/components/Dashboard";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<RootLayout />}>
//         <Route index element={<h1>Home Page</h1>} />
//         <Route path="/auth/*" element={<AuthRoutes />} />
//         <Route path="/order/" element={<OrderRoute />} />
//         <Route path="/dash/*" element={<DeliveryDashboard />} />

//         <Route path="/mail/*" element={<MailRoutes />} />
//         <Route path="*" element={<NotFoundPage />} />
//       </Route>
//     </Routes>
//   );
// }

// export default App;



// App.js
// import React from 'react';
// import { Provider } from 'react-redux';
// import store from './features/ordern/store';
// import AddToCartForm from './features/ordern/components/OrderForm';
// import ConfirmationPage from './features/ordern/pages/ConfirmationPage';

// const food = {
//   name: 'Example Food',
//   description: 'This is an example food description.',
//   // Add other properties as needed
// };

// const App = () => {
//   return (
//     <Provider store={store}>
//       <div>
//         <AddToCartForm food={food} />
//         <ConfirmationPage />
//         <ConfirmationPage />

//       </div>
//     </Provider>
//   );
// };

// export default App;

// App.js
// import { Route, Routes } from "react-router";
// import { RootLayout } from "./shared/layouts";
// import { NotFoundPage } from "./shared/pages";
// import AuthRoutes from "./features/auth/routes/AuthRoutes";
// import MailRoutes from "./features/mail/routes/MailRoutes";
// // import OrderRoute from "./features/ordern/routes/OrderRoute";
// import { Provider } from "react-redux";
// import store from "./features/ordern/store";
import DeliveryDashboard from "./features/delivery/components/Dashboard";
// import store from ""; // Update with the correct path

function App() {
  return (
    // <Provider store={store}>
    //   <Routes>
    //     <Route path="/" element={<RootLayout />}>
    //       <Route index element={<h1>Home Page</h1>} />
    //       <Route path="/auth/*" element={<AuthRoutes />} />
    //       {/* <Route path="/order/" element={<OrderRoute />} /> */}
    //       <Route path="/dash/" element={<DeliveryDashboard />} />
    //       <Route path="/mail/*" element={<MailRoutes />} />
    //       <Route path="*" element={<NotFoundPage />} />
    //     </Route>
    //   </Routes>
    // </Provider>

    <div>
      <h1>Your App Title</h1>
      {/* Other components or content can go here */}
      <DeliveryDashboard />
    </div>
  );
}

export default App;
