import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Header from "./components/header";
import Footer from "./components/footer";

//pages
import HomePage from "./pages/home";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
