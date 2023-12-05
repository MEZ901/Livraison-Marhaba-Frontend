import {  Route, Routes } from 'react-router-dom';
import MenuLayout from '../layouts/MenuLayout';
import MenuPage from '../pages/MenuPage';
import MenuDetails from '../pages/MenuDetails';

const MenuRoutes = () => (
    <Routes>
      <Route path="/" element={<MenuLayout />}>
        <Route index element={<MenuPage />} />
        <Route path="/:id" element={<MenuDetails />} />
      </Route>
    </Routes>
);

export default MenuRoutes;
