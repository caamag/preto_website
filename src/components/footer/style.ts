import styled from "styled-components";
import colors from "../../theme/colors";

export const Footer = styled.footer`
  width: 100%;
  background-color: rgb(0, 0, 0, 0.9);
`;

export const FooterContent = styled.div`
  width: 100%;
  padding: 80px 20px;
  max-width: 1400px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: white;
  }

  @media screen and (max-width: 1450px) {
    padding: 80px 0px;
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;

    h1 {
      margin-bottom: 50px;
    }
  }
`;

export const LogoContent = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
`;

export const ContactContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 800px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const ContactContent = styled.div`
  h3 {
    font-size: 2.5rem;
    color: white;
  }

  li {
    list-style: none;
    margin: 10px 0px;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 2rem;
  }

  @media screen and (max-width: 800px) {
    width: 40%;
    margin: 0 auto;
    margin-bottom: 40px;
  }
`;

export const DividerBlock = styled.div`
  width: 50px;
  height: 3px;
  margin: 5px 0px;
  background-color: ${colors.primaryYellow};
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    margin: 10px 20px 0px 0px;
    width: 35px;
    height: 35px;
    filter: invert(80%);
    transition: 150ms;

    &:hover {
      scale: 1.025;
      filter: invert(100%);
    }
  }

  @media screen and (max-width: 800px) {
    justify-content: start;
  }
`;
