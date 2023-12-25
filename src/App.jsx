import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <NextUIProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </Router>
      </NextUIProvider>
    </>
  );
}

export default App;
