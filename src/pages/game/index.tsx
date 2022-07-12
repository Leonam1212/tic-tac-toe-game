import { useState } from "react";
import { BoardComponent } from "../../components/board/Board";
import { Scoreboard } from "../../components/scoreboard";
import { SearchCharacter } from "../../components/searchCharacter";
import { CharacterState } from "../../redux/characters/types";
import { useAppDispatch, useAppSelector } from "../../Router";
import { Header, Container, Footer } from "./style";

export const GamePage = () => {
  const dispatch = useAppDispatch();
  const charactersState: CharacterState = useAppSelector(
    (state) => state.reducer
  );

  console.log(charactersState.play);
  return (
    <div>
      {!charactersState.play ? (
        <SearchCharacter />
      ) : (
        <>
          <Header>
            <Scoreboard />
          </Header>
          <Container>
            <BoardComponent />
          </Container>
        </>
      )}
    </div>
  );
};
