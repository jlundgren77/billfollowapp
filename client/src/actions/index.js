import proPublica from "../apis/proPublica";

export const fetchBills = () => async dispatch => {
  const response = await proPublica.get("/115/both/bills/active.json");

  dispatch({ type: "FETCH_BILLS", payload: response });
};

// export const selectBill = selectedBill => {
//   return {
//     type: "BILL_SELECTED",
//     payload: { selectedBill }
//   };
// };
export const selectBill = selectedBill => (dispatch, getState) => {
  dispatch({
    type: "BILL_SELECTED",
    payload: { selectedBill }
  });
  return Promise.resolve(getState());
};
export const fetchMemberImage = () => async dispatch => {
  const response = await proPublica.get("/members/K000388.json");
};

export const getBills = () => {};
