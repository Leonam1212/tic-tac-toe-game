import { Cell, Board, Button, TurnMessage, WinnerMessage } from "./style";

export const BoardComponent = () => {
  const squares = new Array(9).fill(undefined);

  return (
    <>
      <WinnerMessage>X é o vitorioso</WinnerMessage>
      <TurnMessage>X, ataque agora!</TurnMessage>

      <Board>
        {squares.map((_, i) => (
          <Cell>TIC</Cell>
        ))}
      </Board>

      <Button>Reiniciar</Button>
    </>
  );
};
