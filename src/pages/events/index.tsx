import * as Css from "./style";

//componets
import InitialBanner from "../../components/banner";

//images
import eventImage from "./assets/event-banner.jpeg";
import palco1 from "./assets/palco1.png";
import palco2 from "./assets/palco2.jpeg";
import palco3 from "./assets/palco3.jpeg";
import palco4 from "./assets/palco4.jpeg";
import palco5 from "./assets/palco5.jpeg";
import palco6 from "../home/assets/eventPhoto.png";
import palco7 from "../home/assets/business.png";

const EventPage = () => {
  return (
    <Css.EventContainer>
      <InitialBanner bgImagePath={eventImage}>
        <h1>
          <span>Fotografia</span> e filme
          <br />
          de palco e <span>eventos.</span>
        </h1>
        <br />
        <br />
        <br />
      </InitialBanner>

      <Css.SectionsContainer>
        <Css.SectionContent>
          <Css.Card src={eventImage} />
          <Css.Card src={palco1} />
          <Css.Card src={palco2} />
          <Css.Card src={palco3} />
          <Css.Card src={palco4} />
          <Css.Card src={palco5} />
          <Css.Card src={palco6} />
          <Css.Card src={palco7} />
        </Css.SectionContent>
      </Css.SectionsContainer>
    </Css.EventContainer>
  );
};

export default EventPage;
