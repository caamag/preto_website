import * as Css from "./style";

//components
import InitialBanner from "../../components/banner";

//images
import banner from "./assets/art2.jpg";
import { images } from "./images";

const ArtDirectionPage = () => {
  return (
    <Css.ArtDirectionContainer>
      <InitialBanner bgImagePath={banner} />

      <Css.SectionsContainer>
        <Css.SectionContent>
          {images.map((img) => (
            <Css.Card src={img} />
          ))}
        </Css.SectionContent>
      </Css.SectionsContainer>
    </Css.ArtDirectionContainer>
  );
};

export default ArtDirectionPage;
