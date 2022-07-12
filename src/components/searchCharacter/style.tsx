import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .disabled {
    height: 60px;
    border-radius: 8px;
    background: black;
    border: none;
    color: var(--main-white);
    font-weight: bold;
    cursor: not-allowed;
  }

  .active {
    height: 60px;
    border-radius: 8px;
    background: var(--main-green);
    border: none;
    color: var(--main-white);
    font-weight: bold;
  }
`;

export const Search = styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0.8);
  padding: 0.5rem;
  border-radius: 8px;
  gap: 1rem;
  border: 2px solid var(--main-red);

  img {
    background: black;
    width: 80px;
    height: 80px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
      font-weight: bold;
      color: var(--main-white);

      span {
        color: var(--main-red);
      }
    }

    input {
      padding: 0.5rem;
      outline: none;
    }
  }
`;
