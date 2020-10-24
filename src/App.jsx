import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Btn from "./components/Btn/Btn";
import { useStateValue } from "./context/StateProvider";
import { fetchApi } from "./api/api";

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
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "400px",
    minHeight: "364px",
    padding: "1rem",
    borderRadius: "5px",
    boxShadow: "0 0px 10px #111",
    mixBlendMode: "difference",
    userSelect: "none",
  },
});

function App() {
  const classes = useStyles();
  const [{ counter }] = useStateValue();

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Btn />
        <p>{counter}</p>
      </div>
    </div>
  );
}

export default App;
