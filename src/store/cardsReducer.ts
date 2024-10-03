import { Cards } from "./../components/cards/cards";
import thingService from "../services/thing.service";
import { PayloadAction, createAction, createSlice } from "@reduxjs/toolkit";
// import { setError } from "./errors";

export const filters = {
  All: "ALL",
  Like: "Like",
  СategoryElectro: "electronics",
  СategoryMensClothing: "men's clothing",
  СategoryJewelery: "jewelery",
  СategoryWomansClothing: "women's clothing",
};

export interface Card {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: object;
  completed: boolean;
  like: boolean;
}

interface CardState {
  entities: Card[];
  isLoading: boolean;
  filterBy: string;
}

const initialState: CardState = {
  entities: [],
  isLoading: true,
  filterBy: filters.All,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    recived(state, action: PayloadAction<any>) {
      state.entities = action.payload;
      state.isLoading = false;
    },
    remove: (state, action: PayloadAction<any>) => {
      state.entities = state.entities.filter((el) => el.id !== action.payload);
    },
    cardRequested(state) {
      state.isLoading = true;
    },
    cardRequestedFailed(state) {
      state.isLoading = false;
    },
    cardLikeAdd(state, action: PayloadAction<any>) {
      state.entities.map((el) => {
        if (el.id === action.payload) {
          el.like = !el.like;
        }
      });
    },
    filterBy(state, action: PayloadAction<any>) {
      state.filterBy = action.payload;
    },
  },
});

const { actions, reducer: cardsReducer } = cardSlice;
const {
  remove,
  recived,
  cardRequested,
  cardRequestedFailed,
  cardLikeAdd,
  filterBy,
} = actions;

export const loadCards = () => async (dispatch: any) => {
  dispatch(cardRequested());
  try {
    const data = await thingService.fetch();
    data.map((el: any) => {
      el.like = false;
    });
    dispatch(recived(data));
  } catch (error) {
    dispatch(cardRequestedFailed());
    // dispatch(setError(error.message));
  }
};

export const filterByCards = (filters: string) => (dispatch: Function) => {
  dispatch(filterBy(filters));   
};

export const cardRemove = (id: number) => (dispatch: Function) => {
  dispatch(remove(id));
};

export const LikeAdd = (id: any) => (dispatch: Function) => {
  dispatch(cardLikeAdd(id));
};

export const cardRecivedLike =
  (cardsFilterLike: any) => (dispatch: Function) => {
    dispatch(recived(cardsFilterLike));
  };

export const getCards = () => (state: any) => state.cards.entities;
export const getFilter = () => (state: any) => state.cards.filterBy;
export const getCardsLoadingStatus = () => (state: any) =>
  state.cards.isLoading;

export const getCardById = (cardId: number) => (state: any) => {
  if (state.cards.entities) {
    return state.cards.entities.find((card: any) => card.id == cardId);
  }
};

export default cardsReducer;
