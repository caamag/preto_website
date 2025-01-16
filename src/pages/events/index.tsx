import * as Css from "./style";

//componets
import InitialBanner from "../../components/banner";

//images
import eventImage from "./assets/event-banner.jpeg";

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
        <Css.SectionContent></Css.SectionContent>
      </Css.SectionsContainer>
    </Css.EventContainer>
  );
};

export default EventPage;
