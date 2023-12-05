import {  Route, Routes } from 'react-router-dom';
import SearchLayout from '../layouts/SearchLayout';
import SearchPage from '../pages/SearchPage';

const SearchMapRoutes = () => (
    <Routes>
      <Route path="/" element={<SearchLayout />}>
        <Route index element={<SearchPage />} />
      </Route>
    </Routes>
);

export default SearchMapRoutes;
