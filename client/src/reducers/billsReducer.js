const INITIAL_STATE = {
  all: [],
  offset: 0,
  limit: 20,
  page: 1
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_BILLS":
      return { ...state, all: action.payload.data.results };
    default:
      return state;
  }
};
