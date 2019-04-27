import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
// import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import "./App.css";
// import "typeface-roboto";

const styles = theme => ({
  root: {
    display: "flex",
    backgroundColor: "green",
    padding: `0 20px`
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: `15px auto`,
    maxWidth: 450,
    borderRadius: 10
  },

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },

  services: {
    fontSize: 18,
    paddingTop: 20,
    paddingBottom: 15
    // width: 350
  }
});

const services = [
  "Choose Services",
  "Online Store",
  "eCommerce Bussiness",
  "UI/UX Design",
  "Online Services"
];

const budget = ["Select Budget", "1500 $", "2000 $", "2500 $"];

class App extends Component {
  state = {
    service: services[0],
    budget: budget[0]
  };

  handleChange = name => event => {
    // console.log("name", name, "event", event);
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classNames(classes.root, "mainDiv")}>
        <Paper className={classes.paper} elevation={0}>
          <Typography
            className="fields"
            align="center"
            variant="h4"
            style={{ marginTop: 20, fontSize: 40 }}
          >
            Say Hello!
          </Typography>
          <div style={{ margin: "6%" }}>
            <FormControl fullWidth style={{ marginTop: 20 }}>
              <InputLabel
                className="fields"
                style={{ marginLeft: 8, fontSize: 17 }}
                htmlFor="adornment-amount"
              >
                Your Name
              </InputLabel>
              <Input
                className="fields"
                style={{ fontSize: 18, paddingTop: 10, paddingBottom: 10 }}
                id="adornment-amount"
                // value={"this.state.amount"}
                placeholder="Enter your name"
                // onChange={this.handleChange("service")}
                startAdornment={<InputAdornment position="start" />}
              />
            </FormControl>
            <br />
            <br />
            <FormControl fullWidth style={{ marginTop: 20 }}>
              <InputLabel
                className="fields"
                style={{ marginLeft: 8, fontSize: 17 }}
                htmlFor="adornment-amount"
              >
                Email
              </InputLabel>
              <Input
                className="fields"
                style={{ fontSize: 18, paddingTop: 10, paddingBottom: 10 }}
                id="adornment-amount"
                // value={"this.state.amount"}
                placeholder="Enter your email address"
                // onChange={this.handleChange("budget")}
                startAdornment={<InputAdornment position="start" />}
              />
            </FormControl>
            <FormControl fullWidth style={{ marginTop: 20 }}>
              <TextField
                style={{ marginLeft: 1, width: "100%" }}
                id="standard-select-currency"
                select
                label="Needed Services"
                className={classes.textField}
                value={this.state.service}
                onChange={this.handleChange("service")}
                InputLabelProps={{
                  className: "fields",
                  style: { marginLeft: 8, fontSize: 17 }
                }}
                InputProps={{
                  className: "fields",
                  startAdornment: <InputAdornment position="start" />,
                  classes: { input: classes.services }
                }}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                // helperText="Please select your currency"
                margin="normal"
              >
                {services.map(value => (
                  <MenuItem key={value} value={value}>
                    {value}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
            <br />
            <FormControl fullWidth style={{ marginTop: 20 }}>
              <TextField
                style={{ marginLeft: 1, width: "100%" }}
                id="standard-select-currency"
                select
                label="Budget"
                className={classes.textField}
                value={this.state.budget}
                onChange={this.handleChange("budget")}
                InputLabelProps={{
                  className: "fields",
                  style: { marginLeft: 8, fontSize: 17 }
                }}
                InputProps={{
                  className: "fields",
                  startAdornment: <InputAdornment position="start" />,
                  classes: { input: classes.services }
                }}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                // helperText="Please select your currency"
                margin="normal"
              >
                {budget.map(value => (
                  <MenuItem key={value} value={value}>
                    {value}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
            <br />
            <FormControl fullWidth style={{ marginTop: 20 }}>
              <TextField
                style={{ marginLeft: 1, width: "100%" }}
                fullWidth
                id="standard-multiline-static"
                label="Message"
                multiline
                rows="4"
                placeholder="Your message here..."
                InputLabelProps={{
                  className: "fields",
                  style: { marginLeft: 8, fontSize: 17 }
                }}
                InputProps={{
                  className: "fields",
                  startAdornment: <InputAdornment position="start" />,
                  classes: { input: classes.services }
                }}
                // startAdornment={<InputAdornment position="start" />}
                // defaultValue="Default Value"
                className={classes.textField}
                margin="normal"
              />
            </FormControl>
          </div>
        </Paper>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
