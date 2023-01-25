import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Stade1 from "./pages/Stade1";
import Organization from "./pages/Organization";
import "./index.css";
import Choose from "./pages/Choose";
import Contact from "./pages/Contact";

function App() {
  return (
    <main className="bg-main-bg">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Choose" element={<Choose/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Organization" element={<Organization/>} />
        <Route path="/Choose/Stade1" element={<Stade1/>} />
        
      </Routes>
    </main>
  );
}

export default App;
