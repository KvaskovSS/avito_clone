import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import FormComponent from './components/FormComponent';
import ItemList from './components/ItemList';
import ItemDetails from './components/ItemDetails';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Клон Авито</h1>
        <nav>
          <ul>
            <li>
              <a href="/form">Создать объявление</a>
            </li>
            <li>
              <a href="/list">Список объявлений</a>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/form" element={<FormComponent />} />

          <Route path="/list" element={<ItemList />} />

          <Route path="/item/:id" element={<ItemDetails />} />

          <Route path="/" element={<Navigate to="/list" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;