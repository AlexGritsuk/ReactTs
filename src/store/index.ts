import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./cardsReducer";

// const rootReducer = combineReducers({
//   cards: cardsReducer
// });

// export function createStore() {
//   return configureStore({
//     reducer: rootReducer,
//     devTools: process.env.NODE_ENV !== 'production'
//   });
// }

const store = configureStore({
  reducer: {
    cards: cardsReducer,    
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch