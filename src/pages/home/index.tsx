import * as Css from "./style";

//components
import InitialBanner from "../../components/banner";

const HomePage = () => {
  return (
    <Css.HomeContainer>
      <InitialBanner>
        <h1>
          <span>Criatividade,</span> <br /> pesquisa e <span>intuição.</span>
        </h1>
        <p>
          Produtora + Estúdio + Escola <br />
          <span>Filme & Fotografia & Design & Educação</span>
        </p>
      </InitialBanner>
    </Css.HomeContainer>
  );
};

export default HomePage;
