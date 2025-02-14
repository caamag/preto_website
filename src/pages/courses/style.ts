import styled from "styled-components";
import colors from "../../theme/colors";

export const CoursesContainer = styled.div``;

export const CoursesContent = styled.div`
  width: 100%;
  padding: 40px;
  background-color: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CourseCard = styled.div`
  width: 90%;
  max-width: 1600px;
  height: 350px;
  margin: 20px 0px;
  border: solid 1px white;
  border-radius: 15px;

  display: flex;
  align-items: center;
`;

export const CourseImage = styled.div<{ imgPath: string }>`
  width: 320px;
  height: 320px;
  background-image: url(${(p) => p.imgPath});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: 15px;
  border-radius: 10px;

  display: flex;
  align-items: end;

  h1 {
    font-size: 30px;
    line-height: 35px;
    padding: 5px;
    background-color: ${colors.primaryYellow};
  }
`;
