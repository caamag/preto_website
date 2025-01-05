import { BrowserRouter, Routes } from "react-router-dom";

//components
import Header from "./components/header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes></Routes>
    </BrowserRouter>
  );
};

export default Router;
