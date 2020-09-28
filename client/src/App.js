import React from "react";
import "./App.css";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/styles/theme";
import Application from "./Application";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgb(242,242,246)",
    minHeight: "100vh",
  },
}));

const App = () => {
  let classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Router>
          <Switch>
            <Route path="/admin">
              <Application />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
