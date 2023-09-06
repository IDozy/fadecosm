
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';


const App = () =>{
  return(
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/contacto" element={<Contact />} />
     </Routes>
    </BrowserRouter>
  );
};
<a href='/contact'>Contacto</a>
export default App;
