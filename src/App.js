import React from 'react';
import logo from './logo.svg';
import './App.css';
import StyledComponentsEx from './StyledComponentsEx/StyledComponentsEx';
import CssModuleEx from './cssModule/CssModuleEx';
import CssBaseEx from './cssBase/CssBaseEx';
import CssInJsEx from './cssInJs/CssInJsEx';

function App() {
  return (
    <div className="App">
      <StyledComponentsEx/>
      <CssModuleEx/>
      <CssBaseEx/>
      <CssInJsEx/>
    </div>
  );
}

export default App;
