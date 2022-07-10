import styled from "styled-components";

export const ContainerScore = styled.div`
  width: 26.5%;
  height: 80px;
  min-width: 300px;
  margin-top: 70px;
  margin-bottom: -100px;

  border-radius: 8px;
  background: #1c1b29;

  display: flex;

  div {
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
    flex: 1;
    display: flex;
    padding: 5px;
    gap: 5px;

    img {
      border-radius: 8px;
      border: 4px solid var(--main-green);
    }

    p {
      border: 4px solid rgba(255, 255, 255, 0.685);
      border-radius: 8px;
      width: 100%;
      font-size: 50px;
      text-align: center;
      color: var(--main-white);
    }
  }

  span {
    width: 3px;
    border-radius: 8px;
    margin: 8px;
    background: var(--main-white);
  }
`;
