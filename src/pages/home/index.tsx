import * as Css from "./style";
import { NavLink } from "react-router-dom";
import { brandIconsList } from "../../global/icons";

//components
import InitialBanner from "../../components/banner";

//images
import homeBanner from "./assets/homeBanner.png";
import mobileBackground from "./assets/mobile-home-background.jpg";
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
      <InitialBanner
        bgImagePath={homeBanner}
        mobileImagePath={mobileBackground}
      >
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
            <Css.SectionItem>
              <img src={artDirection} alt="Direção de arte" />
              <h3>
                Direção <br /> de Arte
              </h3>
            </Css.SectionItem>
          </NavLink>
          <NavLink to={"/shows-e-eventos"}>
            <Css.SectionItem>
              <img src={eventPhoto} alt="Eventos" />
              <h3>
                Shows <br /> e Eventos
              </h3>
            </Css.SectionItem>
          </NavLink>
          <NavLink to={"/fotografia-de-estudio"}>
            <Css.SectionItem>
              <img src={business} alt="" />
              <h3>Corporativos</h3>
            </Css.SectionItem>
          </NavLink>
          <NavLink to={"/corporativos"}>
            <Css.SectionItem>
              <img src={studio} alt="" />
              <h3>
                Fotografia <br /> de Estúdio
              </h3>
            </Css.SectionItem>
          </NavLink>
          <NavLink to={"/cursos-e-treinamentos"}>
            <Css.SectionItem>
              <img src={courses} alt="" />
              <h3>
                Cursos <br /> e Treinamentos
              </h3>
            </Css.SectionItem>
          </NavLink>
          <NavLink to={"/fotografia-de-produto"}>
            <Css.SectionItem>
              <img src={product} alt="" />
              <h3>
                Fotografia <br /> de Produto
              </h3>
            </Css.SectionItem>
          </NavLink>
          <NavLink to={"/design-de-marca"}>
            <Css.SectionItem>
              <img src={brandDesign} alt="" />
              <h3>
                Design <br /> de Marca
              </h3>
            </Css.SectionItem>
          </NavLink>
          <NavLink to={"/casamento-e-social"}>
            <Css.SectionItem>
              <img src={married} alt="" />
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
