import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"
import AddProductComponent from './components/AddProductComponent';
import GetProduct from './components/GetProduct';
import LoginComponent from './components/LoginComponent';
import MakePayment from './components/MakePayment';
import SignUpCompenent from './components/SignUpComponent';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Navbar />
        <div className="App">
          <header className="App-header">
            <h1 className='warning'>Flaming Lizard</h1>
          </header>
          <Routes>
            <Route path='/addmeal' element={<AddProductComponent />} />
            <Route path="/" element={<GetProduct />} />
            <Route path='/login' element={<LoginComponent />} />
            <Route path='/makepayment' element={<MakePayment />} />
            <Route path='/signup' element={<SignUpCompenent />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
