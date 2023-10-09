
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import {Contact} from './components/Contact';
import { About } from './components/About';
import { Products } from './components/Products';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


const App = () =>{
  return(
    <BrowserRouter>
     <Routes>
       <Route path="/productos" element={<Products />} />
       <Route path="/*" element={<Home />} />
       <Route path="/contacto" element={<Contact />} />
       <Route path="/acercade" element={<About />} />
     </Routes>
    </BrowserRouter>
  );
};

export default App;
