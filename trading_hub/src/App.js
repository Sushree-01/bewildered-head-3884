import './App.css';
import Navbar from './Components/Navbar';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import { Allroutes } from './Routes/Allroutes';

function App() {
 
  return (
    <div className="App">
      <Navbar/>
      <Allroutes/>

   
    </div>
  );
}

export default App;
