import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemPage from './pages/ItemPage';
import FormComponent from './components/FormComponent';
import ItemList from './components/ItemList';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Клон Авито</h1>
        {/* <nav> // уже не надо
          <ul>
            <li>
              <a href="/form">Создать объявление</a>
            </li>
            <li>
              <a href="/list">Список объявлений</a>
            </li>
          </ul>
        </nav> */}

        <Routes>
          <Route path="/" element={<Layout />} >

          <Route path="/form" element={<FormComponent />} />

          <Route path="/list" element={<ItemList />} />

          <Route path="/item/:id" element={<ItemPage />} />
          
          <Route path="/" element={<Navigate to="/list" />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;