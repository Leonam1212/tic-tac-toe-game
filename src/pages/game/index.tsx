import { BoardComponent } from "../../components/board/Board";
import { Scoreboard } from "../../components/scoreboard";
import { SearchCharacter } from "../../components/searchCharacter";
import { CharacterState } from "../../redux/characters/types";
import { useAppSelector } from "../../Router";
import { Header, Container } from "./style";

export const GamePage = () => {
  const charactersState: CharacterState = useAppSelector(
    (state) => state.reducer
  );

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
