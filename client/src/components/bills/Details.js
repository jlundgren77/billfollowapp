import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = {
  header: {
    fontSize: "1.1rem"
  }
};

class Details extends Component {
  render() {
    const { details, classes } = this.props;
    console.log(details);
    return (
      <div>
        <p>this are the details</p>
        {details.bill_slug}
        <Typography className={classes.header} variant="h1">
          {details.title}
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Details);
