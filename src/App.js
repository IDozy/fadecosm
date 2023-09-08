
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';



const App = () =>{
  return(
    <BrowserRouter>
     <Routes>
     <Route path="/*" element={<Home />} />
       <Route path="/inicio" element={<Home />} />
       <Route path="/contacto" element={<Contact />} />
     </Routes>
    </BrowserRouter>
  );
};

export default App;
