import { BoardComponent } from "../../components/board/Board";
import { Header, Container, Footer } from "./style";

export const GamePage = () => {
  return (
    <>
      <Header></Header>
      <Container>
        {/* 
        Placar
        Board 
        */}
        <BoardComponent />
      </Container>
      <Footer>{/* Copiright */}</Footer>
    </>
  );
};
