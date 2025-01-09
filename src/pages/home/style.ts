import styled from "styled-components";
import colors from "../../theme/colors";

export const HomeContainer = styled.div``;

export const SectionsContainer = styled.div`
  width: 100%;
  background-color: rgb(50, 50, 50);
  padding: 40px 0px;
`;

export const SectionContent = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  a {
    text-decoration: none;
  }
`;

export const SectionItem = styled.div<{ bgImagePath: string }>`
  width: 300px;
  height: 300px;
  background-image: url(${(p) => p.bgImagePath});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: start;
  align-items: end;

  h3 {
    color: black;
    background-color: ${colors.primaryYellow};
    font-size: 3rem;
    padding: 0px 10px;
    margin-bottom: 10px;
  }
`;
