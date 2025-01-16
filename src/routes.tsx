import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Header from "./components/header";
import Footer from "./components/footer";

//pages
import HomePage from "./pages/home";
import EventPage from "./pages/events";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shows-e-eventos" element={<EventPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
