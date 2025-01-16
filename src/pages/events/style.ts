import styled from "styled-components";

export const EventContainer = styled.div``;

export const SectionsContainer = styled.div`
  width: 100%;
  background-color: rgb(50, 50, 50);
  padding: 40px 0;
  display: flex;
  justify-content: center;
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
