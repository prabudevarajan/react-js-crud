import './App.css';
import Home from './Component/Index';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEmployees from './Component/AddEmployees';
import EditEmployees from './Component/EditEmployees';

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/create' element={<AddEmployees/>}/>
          <Route path='/edit' element={<EditEmployees/>}/>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
