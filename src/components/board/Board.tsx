import { useEffect, useState } from "react";
import { Cell, Board, Button, ResultMessage, TurnAndResults } from "./style";

type Players = "O" | "X";

export const BoardComponent = () => {
  const [turn, setTurn] = useState<Players>("X");

  const [winner, setWinner] = useState<Players | undefined>(undefined);

  const [draw, setDraw] = useState<boolean | undefined>(undefined);

  const squares = new Array(9).fill(undefined);

  const [boardSquares, setBoardSquares] = useState(squares);

  const gameOver = !!winner || !!draw;

  const handleClick = (index: number) => {
    if (winner) return undefined;
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

    const vict = victoryLines.forEach((line) => {
      if (line.every((line) => line === "X")) {
        setWinner("X");
      }
      if (line.every((line) => line === "O")) {
        setWinner("O");
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
    setWinner(undefined);
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
          {winner && <ResultMessage>{winner} venceu</ResultMessage>}
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
