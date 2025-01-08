import * as Css from "./style";
import { NavLink } from "react-router-dom";

//components
import InitialBanner from "../../components/banner";

//images
import homeBanner from "../../assets/homeBanner.png";

const HomePage = () => {
  return (
    <Css.HomeContainer>
      <InitialBanner bgImagePath={homeBanner}>
        <h1>
          <span>Criatividade,</span> <br /> pesquisa e <span>intuição.</span>
        </h1>
        <p>
          Produtora + Estúdio + Escola <br />
          <span>Filme & Fotografia & Design & Educação</span>
        </p>
      </InitialBanner>

      <Css.SectionsContainer>
        <Css.SectionContent>
          <NavLink to={"/direca-de-arte"}>
            <Css.SectionItem></Css.SectionItem>
          </NavLink>
          <NavLink to={"/shows-e-eventos"}>
            <Css.SectionItem></Css.SectionItem>
          </NavLink>
          <NavLink to={"/fotografia-de-estudio"}>
            <Css.SectionItem></Css.SectionItem>
          </NavLink>
          <NavLink to={"/corporativos"}>
            <Css.SectionItem></Css.SectionItem>
          </NavLink>
          <NavLink to={"/cursos-e-treinamentos"}>
            <Css.SectionItem></Css.SectionItem>
          </NavLink>
          <NavLink to={"/fotografia-de-produto"}>
            <Css.SectionItem></Css.SectionItem>
          </NavLink>
          <NavLink to={"/design-de-marca"}>
            <Css.SectionItem></Css.SectionItem>
          </NavLink>
          <NavLink to={"/casamento-e-social"}>
            <Css.SectionItem></Css.SectionItem>
          </NavLink>
        </Css.SectionContent>
      </Css.SectionsContainer>
    </Css.HomeContainer>
  );
};

export default HomePage;
