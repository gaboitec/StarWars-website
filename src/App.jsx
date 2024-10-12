import './App.css'
import {Navbar} from './components/Navbar';
import { Home } from './pages/Home';
import {People} from './pages/views/People';
import {Planets} from './pages/views/Planets';
import {Films} from './pages/views/Films';
import {Starships} from './pages/views/Starships';

function App() { 
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/people" element={<People />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/films" element={<Films />} />
        <Route path="/starships" element={<Starships />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
