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

export const SectionItem = styled.div`
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h3 {
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: black;
    background-color: ${colors.primaryYellow};
    font-size: 2rem;
    padding: 5px 10px;
  }
`;

export const BrandContent = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  img {
    width: auto;
    height: 150px;
  }

  @media screen and (max-width: 600px) {
    img {
      height: 100px;
    }
  }
`;
