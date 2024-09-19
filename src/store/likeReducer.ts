import { PayloadAction, createSlice } from "@reduxjs/toolkit";






const initialState = {entities: []}

const likeSlice = createSlice({
	name: "like",
	initialState,
	reducers: {
		add(state, action: PayloadAction<any>) {
				state.entities = action.payload
		}
	}
});

