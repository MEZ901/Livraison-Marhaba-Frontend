import { Home } from "../componets/Home";
import { Route, Routes } from "react-router";
import { NavBar } from "../componets/Navbar";
const productRoutes = () => (
  <>
  <NavBar/>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
    </>  
  );
  
  export default productRoutes;