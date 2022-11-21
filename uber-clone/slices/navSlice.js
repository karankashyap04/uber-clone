/* We will use navSlice as a portion of the Redux data layer to store (and fetch)
 * navigation data: trip origin, destination, travel time
 */

import { createSlice } from "@reduxjs/toolkit";

// initial state values for data stored in navSlice data layer
const initialState = {
  origin: null,
  destination: null,
  travelTime: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducer: {
    // functions to push information into the data layer
    setOrigin: (state, action) => {
      // get the new origin based on the action performed, and update the state based on this
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTime: (state, action) => {
      state.travelTime = action.payload;
    },
  },
});

// destructure action functions so we can export them for other files
export const { setOrigin, setDestination, setTravelTime } = navSlice.actions;

// Selectors to help us get data from the data layer
export function selectOrigin(state) {
  return state.nav.origin;
}

export function selectDestination(state) {
  return state.nav.destination;
}

export function selectTravelTime(state) {
  return state.nav.travelTime;
}

export default navSlice.reducer;
