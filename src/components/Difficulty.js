import React from "react";

function Difficulty({ quizdata, status }) {
  return (
    <div className="difficulty__select">
      <select
        className="diff__select"
        defaultValue={"DEFAULT"}
        onChange={(e) => {
          console.log(e.target.value);
          quizdata(e.target.value);
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
