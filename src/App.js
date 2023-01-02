import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Basketball from './Pages/Basketball/Basketball';
import Volleyball from './Pages/Volleyball/Volleyball';
import Contact from './Pages/Contact/Contact';
import Navbar from './components/navbar/Navbar';
import About from './Pages/About/About';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="About" element={<About/>} />
          <Route path="Basketball" element={<Basketball />} />
          <Route path="Volleyball" element={<Volleyball />} />
      </Routes>
    </BrowserRouter> 

    </>
  );
}

export default App;
