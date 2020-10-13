import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Btn from './components/Btn/Btn';
import { useStateValue } from "./context/StateProvider";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
});

function App() {
  const classes = useStyles();
  const [{ counter }] = useStateValue();

  return (
    <div className={classes.root}>
      <Btn />
      <p>{counter}</p>
    </div>
  );
}

export default App;
