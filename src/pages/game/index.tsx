import { BoardComponent } from "../../components/board/Board";
import { Scoreboard } from "../../components/scoreboard";
import { Header, Container, Footer } from "./style";

export const GamePage = () => {
  return (
    <>
      <Header>
        <Scoreboard />
      </Header>
      <Container>
        {/* 
     
        Board 
        */}

        <BoardComponent />
      </Container>
      <Footer>{/* Copiright */}</Footer>
    </>
  );
};
