import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";
import Jobs from "./components/Jobs/Jobs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="jobs" element={<Jobs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
