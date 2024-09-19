import thingService from "../services/thing.service";
import { PayloadAction, createAction, createSlice } from "@reduxjs/toolkit";
// import { setError } from "./errors";

export interface Card {  
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: object;
  completed: boolean;
}

interface CardState {
  entities: Card[];
  isLoading: boolean;
}

const initialState: CardState = { entities: [], isLoading: true };

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    recived(state, action: PayloadAction<any>) {
      state.entities = action.payload;
      state.isLoading = false;
    },
    remove: (state, action: PayloadAction<any>) => {
      state.entities = state.entities.filter(
        (el) => el.id !== action.payload
      );
    },
    cardRequested(state) {
      state.isLoading = true;
    },
    cardRequestedFailed(state) {
      state.isLoading = false;
    },
  },
});

const { actions, reducer: cardsReducer } = cardSlice;
const { remove, recived, cardRequested, cardRequestedFailed } = actions;

export const loadCards = () => async (dispatch: any) => {
  dispatch(cardRequested());
  try {
    const data = await thingService.fetch();    
    dispatch(recived(data));
  } catch (error) {
    dispatch(cardRequestedFailed());
    // dispatch(setError(error.message));
  }
};

export const cardRemove = (id: number) => (dispatch: any) => {
  dispatch(remove(id));
};

export const getCards = () => (state: any) => state.cards.entities;
export const getCardsLoadingStatus = () => (state: any) => state.cards.isLoading;


export default cardsReducer;
