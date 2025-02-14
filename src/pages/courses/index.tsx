import * as Css from "./style";
import { images } from "./images";

//components
import InitialBanner from "../../components/banner";

const CoursesPage = () => {
  return (
    <Css.CoursesContainer>
      <InitialBanner bgImagePath={images[0]}>
        <h1>
          <span>Cursos</span> <br />e <span>treinamentos.</span>
        </h1>
        <p>
          Produtora + Estúdio + Escola <br />
          <span>Filme & Fotografia & Design & Educação</span>
        </p>
      </InitialBanner>

      <Css.CoursesContent>
        <Css.CourseCard>
          <Css.CourseImage imgPath={images[1]}>
            <h1>
              Curso de <br />
              Fotografia
            </h1>
          </Css.CourseImage>
        </Css.CourseCard>
        <Css.CourseCard>
          <Css.CourseImage imgPath={images[1]}>
            <h1>
              Edição de <br />
              Fotografia
            </h1>
          </Css.CourseImage>
        </Css.CourseCard>
        <Css.CourseCard>
          <Css.CourseImage imgPath={images[2]}>
            <h1>
              Edição de <br />
              Vídeo
            </h1>
          </Css.CourseImage>
        </Css.CourseCard>
        <Css.CourseCard>
          <Css.CourseImage imgPath={images[3]}>
            <h1>
              Direção de <br />
              Arte
            </h1>
          </Css.CourseImage>
        </Css.CourseCard>
        <Css.CourseCard>
          <Css.CourseImage imgPath={images[4]}>
            <h1>Consultoria</h1>
          </Css.CourseImage>
        </Css.CourseCard>
      </Css.CoursesContent>
    </Css.CoursesContainer>
  );
};

export default CoursesPage;
