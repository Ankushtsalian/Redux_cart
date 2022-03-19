import "./Styles/Header.css";

import Header from "./Components/Header";
// import Products from "./Components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Components/Checkout";
import { lazy, Suspense } from "react";
//lazy loading
const Products = lazy(() => import("./Components/Products"));

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading..........................</div>}>
                <Products />
              </Suspense>
            }
          />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
