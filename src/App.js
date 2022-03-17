import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";
function App() {
  
  return (
    <div id="main">
      {/* <div>currently logged in as {currentUser?.email}</div> */}
      <div id="fields">
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
        </Router>
      {/* <Signup /> */}
    </div>
    </div>
  );
}

export default App;
 //env file