import { useEffect } from "react";
import { Winner } from "../../redux/board/types";
import { CharacterState } from "../../redux/characters/types";
import { addPointO, addPointX } from "../../redux/scoreboard/actions";
import { PointsState } from "../../redux/scoreboard/types";
import { useAppDispatch, useAppSelector } from "../../Router";
import { ContainerScore } from "./style";

export const Scoreboard = () => {
  const dispatch = useAppDispatch();

  const winnerState: Winner = useAppSelector((state) => state.boardReducer);
  const charactersState: CharacterState = useAppSelector(
    (state) => state.reducer
  );

  const pointState: PointsState = useAppSelector(
    (state) => state.pointsReducer
  );

  const pointsX = () => {
    dispatch(addPointX());
  };

  const pointO = () => {
    dispatch(addPointO());
  };

  useEffect(() => {
    if (winnerState.winner === "X") {
      pointsX();
    }
    if (winnerState.winner === "O") {
      pointO();
    }
  }, [winnerState.winner]);

  return (
    <ContainerScore>
      <div>
        <img src={charactersState.thumbX} />
        <p>{pointState.pointsX}</p>
      </div>
      <span></span>
      <div>
        <img src={charactersState.thumbO} />
        <p>{pointState.pointsO}</p>
      </div>
    </ContainerScore>
  );
};
