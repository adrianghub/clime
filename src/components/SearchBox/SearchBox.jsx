import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { useStateValue } from "../../context/StateProvider";

const useStyles = makeStyles({
  searchBox: {
    width: "100%",
    margin: "0 auto 75px",
  },
  searchBar: {
    width: "100%",
    display: "block",
    padding: "15px",
    appearance: "none",
    background: "none",
    border: "none",
    outline: "none",

    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: "0 0 16px 16px",
    marginTop: "-25px",
    boxShadow: "0 5px 5px rgba(0, 0, 0, 0.2)",
    color: "#313131",
    fontSize: "1.25rem",
    transition: ".4s ease-out",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.75)",
    },
  },
});

const SearchBox = ({ query, handleInputChange, handleKeyPress }) => {
  const classes = useStyles();
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();

  return (
    <div className={classes.searchBox}>
      <input
        className={classes.searchBar}
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default SearchBox;
