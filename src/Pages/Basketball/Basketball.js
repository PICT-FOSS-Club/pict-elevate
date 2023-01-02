import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import './basketball.css';

const Basketball = () => {
  const takemeback = () =>
  {
    window.location.href = "/";
  }
  return (
    <>
    <div>
    <button className='btnn' onClick={takemeback}> Back</button>
    <div className='pagebody'><h1>This page belongs to Basketball Sport</h1></div>
    </div>
    </>

  );
    
  
}

export default Basketball;
