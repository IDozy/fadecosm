
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import { About } from './components/About';



const App = () =>{
  return(
    <BrowserRouter>
     <Routes>
     <Route path="/*" element={<Home />} />
       <Route path="/inicio" element={<Home />} />
       <Route path="/contacto" element={<Contact />} />
       <Route path="/acercade" element={<About />} />
     </Routes>
    </BrowserRouter>
  );
};

export default App;
