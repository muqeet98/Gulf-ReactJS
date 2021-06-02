import logo from './logo.svg';
import './App.css';
import Login from './Screens/Login/index';
import {BrowserRouter as Router,
       RouteProps,
       Route,
       Switch,
       Link,
       Routes,

} from 'react-router-dom';


import Header from '../src/header/Header'

import About from './Screens/About/index';
import Home from './Screens/Home/index';
import Navbar from "./Navbar/index";

function App() {
  return (

    
     <Router>

       <Navbar/>
           <Routes>
           <Route path="/" element={<HomePage/>} />   
           <Route path="LoginForm" element={<LoginForm/>} />
           <Route path="AboutForm" element={<AboutForm/>} />

           </Routes>
     </Router>


  );
}


function HomePage(){
  return(
    <Home/>
  )
}

function LoginForm(){
  return(
    <Login/>
  )
}
function AboutForm(){
  return(
     <About/>
  )
}



export default App;
