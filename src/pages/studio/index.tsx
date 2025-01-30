import * as Css from "./style";

//components
import InitialBanner from "../../components/banner";
import { images } from "./images";

const StudioPage = () => {
  return (
    <Css.StudioContainer>
      <InitialBanner bgImagePath="">
        <h1>
          <span>Fotografia</span> e ensaio
          <br />
          de<span> estúdio.</span>
        </h1>
        <br />
        <br />
        <br />
      </InitialBanner>
      <Css.SectionsContainer>
        <Css.SectionContent>
          {images.map((image) => (
            <Css.Card src={image} />
          ))}
        </Css.SectionContent>
      </Css.SectionsContainer>
    </Css.StudioContainer>
  );
};

export default StudioPage;
