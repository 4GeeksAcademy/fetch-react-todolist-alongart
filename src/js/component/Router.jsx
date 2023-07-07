import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import Home from './home.jsx';
import TodoPage from './TodoPage.jsx';
import ContextProvider from '../Context.jsx';


export default function Router() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo/:index" element={<TodoPage />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}