import './App.css';
import Home from './home';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Skills from './skills';
import { Card } from '@material-tailwind/react';
import Experience from './experience';
import Education from './education';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/card" element={<Card />} />
        <Route path="/exp" element={<Experience/>} />
        <Route path="/edu" element={<Education/>} />
      </Routes>
    </BrowserRouter>
     </>
  )
}

export default App
