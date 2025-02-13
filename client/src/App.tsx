import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemPage from './pages/ItemPage';
import FormComponent from './components/FormComponent';
import ItemList from './components/ItemList';
import Layout from './components/Layout';
import { Item } from './types/types';


export const CurrentItem = createContext({} as Item);

const App: React.FC = () => {
  const [currentState, setCurrentState] = useState({
    name: "",
    type: "",
    location: "",
    image: "",
    description: "",
    propertyType: "",
    area: "",
    rooms: "",
    price: "",
    brand: "",
    model: "",
    year: "",
    mileage: "",
    serviceType: "",
    experience: "",
    cost: "",
    workShedule: "",
  });
  return (
    <CurrentItem.Provider value={{ currentState, setCurrentState }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/form" element={<FormComponent />} />
            <Route path="/form/:id" element={<FormComponent/>} />
            <Route path="/list" element={<ItemList />} />
            <Route path="/item/:id" element={<ItemPage/>} />
            <Route path="/" element={<Navigate to="/list" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CurrentItem.Provider>

  );
};

export default App;
