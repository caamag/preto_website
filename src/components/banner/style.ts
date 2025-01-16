import styled from "styled-components";
import colors from "../../theme/colors";

export const BannerContainer = styled.div<{
  bgImagePath: string;
  mobilebg: string;
}>`
  width: 100%;
  height: 100vh;
  background-color: rgb(50, 50, 50);
  background-image: url(${(p) => p.bgImagePath || ""});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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

  @media screen and (max-width: 800px) {
    background-image: url(${(p) => p.mobilebg || ""});

    h1 {
      font-size: 3rem;
      line-height: 30px;
    }

    p {
      font-size: 1.6rem;
    }

    justify-content: center;
  }
`;
