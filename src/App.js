import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"
import AddProductComponent from './components/AddProductComponent';
import GetProduct from './components/GetProduct';

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="App">
          <header className="App-header">
            <h1 className='warning'>Flaming Lizard</h1>
          </header>
          <Routes>
            <Route path='/addmeal' element={<AddProductComponent />} />
            <Route path="/menu" element={<GetProduct />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
