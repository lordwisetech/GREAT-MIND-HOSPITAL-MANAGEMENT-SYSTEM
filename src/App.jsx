import { BrowserRouter, Routes, Route } from "react-router-dom";
import Features from "./component/Features.jsx";
import "./App.css";
import LoginPage from "./pages/loginPage.jsx";
import AppLayout from "./component/AppLayout.jsx";
import Hero from "./component/hero_section/hero.jsx";
import Landing_Page from "./component/Landing_Page.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route element={<AppLayout />}>
        <Route path="/" element={<Landing_Page />} />
          <Route path="services" element={<Features />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="hero" element={<Hero/>} />
          <Route path="services" element={<h1>Services Page</h1>} />
          <Route path="about" element={<h1>About Page</h1>} />
          <Route path="team" element={<h1>Our Team Page</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
   
}

export default App;
