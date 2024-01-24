import { combineReducers } from "redux";
import ThemeReducer from "./ThemeReducer";
import userReducer from "./UserReducer";

const reducers = combineReducers({
  theme: ThemeReducer,
  user: userReducer,
});

export default reducers;
