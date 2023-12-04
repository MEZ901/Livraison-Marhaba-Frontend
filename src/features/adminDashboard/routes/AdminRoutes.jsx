import { Route, Routes } from "react-router";
import { Dashboard } from "../components/Dashboard";
const AdminRoutes = () => (
  <>
    <Routes>
        <Route path="/" element={<Dashboard />}>
           <Route index element={<Dashboard />} />
       </Route> 
    </Routes>
    </>  
  );
  
  export default AdminRoutes;