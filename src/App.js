import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Products } from "./components/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import "./components/productoSlider/ProductoSlider.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/contacto/Header";
import Footer from "./components/footer/Footer";
import WhatsAppButton from "./components/whatsappbutton/WhatsAppButton";
AOS.init();

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/acercade" element={<About />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
};

export default App;
