import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import classnames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import withRoot from "./withRoot";
import faker from "faker";
import moment from "moment";
import { connect } from "react-redux";
import { fetchMemberImage } from "../actions";
import { FormHelperText } from "@material-ui/core";

const styles = theme => ({
  card: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "15px"
    // marginRight: "35px"
    // width: "33.333%"
  },
  cardContent: {
    // flexGrow: 1,
    marginBottom: "25px"
  },
  avatar: {
    borderRadius: 0,
    width: 60,
    height: 60
  },
  grid: {
    flexBasis: "31.3333%",
    marginBottom: "25px"
  }
});

class BillCard extends Component {
  componentDidMount() {
    const image = this.props.fetchMemberImage();
  }
  render() {
    const { classes } = this.props;

    let image =
      "https://theunitedstates.io/images/congress/original/L000554.jpg";
    return (
      <Grid item xs={12} sm={6} md={4} className={classes.grid}>
        {" "}
        <Card className={classes.card}>
          <CardHeader title="H.R. 123456" />
          <CardContent className={classes.cardContent}>
            <Typography variant="h6">{`Date Introduced: ${moment(
              faker.date.past()
            ).format("MMMM Do, YYYY")}`}</Typography>
            <Typography variant="h6">Sponser(s)</Typography>
            <div className="sponsers">
              <div className="sponser">
                <Avatar
                  className={classes.avatar}
                  alt={faker.name.lastName()}
                  src={image}
                />
              </div>
            </div>
          </CardContent>
          <CardActions>
            <Button onClick={this.props.onSelect} size="small">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}
const mapStateToProps = state => {
  return state;
};
BillCard.propTypes = {
  classes: PropTypes.object.isRequired
};
export default connect(
  mapStateToProps,
  { fetchMemberImage }
)(withRoot(withStyles(styles)(BillCard)));
