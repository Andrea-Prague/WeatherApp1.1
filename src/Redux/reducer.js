import {GET_DATA} from "./actions";

export const initialState = {
  temperature: undefined,
  city: undefined,
  country: undefined,
  main : undefined,
  description: undefined,
  error: ''
}

const Reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_DATA:
      state = {
        ...state,
        // temperature: Math.round(action.payload.list[0].main.temp/10),
        city: action.payload.city.name,
        country: action.payload.city.country,
        main: action.payload.list[0].weather[0].main,
        description: action.payload.list[0].weather[0].description,
        error: ""
      };
      //casem case na forecast data
  };
  return state; 
}

export default Reducer;