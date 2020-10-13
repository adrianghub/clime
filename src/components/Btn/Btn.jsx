import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { useStateValue } from "../../context/StateProvider";

const useStyles = makeStyles({
  btn: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

const Btn = () => {
  const classes = useStyles();
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();

  const incCounterNumber = () => {
    dispatch({
      type: "INCREASE_NUMBER",
    })
  }

  return (
  <Button className={classes.btn} onClick={incCounterNumber}>CRA Boilerplate</Button>
  );
};

export default Btn;