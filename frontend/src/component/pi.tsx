import React, { useState, ChangeEvent, FormEvent, SyntheticEvent } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import makeRequest from "../netwrork";
import { calculate } from "./coordinates";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  })
);

export const Pi = (props: any) => {
  const [textInput, setTextInput] = React.useState<number>(0);
  const classes = useStyles();
  const handleChangeInput = async (e: SyntheticEvent) => {
    // @ts-ignore
    setTextInput(e.target.value);
  };
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (textInput <= 0) {
      alert("Please enter a valid value");
    }

    // TODO: read values from ENV
    await makeRequest({
      origin: "http://localhost:4000",
      pathname: `/coordinates/count/${textInput}`,
    })
      .then((res) => {
        alert(calculate(textInput, res));
        setTextInput(0);
      })
      .catch((err) => {
        console.log(err);
        alert("Error occured: " + err.status);
        setTextInput(0);
      });
  };

  return (
    <form>
      <div style={{ margin: "20px" }}>
        <TextField
          error
          id="input"
          label="Enter positive integer"
          variant="outlined"
          size="small"
          value={textInput}
          onChange={handleChangeInput}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "2px", marginLeft: "10px" }}
          onClick={handleSubmit}
        >
          Calculate PI
        </Button>
      </div>
    </form>
  );
};

export default Pi;
