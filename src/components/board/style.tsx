import styled, { keyframes } from "styled-components";

const spin = keyframes`
    50% {
    background-position: 100% 50%;
  }
`;

export const Board = styled.div`
  width: 310px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  gap: 1rem;

  @media (min-width: 768px) {
    width: 500px;
  }
`;

export const Cell = styled.div`
  width: 80px;
  height: 80px;

  background: #1c1b29;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);

  color: var(--main-white);
  font-size: 45px;
  font-weight: bold;

  --border-width: 5px;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  cursor: pointer;

  @media (min-width: 768px) {
    width: 150px;
    height: 150px;
  }

  :after {
    border: 8px;
    position: absolute;
    content: "";
    top: calc(-1 * var(--border-width));
    left: calc(-1 * var(--border-width));
    z-index: -1;
    width: calc(100% + var(--border-width) * 2);
    height: calc(100% + var(--border-width) * 2);
    background: linear-gradient(
      60deg,
      #fd004c,
      #fe9000,
      #3edf4b,
      #3363ff,
      #b102b7,
      #fff020,
      #fd004c
    );
    background-size: 300% 300%;
    background-position: 0 50%;
    border-radius: calc(2 * var(--border-width));
    animation: ${spin} 6s infinite linear;
  }
`;

export const Button = styled.button`
  background: var(--main-green);
  border-radius: 8px;
  border: none;

  color: var(--main-white);
  font-weight: bold;

  text-transform: uppercase;

  min-width: 250px;
  width: 26.5%;
  height: 50px;

  :hover {
    transition: 0.2s linear;
    background: var(--main-red);
  }
`;

export const TurnMessage = styled.p`
  color: var(--main-white);
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ResultMessage = styled.strong`
  font-size: 2rem;
  color: var(--main-green);
  text-transform: uppercase;
`;

export const TurnAndResults = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px;
  background: var(--main-white);
  width: 26.5%;
  min-width: 300px;
  border-radius: 8px;

  div {
    background: var(--main-green);
    width: 30%;
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    border-radius: 8px;
    color: var(--main-white);
  }

  span {
    flex: 1;
    display: flex;
    justify-content: center;
  }
`;
