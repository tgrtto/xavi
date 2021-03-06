import { CLEAR_JOURNEYS, END_LOADING_JOURNEYS, START_LOADING_JOURNEYS, RESET_JOURNEYS, SELECT_JOURNEY} from "../actionTypes";

const initialState = {
  journeys: [],
  loading_journeys: false,
  initialised_journeys: false,
  selected_journey: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SELECT_JOURNEY:
      const { journey } = action.payload;
      return {...state, selected_journey: journey, seat: {row : null, column: null}}
    case RESET_JOURNEYS:
      return {...state, journeys: [], loading_journeys: false, initialised_journeys: false, seat: {row : null, column: null}}
    case CLEAR_JOURNEYS:
      return {...state, journeys: [], loading_journeys: false, seat: {row : null, column: null}}
    case END_LOADING_JOURNEYS:
      const { journeys } = action.payload;
      let new_journeys = [];
      for(var i = 0; i < journeys.length; i++) {
        new_journeys.push(journeys[i]);
      }

      return {...state, journeys: new_journeys, loading_journeys: false, initialised_journeys: true};
    case START_LOADING_JOURNEYS:
      return {...state, loading_journeys: true};
    default:
      return state;
  }
}
