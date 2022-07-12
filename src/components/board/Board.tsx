import { useEffect, useState } from "react";
import { addWinnerO, addWinnerX, resetWinner } from "../../redux/board/action";
import { Winner } from "../../redux/board/types";
import { useAppDispatch, useAppSelector } from "../../Router";
import { Cell, Board, Button, ResultMessage, TurnAndResults } from "./style";

type Players = "O" | "X";

export const BoardComponent = () => {
  const dispatch = useAppDispatch();

  const winnerState: Winner = useAppSelector((state) => state.boardReducer);

  console.log("AQUI", winnerState);
  const [turn, setTurn] = useState<Players>("X");

  // const [winner, setWinner] = useState<Players | undefined>(undefined);

  const [draw, setDraw] = useState<boolean | undefined>(undefined);

  const squares = new Array(9).fill(undefined);

  const [boardSquares, setBoardSquares] = useState(squares);

  const gameOver = !!winnerState.winner || !!draw;

  const handleClick = (index: number) => {
    if (winnerState.winner) return undefined;
    if (boardSquares[index] !== undefined) return null;

    setBoardSquares(
      boardSquares.map((item, itemIndex) => (itemIndex === index ? turn : item))
    );

    setTurn((element) => (element == "X" ? "O" : "X"));
  };

  const checkVictoryConditions = () => {
    const victoryLines = [
      [boardSquares[0], boardSquares[1], boardSquares[2]],
      [boardSquares[3], boardSquares[4], boardSquares[5]],
      [boardSquares[6], boardSquares[7], boardSquares[8]],

      [boardSquares[0], boardSquares[4], boardSquares[8]],
      [boardSquares[2], boardSquares[4], boardSquares[6]],
      [boardSquares[0], boardSquares[3], boardSquares[6]],

      [boardSquares[1], boardSquares[4], boardSquares[7]],
      [boardSquares[2], boardSquares[5], boardSquares[8]],
    ];

    victoryLines.forEach((line) => {
      if (line.every((line) => line === "X")) {
        dispatch(addWinnerX());
      }
      if (line.every((line) => line === "O")) {
        dispatch(addWinnerO());
      }
    });

    checkDraw();
  };

  const checkDraw = () => {
    if (boardSquares.every((item) => item !== undefined)) {
      setDraw(true);
    }
  };

  const reset = () => {
    dispatch(resetWinner());
    setDraw(undefined);
    setTurn("X");
    setBoardSquares(squares);
  };

  useEffect(checkVictoryConditions, [boardSquares]);

  return (
    <>
      <TurnAndResults>
        <div>{turn}</div>

        <span>
          {winnerState.winner !== undefined && (
            <ResultMessage> {winnerState.winner} venceu</ResultMessage>
          )}
          {draw && <ResultMessage>Empate</ResultMessage>}
        </span>
      </TurnAndResults>

      <Board>
        {boardSquares.map((item, i) => (
          <Cell key={i} onClick={() => handleClick(i)}>
            {item}
          </Cell>
        ))}
      </Board>

      {gameOver && <Button onClick={reset}>Reiniciar</Button>}
    </>
  );
};
