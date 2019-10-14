import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBill, fetchBills } from "../actions";
import BillCard from "./BillCard";
import BillDetail from "./BillDetail";

import Grid from "@material-ui/core/Grid";
import withRoot from "./withRoot";
import { bool } from "prop-types";

// const myInit = {
//   method: "GET",
//   headers: { "X-API-Key": "1BYtV21DPfuMnFOHDHBgbDA3xPDeCcMvoAB2y7e8" },
//   mode: "cors",
//   cache: "default"
// };

class Main extends Component {
  constructor() {
    super();
    this.state = {
      recentBills: ""
    };
  }

  componentDidMount() {
    this.props.fetchBills();
    // this.getMemberImage();
  }
  selectBill(bill) {
    this.props
      .selectBill(bill)
      .then(this.props.history.push(`/bill/details/${bill.bill_id}`));
  }
  createBillList(bills) {
    const billList =
      bills.all[0] === undefined ? undefined : bills.all[0].bills;

    if (billList) {
      return billList.map(bill => {
        return (
          <BillCard key={bill.bill_id} onSelect={() => this.selectBill(bill)} />
        );
      });
    } else {
      return <h1>Loading</h1>;
    }
  }

  render() {
    return (
      <div>
        <Grid justify="space-around" container spacing={8}>
          {this.createBillList(this.props.bills)}
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    bills: state.bills,
    selectedBill: state.selectedBill
  };
};
export default connect(
  mapStateToProps,
  {
    selectBill,
    fetchBills
  }
)(withRoot(Main));
