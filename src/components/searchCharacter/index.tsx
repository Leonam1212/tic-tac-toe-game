import {
  loadFailureO,
  loadFailureX,
  playGame,
  setThumbO,
  setThumbX,
} from "../../redux/characters/actions";
import { CharacterState } from "../../redux/characters/types";
import { useAppDispatch, useAppSelector } from "../../Router";
import { Container, Content, Search } from "./style";

export const SearchCharacter = () => {
  const dispatch = useAppDispatch();
  const charactersState: CharacterState = useAppSelector(
    (state) => state.reducer
  );

  const filterCharX = (name: string) => {
    try {
      const char = charactersState.data.filter((char) =>
        char.name.includes(name)
      );
      const thumb = `${char[0].thumbnail.path}.${char[0].thumbnail.extension}`;
      console.log(thumb);
      if (char.length !== 0) {
        dispatch(setThumbX(thumb));
      }
    } catch (error) {
      dispatch(loadFailureX());
    }
  };

  const filterCharO = (name: string) => {
    try {
      const char = charactersState.data.filter((char) =>
        char.name.includes(name)
      );
      const thumb = `${char[0].thumbnail.path}.${char[0].thumbnail.extension}`;

      dispatch(setThumbO(thumb));
    } catch (error) {
      dispatch(loadFailureO());
    }
  };

  const play = () => {
    dispatch(playGame());
  };

  return (
    <Container>
      <Content>
        <Search>
          <img
            src={
              charactersState.thumbX !== ""
                ? charactersState.thumbX
                : "https://cdn4.iconfinder.com/data/icons/famous-characters-add-on-vol-1-flat/48/Famous_Character_-_Add_On_1-14-512.png"
            }
          ></img>

          <div>
            <label>
              Personagem I: {charactersState.errorX && <span>Inválido</span>}
            </label>
            <input
              onChange={(e) => filterCharX(e.currentTarget.value)}
              placeholder="Ex.: Abyss"
            ></input>
          </div>
        </Search>
        <Search>
          <img
            src={
              charactersState.thumbO !== ""
                ? charactersState.thumbO
                : "https://cdn4.iconfinder.com/data/icons/famous-characters-add-on-vol-1-flat/48/Famous_Character_-_Add_On_1-14-512.png"
            }
          ></img>

          <div>
            <label>
              Personagem II - {charactersState.errorO && <span>Inválido</span>}
            </label>
            <input
              onChange={(e) => filterCharO(e.currentTarget.value)}
              placeholder="Ex.: Abyss"
            ></input>
          </div>
        </Search>

        {charactersState.thumbX === "" || charactersState.thumbO === "" ? (
          <button className="disabled">JOGAR</button>
        ) : (
          <button onClick={() => play()} className="active">
            JOGAR
          </button>
        )}
      </Content>
    </Container>
  );
};
