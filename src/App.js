import { Routes, Route } from 'react-router';
import './App.css';
import About from './Components/About';
import Friends from './Components/Friends';
import Home from './Components/Home';
import Links from './Components/Links';

function App() {
  return (
    <div className="App">
      <Links />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/friends' element={<Friends />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
