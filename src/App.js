import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Wallet from './pages/Wallet/index';
import Navbar from './components/Navbar';
import Buying from './pages/Buying';
import Weather from './components/Weather';

function App() {
  return (
    <Router>
      <Weather/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/satinalma" element={<Buying />} />
        <Route path="/cuzdan" element={<Wallet />} />
      </Routes>
    </Router>
  );
}

export default App;
