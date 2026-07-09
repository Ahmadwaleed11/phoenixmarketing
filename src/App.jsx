import { useState } from "react";
import "./index.css";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Services from './pages/Services';
import Loader from "./components/common/Loader";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import AboutPage from "./pages/About";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Loader onComplete={() => setIsLoading(false)} />;
  }


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<AboutPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;