import { Routes, Route } from "react-router";
import "./App.css";
import About from "./Components/About";
import Date from "./Components/Date";
import Friends from "./Components/Friends";
import Home from "./Components/Home";
import Links from "./Components/Links";
import Vote from "./Components/Vote";
import Trip from "./Components/Trip";

function App() {
  return (
    <div className="App">
      <Links />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/about" element={<About />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/date" element={<Date />} />
        <Route path="/trip" element={<Trip />} />
      </Routes>
    </div>
  );
}

export default App;
