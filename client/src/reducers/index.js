import { combineReducers } from "redux";
import billsReducer from "./billsReducer";
import selectedBillReducer from "./selectedBillReducer";

export default combineReducers({
  bills: billsReducer,
  selectedBill: selectedBillReducer
});
