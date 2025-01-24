import React from "react";
import "./App.css";
import TransactionsList from "./pages/TransactionsList/TransactionsList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TransactionDetail from "./pages/TransactionDetail/TransactionDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TransactionsList />} />
        <Route path="/transactions/:id" element={<TransactionDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
