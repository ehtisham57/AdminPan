import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import LoginPage from './components/Login/Login';
import { DataPreparation } from './components/DataPreparation/DataPreparation';



function App() {
  return (
    <div >
      {/* <LoginPage /> */}
      <DataPreparation />
    </div>
  );
}

export default App;
