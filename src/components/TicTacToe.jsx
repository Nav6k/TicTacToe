import "./TicTacToe.css";
import React from "react";
function TicTacToe() {
  return (
    <div>
      <div className="players">
        <div className="player1"></div>
        <div className="player2"></div>
      </div>

      <div className="container">
        <div className="players"></div>
        <div className="main_box">
          <div className="nine_box_container">
            <div class="flex-container">
              <div class="flex-item"></div>
              <div class="flex-item"></div>
              <div class="flex-item"></div>
              <div class="flex-item"></div>
              <div class="flex-item"></div>
              <div class="flex-item"></div>
              <div class="flex-item"></div>
              <div class="flex-item"></div>
              <div class="flex-item"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicTacToe;
