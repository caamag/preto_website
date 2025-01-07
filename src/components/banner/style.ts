import styled from "styled-components";
import colors from "../../theme/colors";
import { keyframes } from "styled-components";

const FadeInText = keyframes`
  0% {
    opacity: 0;
    margin-left: 150px;
  } 
  100% {
    opacity: 1;
    margin-left: 0px;
  }
`;

export const BannerContainer = styled.div<{ bgImagePath?: string }>`
  width: 100vw;
  height: 100vh;
  background-color: rgb(50, 50, 50);
  background-image: url(${(p) => p.bgImagePath || ""});
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  text-align: center;

  span {
    color: ${colors.primaryYellow};
    font-weight: bold;
  }

  p {
    margin: 15px 0px 40px 0px;
    font-size: 3rem;
    font-weight: 300;

    span {
      color: white;
    }
  }

  h1,
  p {
    animation: ${FadeInText} 350ms;
  }

  @media screen and (max-width: 800px) {
    h1 {
      font-size: 3.5rem;
    }

    p {
      font-size: 1.6rem;
    }
  }
`;
