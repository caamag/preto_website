import * as Css from "./style";
import { NavLink } from "react-router-dom";

//icons
import instaIcon from "../../assets/instagram.png";
import faceIcon from "../../assets/facebook.png";
import whatsIcon from "../../assets/whatsapp.png";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <Css.Footer>
      <Css.FooterContent>
        <Css.LogoContent>
          <img src={logo} alt="" />
        </Css.LogoContent>
        <Css.ContactContainer>
          <Css.ContactContent>
            <h3>Sobre</h3>
            <Css.DividerBlock />
            <ul></ul>
          </Css.ContactContent>
          <Css.ContactContent>
            <h3>Serviços</h3>
            <Css.DividerBlock />
            <ul>
              <li>
                <NavLink to={"/estudio"}>Estúdio</NavLink>
              </li>
              <li>
                <NavLink to={"/casamento"}>Casamento</NavLink>
              </li>
              <li>
                <NavLink to={"/brand"}>Brand</NavLink>
              </li>
              <li>
                <NavLink to={"/propaganda"}>Propaganda</NavLink>
              </li>
              <li>
                <NavLink to={"/cursos"}>Cursos</NavLink>
              </li>
            </ul>
          </Css.ContactContent>
          <Css.ContactContent>
            <h3>Contatos</h3>
            <Css.DividerBlock />
            <Css.IconsContainer>
              <a href="" target="blank">
                <img src={instaIcon} alt="" />
              </a>
              <a href="" target="blank">
                <img src={faceIcon} alt="" />
              </a>
              <a href="https://wa.me/5511954060328" target="blank">
                <img src={whatsIcon} alt="" />
              </a>
            </Css.IconsContainer>
          </Css.ContactContent>
        </Css.ContactContainer>
      </Css.FooterContent>
    </Css.Footer>
  );
};

export default Footer;
