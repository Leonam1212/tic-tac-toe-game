import styled from "styled-components";

export const Board = styled.div`
  width: 310px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  gap: 0.6rem;

  @media (min-width: 768px) {
    width: 500px;
  }
`;

export const Cell = styled.div`
  width: 80px;
  height: 80px;

  background: var(--main-white);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;

  cursor: pointer;

  @media (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

export const Button = styled.button`
  background: var(--main-red);
  border-radius: 8px;
  border: none;

  color: var(--main-white);
  font-weight: bold;

  text-transform: uppercase;

  min-width: 250px;
  width: 25%;
  height: 50px;

  :hover {
    transition: 0.2s linear;
    background: var(--main-green);
  }
`;

export const TurnMessage = styled.p`
  color: var(--main-white);
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const WinnerMessage = styled.strong`
  font-size: 2rem;
  color: var(--main-green);
  text-transform: uppercase;
`;
