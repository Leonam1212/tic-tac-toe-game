import { Route, Routes } from "react-router-dom";
import { GamePage } from "./pages/game";

export const Router = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home/>}></Route> */}
      <Route path="/" element={<GamePage />} />
    </Routes>
  );
};
