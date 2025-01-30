import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//components
import Header from "./components/header";
import Footer from "./components/footer";

//pages
import HomePage from "./pages/home";
import EventPage from "./pages/events";
import StudioPage from "./pages/studio";

const Router = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shows-e-eventos" element={<EventPage />} />
        <Route path="/estudio" element={<StudioPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
