// import { Home } from "../componets/Home";
import { Route, Routes } from "react-router";
import { Dashboard } from "../components";

const DeliveryRoutes = () => (
  <>
 
    <Routes>
      <Route path="/dash" element={<Dashboard />}/>
        
     
    </Routes>
    </>  
  );
  
  export default DeliveryRoutes;