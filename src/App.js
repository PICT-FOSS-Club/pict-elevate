import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Basketball from './Pages/Basketball/Basketball';
import Volleyball from './Pages/Volleyball/Volleyball';
import Team from './Pages/Team/Team';
import HashLoader from "react-spinners/HashLoader";
import { useEffect, useState } from 'react';


function App() {

  const [loading, setloading] = useState(false);

  useEffect(() =>{
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 4000)
  }, [])
  return (
    <>
    <div id='app'>
      {
        loading ? 
        <HashLoader
       color="#FF5722"
      loading ={loading}
      size={100}
      speedMultiplier={1}
      className="pageloader"
      />
       :
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/team" element={<Team/>} />
          <Route path="/basketball" element={<Basketball />} />
          <Route path="/volleyball" element={<Volleyball />} />
      </Routes>
       }
       </div>
      </>
  );
}

export default App;
