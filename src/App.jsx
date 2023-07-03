import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


import Signup from "./pages/registration/Signup";
import Login from "./pages/registration/Login";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Router>
       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/signup" element={ <Signup/> } />

       </Routes>
      </Router>
    </div>
  )
}

export default App;