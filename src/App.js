import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import {Contact} from './components/Contact';
import { About } from './components/About';
import { Products } from './components/Products';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './components/productoSlider/ProductoSlider.css';
AOS.init();


const App = () =>{
  return(
    <BrowserRouter>
     <Routes>
       <Route path="/*" element={<Home />} />
       <Route path="/productos" element={<Products />} />
       <Route path="/contacto" element={<Contact />} />
       <Route path="/acercade" element={<About />} />
     </Routes>
    </BrowserRouter>
  );
};

export default App;
