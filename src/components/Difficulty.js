import React from "react";
import questions from "../res/data/questions";

function Difficulty({ quizdata, status }) {
  const [difficulty, setDifficulty] = React.useState("Easy");

  return (
    <div className="difficulty__select">
      <select
        className="diff__select"
        defaultValue={"DEFAULT"}
        onChange={(e) => {
          console.log(e.target.value);
          setDifficulty(e.target.value);
          quizdata(
            questions
              .filter(function (obj) {
                return obj.DifficultyLevel === difficulty;
              })
              .sort(() => 0.5 - Math.random())
              .slice(0, 4)
          );
          status("started");
        }}
      >
        <option value="DEFAULT" disabled>
          Select Difficulty
        </option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
    </div>
  );
}

export default Difficulty;
