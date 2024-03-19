import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "../src/styles/App.css";
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => (
    <div className="App">
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    </div>
);



export default App;