import { useEffect, useState } from "react";
import { Cell, Board, Button, TurnMessage, ResultMessage } from "./style";

type Players = "O" | "X";

export const BoardComponent = () => {
  const [playerXSelections, setPlayerXSelections] = useState<Number[]>([]);
  const [playerOSelections, setPlayerOSelections] = useState<Number[]>([]);
  let playerSelections: Number[] = [];
  const [matches, setMatches] = useState(0);
  console.log("matchees", matches);
  // Turnos
  const [turn, setTurn] = useState<Players>("X");

  // Vencedor
  const [winner, setWinner] = useState<Players | undefined>(undefined);

  // Empate
  const [draw, setDraw] = useState<boolean | undefined>(undefined);

  const squares = new Array(9).fill(undefined);

  const [boardSquares, setBoardSquares] = useState(squares);

  console.log(boardSquares);

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

    victoryLines.forEach((line) => {
      if (line.every((line) => line === "X")) {
        setWinner("X");
      }
      if (line.every((line) => line === "O")) {
        setWinner("O");
      }
    });
  };

  const checkDraw = () => {
    boardSquares.forEach((cell) => {
      if (cell !== undefined) {
        console.log("draw");
      }
    });
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
      {winner && <ResultMessage>{winner} venceu</ResultMessage>}
      {draw && <ResultMessage>Empate</ResultMessage>}
      {!winner && <TurnMessage>{turn}, ataque agora!</TurnMessage>}

      <Board>
        {boardSquares.map((item, i) => (
          <Cell key={i} onClick={() => handleClick(i)}>
            {item}
          </Cell>
        ))}
      </Board>

      {<Button onClick={reset}>Reiniciar</Button>}
    </>
  );
};

{
  /* <ResultMessage>X é o vitorioso</ResultMessage>
      <TurnMessage>X, ataque agora!</TurnMessage> */
}
{
  /* <ResultMessage>Empate</ResultMessage> */
}
