import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Gif from "./pages/Gif";
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
            <Route path="/generate" element={<Gif />} />
          </Routes>
          <Footer />
        </Router>
      </NextUIProvider>
    </>
  );
}

export default App;
