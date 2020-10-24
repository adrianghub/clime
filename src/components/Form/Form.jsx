import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, Input } from "@material-ui/core";

import { useStateValue } from "../../context/StateProvider";
import Result from "../Result/Result";
import Btn from "../Btn/Btn";

const useStyles = makeStyles({
  container: {
    color: "#282c34",
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
    background: "#fcecc9"
  },
});

const Form = () => {
  const classes = useStyles();
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();

  return (
    <FormControl className={classes.container}>
      Form Boilerplate
      <Input color="secondary" />
      <Btn />
      <Result />
    </FormControl>
  );
};

export default Form;
