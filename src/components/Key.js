import { style } from 'glamor';
import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({ keyVal, bigKey, disabled }) {
  const { gameOver, onSelectLetter, onDelete, onEnter } =
        useContext(AppContext);
  const styles = {
        keyHover: style({
            backgroundColor: "#818384",
            width: "50px",
            height: "70px",
            margin: "5px",
            borderRadius: "4px",
            display: "grid",
            placeItems: "center",
            fontSize: "20px",
            backgroundColor: "#818384",
            color: "white",
            fontFamily: "Arial, Helvetica, sans - serif",
            cursor: "pointer",
            ":hover": {
                backgroundColor: "#4a4c4d",
                color: "#ffffff"
            }
        })
    };

  const selectLetter = () => {
    if (gameOver.gameOver) return;
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };
  return (
    <div
      {...styles.keyHover}
      class="key"
      id={bigKey ? "big" : disabled && "disabled"}
      onClick={selectLetter}
    >
      {keyVal}
    </div>
  );
}

export default Key;
