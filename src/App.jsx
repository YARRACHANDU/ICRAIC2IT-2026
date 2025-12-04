import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Committees from "./pages/Committess";
import Location from "./pages/Location";
import Authors from "./pages/Authors Guidlines";

import Registration from "./pages/Registration";
import Awards from "./pages/Awards";
import Accommodation from "./pages/Accommedation";
import Contact from "./pages/ContactUs";
import Gallery from "./pages/Gallery";
import Brochure from "./pages/Brochure";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/committees" element={<Committees />} />
        <Route path="/location" element={<Location />} />
        <Route path="/authors" element={<Authors />} />

        <Route path="/registration" element={<Registration />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/accommodation" element={<Accommodation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/brochure" element={<Brochure />} />
      </Routes>

      <Footer />
    </Router>
  );
}
