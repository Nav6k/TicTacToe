import "./TicTacToe.css";
import React, { useState } from "react";
import XImage from "./XImage.png";
import OImage from "./OImage.png";
function TicTacToe(props) {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] != null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };
  const isWinner = checkWinner();

  const handleClick = (index, event) => {
    if (state[index] === null && !isWinner) {
      const copyState = [...state];
      copyState[index] = isXTurn ? XImage : OImage;
      setState(copyState);
      setIsXTurn(!isXTurn);

      if (props.onClick) {
        props.onClick(event);
      }
    }
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  return (
    <div className="anotherpage">
      {isWinner ? (
        <>
          {isWinner === XImage ? "X" : "O"} Won the game
          <button onClick={handleReset}>play again</button>
        </>
      ) : (
        <>
          <div className="players">
            <div className="player1"></div>
            <div className="player2"></div>
          </div>
          <div className="container">
            <div className="players"></div>
            <div className="main_box">
              <div
                className="nine_box_container"
                onClick={(event) => props.onClick(event)}
              >
                <div class="flex-container">
                  {state.map((value, index) => (
                    <div
                      class="flex-item"
                      value={value}
                      onClick={(event) => handleClick(index, event)}
                    >
                      <img
                        src={value}
                        alt=""
                        style={{
                          height: "130px",
                          width: "130px", // Each item takes up 30% of the container width
                          // border: "3px solid black",
                          // boxShadow: "-5px 5px #000", // Use camelCase for CSS property names
                          // color: "black",
                          // textAlign: "center",
                          // display: "flex",
                          // justifyContent: "center",
                          // alignItems: "center",
                          // marginBottom: "10px",
                          borderRadius: "0.5em",
                          // backgroundColor: "#C9F9FC",
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default TicTacToe;
