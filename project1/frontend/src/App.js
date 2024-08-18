import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes, useNavigate } from 'react-router-dom';
import Menu from './components/menu';
import Login from './components/login';
import Home from './components/home';
import NewAccount from './components/newaccount';
import Plants from './components/plants';
import Trees from './components/trees';
import Newplants from './components/newplants';
import Singleplant from './components/singleplant';
import Newtree from './components/newtrees';
import Singletree from './components/singletree';
import Forgotpassword from './components/forgotpassword';
import Logout from './components/logout';
import Changepass from './components/changepass';
import ContactPage from './components/contact';
import DeleteAcc from './components/deleteacc';
import Editprofile from './editprofile';
import AdminTrees from './components/admintree';
import Sendtrees from './components/sendtrees';
import Sendplants from './components/sendplants';
import Adminplants from './components/adminplant';
import Otpwindow from './components/otpwindow';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Menu/> */}
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/NewAccount' element={<NewAccount/>}/>
          <Route path='/Plants' element={<Sendplants/>}/>
          <Route path='/Plantuser' element={<Plants/>}/>
          <Route path='/Trees' element={<Sendtrees/>}/>
          <Route path='/Treeuser' element={<Trees/>}/>
          <Route path='/Newplants' element={<Newplants/>}/>
          <Route path='/Newtree' element={<Newtree/>}/>
          <Route path='/singleplant/:id' element={<Singleplant/>}/>
          <Route path='/singletree/:id' element={<Singletree/>}/>
          <Route path='/forgotpassword' element={<Forgotpassword/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path='/changepassword' element={<Changepass/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/deleteaccount' element={<DeleteAcc/>}/>
          <Route path='/editprofile' element={<Editprofile/>}/>
          <Route path='/treeadmin' element={<AdminTrees/>}/>
          <Route path='/plantadmin' element={<Adminplants/>}/>
          <Route path='/otpwindow' element={<Otpwindow/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
  