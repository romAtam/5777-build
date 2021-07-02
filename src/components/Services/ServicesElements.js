import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 800px;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  /* @media screen and (max-width: 1080px) {
  } */
  @media screen and (max-width: 768px) {
    height: 1800px;
  }
`;
export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 46px;
  padding: 0 50px;

  @media screen and (max-width: 1080px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 26px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
export const ServicesCard = styled.div`
  background-color: #deedf0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
export const ServicesH2 = styled.h2`
  color: orange;
  font-size: 1rem;
  margin-bottom: 10px;
`;
export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  color: #ff7600;
  &:hover {
    color: red;
  }
`;
