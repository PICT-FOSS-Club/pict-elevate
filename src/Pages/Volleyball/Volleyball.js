import React from 'react';
import Navbar from '../../components/navbar/Navbar';

const Volleyball = () => {
  const takemeback = () =>
  {
    window.location.href = "/";
  }
  return (
    <>
    <button className='btnn' onClick={takemeback}> Back</button>
    <div className='pagebody'>
      <h1>This page belongs to Volleyball Sport</h1>
    </div>
    </>
    
  );


}

export default Volleyball;
