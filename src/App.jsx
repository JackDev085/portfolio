import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import ScrollToTop from "./components/ScroolToTop";
import Projects from "./pages/Projects";
import ContactPage from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-black min-h-screen text-white font-sans">
        <ScrollToTop />
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
