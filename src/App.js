import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CompareProductsPage from './pages/CompareProductsPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProductDetailsPage />} />
                <Route path="/compare" element={<CompareProductsPage />} />
            </Routes>
        </Router>
    );
};

export default App;
