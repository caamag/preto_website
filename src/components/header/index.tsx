import * as Css from "./style";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

//images
import sideMenu from "../../assets/side-menu.png";
import logo from "../../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const sideMenuController = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <Css.Header>
      <Css.HeaderContent>
        <Css.Logo src={logo} alt="Logo" />

        <Css.Navigation>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/estudio"}>Estúdio</NavLink>
          <NavLink to={"/casamento"}>Casamento</NavLink>
          <NavLink to={"/brand"}>Brand</NavLink>
          <NavLink to={"/propaganda"}>Propaganda</NavLink>
          <NavLink to={"/curso"}>Curso</NavLink>
        </Css.Navigation>

        <button
          onClick={() => {
            sideMenuController();
          }}
        >
          <img src={sideMenu} alt="Menu lateral" />
        </button>
      </Css.HeaderContent>

      <Css.MobileNavigation isOpen={isOpen}>
        <NavLink to={"/"}>Home</NavLink>
        <br />
        <NavLink to={"/estudio"}>Estúdio</NavLink>
        <br />
        <NavLink to={"/casamento"}>Casamento</NavLink>
        <br />
        <NavLink to={"/brand"}>Brand</NavLink>
        <br />
        <NavLink to={"/propaganda"}>Propaganda</NavLink>
        <br />
        <NavLink to={"/curso"}>Curso</NavLink>
      </Css.MobileNavigation>
    </Css.Header>
  );
};

export default Header;
