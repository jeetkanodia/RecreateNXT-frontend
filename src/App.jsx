import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Gif from "./pages/Gif";
import Login from "./pages/Login";
import MainHome from "./pages/MainHome";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "./components/Footer";
import { AnimatePresence, useDeprecatedAnimatedState } from "framer-motion";
import Background from "./pages/Background";
import Blobbg from "./pages/Blob";
function App() {
  return (
    <>
      <NextUIProvider>
        <Router>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="*" element={<Blobbg />} />
            </Routes>
          </AnimatePresence>
        </Router>
      </NextUIProvider>
    </>
  );
}

export default App;

{
  /* <Router>
          <AnimatePresence mode="wait">
            {" "}
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/main" element={<MainHome />} />
              <Route path="/background" element={<Background />} />
              <Route path="/blob" element={<Blobbg />} />
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
        </Router> */
}
