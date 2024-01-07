import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Gif from "./pages/Gif";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";
function App() {
  return (
    <>
      <NextUIProvider>
        <Router>
          <AnimatePresence mode="wait">
            {" "}
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/*"
                element={
                  <div>
                    <Navbar />
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/generate" element={<Gif />} />
                    </Routes>
                  </div>
                }
              />
            </Routes>
          </AnimatePresence>

          <Footer />
        </Router>
      </NextUIProvider>
    </>
  );
}

export default App;
