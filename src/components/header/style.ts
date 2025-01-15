import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 100px;
  background-color: rgb(0, 0, 0, 0.9);
  position: fixed;

  .active {
    color: white;
  }

  a {
    color: gray;
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: 500;
    padding: 8px 15px;
    border-radius: 5px;
    transition: 150ms;
  }
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  img {
    width: 30px;
    height: 30px;
    filter: invert(100%);
    display: none;
  }

  @media screen and (max-width: 800px) {
    justify-content: space-between;

    h1 {
      margin-left: 15px;
    }

    img {
      display: block;
      margin-right: 15px;
    }
  }
`;

export const Logo = styled.img`
  width: 250px !important;
  height: auto !important;
  display: block !important;
  filter: invert(0%) !important;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const MobileNavigation = styled.div<{ isOpen: boolean }>`
  position: fixed;
  width: 100%;
  height: 100vh;
  padding-top: 100px;
  background-color: rgb(0, 0, 0, 0.9);
  right: ${(p) => (p.isOpen ? "0px" : "-100%")};
  transition: right 250ms ease-in-out;

  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    font-size: 2.5rem;
  }
`;
