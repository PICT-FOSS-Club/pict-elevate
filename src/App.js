import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Basketball from './Pages/Basketball/Basketball';
import Volleyball from './Pages/Volleyball/Volleyball';
import Team from './Pages/Team/Team';


function App() {
  return (
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/team" element={<Team/>} />
          <Route path="/basketball" element={<Basketball />} />
          <Route path="/volleyball" element={<Volleyball />} />
      </Routes>
  );
}

export default App;
