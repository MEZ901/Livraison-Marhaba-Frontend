// import { Home } from "../componets/Home";
import { Route, Routes } from "react-router";
import { Dashboard } from "../components";
// import { NavBar } from "../componets/Navbar";
// import  Dashboard  from "../components/Dashboard";

const DeliveryRoutes = () => (
  <>
 
    <Routes>
      <Route path="/dash" element={<Dashboard />}/>
        
      {/* </Route> */}
    </Routes>
    </>  
  );
  
  export default DeliveryRoutes;