import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, getCharactersRequest, RootState } from "./redux";
import { Router } from "./Router";
import GlobalStyle from "./styles/global";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const App = () => {
  const dispatch = useAppDispatch();
  const charactersState = useAppSelector((state) => state.characters);

  // useEffect(() => {
  //   dispatch(getCharactersRequest());
  // }, []);

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};
