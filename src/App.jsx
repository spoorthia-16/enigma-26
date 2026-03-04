import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";       // create if not exists
import Events from "./pages/Events";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;