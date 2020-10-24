import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

// import { useStateValue } from "./context/StateProvider";
import { fetchApi } from "./api/api";
import Form from "./components/Form/Form";

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
  // const [{ counter }] = useStateValue();

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className={classes.root}>
      <Form />
    </div>
  );
}

export default App;
