import { useEffect } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { GamePage } from "./pages/game";

import { AppDispatch, RootState } from "./redux";
import { loadRequest } from "./redux/characters/actions";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const Router = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadRequest());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<GamePage />} />
    </Routes>
  );
};
