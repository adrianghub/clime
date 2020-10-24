import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

import { useStateValue } from "../../context/StateProvider";

const useStyles = makeStyles({
});

const Result = () => {
  // const classes = useStyles();
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();

  return (
  <div>Weather...</div>
  );
};

export default Result;