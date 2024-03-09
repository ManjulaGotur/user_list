
import './App.css';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Login from './components/Login';
import Users from './components/Users';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Login/>}></Route>
     <Route path='/user-list' element={<Users/>}></Route>
     <Route path='/create' element={<CreateUser/>}></Route>
     <Route path='/update/:id' element={<UpdateUser/>}></Route>
   
     
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
