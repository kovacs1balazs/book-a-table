import "./App.css";
import { Route, BrowserRouter as Router, Routes, NavLink } from "react-router-dom";
import BackgroundSwitcher from "./components/BackgroundComponent";

import Book from "./pages/Book";
import Home from "./pages/Home";

import logo from "./images/logo.png";

function App() {
  document.title = "Donna Mamma";
  return (
    <Router>
      <div className="App">
        <NavLink id="RouterNavLink" to="/">
          <img className="logo" src={logo} alt="" />
        </NavLink>
        <BackgroundSwitcher />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Book/>} />
      </Routes>
    </Router>
  );
}

export default App;
