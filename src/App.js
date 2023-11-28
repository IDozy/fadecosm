import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { Contact } from "./components/Contact";
import { About } from "./components/About";

import ProyectoDetalle from "./components/proyectos/ProyectoDetalle";
import PaginaSubcategoria from "./components/subcategorias/PaginaSubcategoria";
import AOS from "aos";
import "aos/dist/aos.css";
import "./components/productoSlider/ProductoSlider.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/contacto/Header";
import Footer from "./components/footer/Footer";
import WhatsAppButton from "./components/whatsappbutton/WhatsAppButton";
import { Helmet } from "react-helmet";
AOS.init();

const App = () => {
  return (
    <BrowserRouter>
    <Helmet>
    <meta name="author" content="FADECO SAN MARTIN"/>
    <meta name="keywords" content="FADECO SAN MARTIN, prefabricados de concreto, Cajamarca, construcción, proyectos, obras civiles, Concreto, fadeco"/>

    </Helmet>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/proyectos/:id" element={<ProyectoDetalle />} />
        <Route path="/productos/:categoria/:subcategoria" element={<PaginaSubcategoria/>} />
        <Route path="/*" element={<Home />} />
       
        <Route path="/contacto" element={<Contact />} />
        <Route path="/nosotros" element={<About />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
};

export default App;
