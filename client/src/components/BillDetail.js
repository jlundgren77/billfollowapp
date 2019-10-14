import React, { Component } from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Details from "./bills/Details";

class BillDetail extends Component {
  renderBill(details) {
    console.log(details);
    return (
      <div>
        <Details details={details} />
      </div>
    );
  }
  render() {
    const { bill } = this.props;
    console.log(bill);
    if (!bill.selectedBill) {
      return <h1>NO Bill FOUND!!!!</h1>;
    }
    return <div>{this.renderBill(bill.selectedBill)}</div>;
  }
}

const mapStateToProps = state => {
  return { bill: state.selectedBill };
};

export default connect(mapStateToProps)(BillDetail);
