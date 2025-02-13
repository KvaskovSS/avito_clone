import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemPage from './pages/ItemPage';
import FormComponent from './components/FormComponent';
import ItemList from './components/ItemList';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/form" element={<FormComponent />} />
          <Route path="/form/:id" element={<FormComponent />} />
          <Route path="/list" element={<ItemList />} />
          <Route path="/item/:id" element={<ItemPage />} />
          <Route path="/" element={<Navigate to="/list" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
