const INITIAL_STATE = {
  selectedBill: null
};

export default (state = INITIAL_STATE, action) => {
  if (action.type === "BILL_SELECTED") {
    return action.payload;
  }
  return state;
};
