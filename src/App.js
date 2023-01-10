import './App.css';
import Home from './Pages/Home/Home';
import { HashRouter, Routes, Route,  } from "react-router-dom";
import Basketball from './Pages/Basketball/Basketball';
import Volleyball from './Pages/Volleyball/Volleyball';
import Team from './Pages/Team/Team';


function App() {
  return (
    <>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="Team" element={<Team/>} />
          <Route path="Basketball" element={<Basketball />} />
          <Route path="Volleyball" element={<Volleyball />} />
      </Routes>
    </HashRouter> 

    </>
  );
}

export default App;
