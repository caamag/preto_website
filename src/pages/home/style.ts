import styled from "styled-components";
import colors from "../../theme/colors";

export const HomeContainer = styled.div``;

export const SectionsContainer = styled.div`
  width: 100%;
  background-color: rgb(50, 50, 50);
  padding: 40px 0;
  display: flex;
  justify-content: center;

  a {
    text-decoration: none;
  }
`;

export const SectionContent = styled.div`
  width: 100%;
  max-width: 2400px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 0 16px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SectionItem = styled.div<{ bgImagePath: string }>`
  width: 100%;
  aspect-ratio: 1;
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
