import * as Css from "./style";
import { NavLink } from "react-router-dom";
import { brandIconsList } from "../../global/icons";

//components
import InitialBanner from "../../components/banner";

//images
import homeBanner from "./assets/homeBanner.png";
import artDirection from "./assets/direcao-arte.png";
import eventPhoto from "./assets/eventPhoto.png";
import studio from "./assets/studio.png";
import business from "./assets/business.png";
import courses from "./assets/courses.png";
import product from "./assets/product.png";
import brandDesign from "./assets/brandDesign.png";
import married from "./assets/married.png";

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
            <Css.SectionItem bgImagePath={artDirection}>
              <h3>
                Direção <br /> de Arte
              </h3>
            </Css.SectionItem>
          </NavLink>
          <NavLink to={"/shows-e-eventos"}>
            <Css.SectionItem bgImagePath={eventPhoto}>
              <h3>
                Shows <br /> e Eventos
              </h3>
            </Css.SectionItem>
          </NavLink>
          <NavLink to={"/fotografia-de-estudio"}>
            <Css.SectionItem bgImagePath={business}>
              <h3>Corporativos</h3>
            </Css.SectionItem>
          </NavLink>
          <NavLink to={"/corporativos"}>
            <Css.SectionItem bgImagePath={studio}>
              <h3>
                Fotografia <br /> de Estúdio
              </h3>
            </Css.SectionItem>
          </NavLink>
          <NavLink to={"/cursos-e-treinamentos"}>
            <Css.SectionItem bgImagePath={courses}>
              <h3>
                Cursos <br /> e Treinamentos
              </h3>
            </Css.SectionItem>
          </NavLink>
          <NavLink to={"/fotografia-de-produto"}>
            <Css.SectionItem bgImagePath={product}>
              <h3>
                Fotografia <br /> de Produto
              </h3>
            </Css.SectionItem>
          </NavLink>
          <NavLink to={"/design-de-marca"}>
            <Css.SectionItem bgImagePath={brandDesign}>
              <h3>
                Design <br /> de Marca
              </h3>
            </Css.SectionItem>
          </NavLink>
          <NavLink to={"/casamento-e-social"}>
            <Css.SectionItem bgImagePath={married}>
              <h3>
                Casamento <br /> e Social
              </h3>
            </Css.SectionItem>
          </NavLink>
        </Css.SectionContent>
      </Css.SectionsContainer>
      <Css.BrandContent>
        {Object.entries(brandIconsList).map(([key, icon]) => (
          <img src={icon} alt={key} />
        ))}
      </Css.BrandContent>
    </Css.HomeContainer>
  );
};

export default HomePage;
