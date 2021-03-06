import React from "react";
import "./App.css";
import Difficulty from "./components/Difficulty";
import { MathComponent } from "mathjax-react";
import questions from "../src/res/data/questions";

function App() {
  const [quizStatus, setQuizStatus] = React.useState("opened");
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [percentScore, setPercentScore] = React.useState(0);

  const [quizState, setQuizState] = React.useState({
    quizQuestions: [],
    qNo: 1,
    score: 0,
    percentScore: 0,
    maxQuestion: 4,
    correctAnswer: [0, 0, 0, 0],
    userAnswers: [0, 0, 0, 0],
  });

  console.log("rerendering");

  const handleSelect = (e) => {
    let { value } = e.target;

    let userAnswerArr = quizState.userAnswers;
    let correctAnswerArr = quizState.correctAnswer;
    userAnswerArr[currentQuestion] = value;
    correctAnswerArr[currentQuestion] =
      quizState.quizQuestions[currentQuestion]?.["CorrectOption"];
    setQuizState((prevState) => ({
      ...prevState,
      userAnswers: userAnswerArr,
      correctAnswer: correctAnswerArr,
    }));
    console.log(userAnswerArr, correctAnswerArr);
  };

  const getQuizQuestions = (diff) => {
    const question = questions
      .filter(function (obj) {
        return obj.DifficultyLevel === diff;
      })
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);

    console.log(question);

    let correctAnswerArr = quizState.correctAnswer;
    for (let i = 0; i < 4; i++) {
      correctAnswerArr[i] = question[i].CorrectOption;
    }

    console.log(correctAnswerArr);
    setQuizState((prevState) => ({
      ...prevState,
      quizQuestions: question,
      correctAnswer: correctAnswerArr,
    }));
  };

  const setStatus = (status) => {
    setQuizStatus(status);
  };

  const calculateScore = () => {
    let userAnswerArr = quizState.userAnswers;
    let correctAnswerArr = quizState.correctAnswer;
    console.log(userAnswerArr, correctAnswerArr);
    let marks = 0;
    let percentMarks = 0;
    for (let i = 0; i < 4; i++) {
      if (Number(userAnswerArr[i]) === Number(correctAnswerArr[i])) {
        marks = marks + 1;
      } else {
        marks = marks + 0;
      }
    }
    console.log(marks);
    percentMarks = (marks / 4) * 100;
    console.log(percentMarks);
    setScore(marks);
    setPercentScore(percentMarks);
  };

  return (
    <div className="App">
      {quizStatus === "opened" ? (
        <>
          <div className="main__header">LearnQ Quiz</div>

          <Difficulty quizdata={getQuizQuestions} status={setStatus} />
        </>
      ) : quizStatus === "started" ? (
        <div className="quiz__container">
          <div className="quiz__question">
            <p>
              Q.{quizState.qNo}: &nbsp; &nbsp;
              <MathComponent
                tex={String.raw`${quizState.quizQuestions[currentQuestion]?.["Question"]}`}
                display={false}
              />
            </p>
          </div>
          <div
            onChange={(e) => {
              handleSelect(e);
            }}
            className="quiz__options"
          >
            <form id="optionsForm">
              <label htmlFor="option1" className="answer__options">
                <input type="radio" id="option1" name="learnQ" value={1} />
                <span className="options__text">
                  <MathComponent
                    className="option_mathjax"
                    tex={String.raw`${quizState.quizQuestions[currentQuestion]?.["Option1"]}`}
                    display={false}
                  />
                </span>
              </label>
              <label htmlFor="option2" className="answer__options">
                <input type="radio" id="option2" name="learnQ" value={2} />
                <span className="options__text">
                  <MathComponent
                    className="option_mathjax"
                    tex={String.raw`${quizState.quizQuestions[currentQuestion]?.["Option2"]}`}
                    display={false}
                  />
                </span>
              </label>
              <label htmlFor="option3" className="answer__options">
                <input type="radio" id="option3" name="learnQ" value={3} />
                <span className="options__text">
                  <MathComponent
                    className="option_mathjax"
                    tex={String.raw`${quizState.quizQuestions[currentQuestion]?.["Option3"]}`}
                    display={false}
                  />
                </span>
              </label>
              <label htmlFor="option4" className="answer__options">
                <input type="radio" id="option4" name="learnQ" value={4} />
                <span className="options__text">
                  <MathComponent
                    className="option_mathjax"
                    tex={String.raw`${quizState.quizQuestions[currentQuestion]?.["Option4"]}`}
                    display={false}
                  />
                </span>
              </label>
            </form>
          </div>
          <div className="question__navigation">
            <div
              className="prev__question"
              style={{ display: quizState.maxQuestion < 4 ? null : "none" }}
              onClick={() => {
                setCurrentQuestion(currentQuestion - 1);
                setQuizState((prevState) => ({
                  ...prevState,
                  maxQuestion: prevState.maxQuestion + 1,
                  qNo: prevState.qNo - 1,
                }));
                console.log(`currentQuestion ${currentQuestion - 1}`);
                let answer = quizState.userAnswers[currentQuestion - 1];
                if (answer !== 0) {
                  document.getElementById(`option${answer}`).checked = true;
                }
              }}
            >
              Previous Question
            </div>
            <div
              className="next__question"
              style={{ display: quizState.maxQuestion > 1 ? null : "none" }}
              onClick={() => {
                setCurrentQuestion(currentQuestion + 1);
                setQuizState((prevState) => ({
                  ...prevState,
                  maxQuestion: prevState.maxQuestion - 1,
                  qNo: prevState.qNo + 1,
                }));
                console.log(quizState.maxQuestion);
                let answer = quizState.userAnswers[currentQuestion + 1];
                if (answer !== 0) {
                  document.getElementById(`option${answer}`).checked = true;
                } else {
                  document.getElementById("optionsForm").reset();
                }
              }}
            >
              Next Question
            </div>
            {quizState.maxQuestion <= 1 ? (
              <div
                className="submit__answers"
                onClick={() => {
                  calculateScore();
                  setStatus("ended");
                }}
              >
                Submit Answers
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="results">
          <div className="results__header">
            <p>Quiz Results</p>
          </div>
          <div className="score__details">
            <p>Score: {score}</p>
            <p>Percentage Score: {percentScore}%</p>
          </div>
          {quizState.quizQuestions.map((question) => {
            return (
              <div key={question.id} className="result_details">
                <div className="result_question">
                  <span className="result_question_text">
                    <MathComponent
                      className="option_mathjax"
                      tex={String.raw`${question.Question}`}
                      display={false}
                    />
                  </span>
                </div>
                <div className="result_answer">
                  <span className="result_question_text">
                    Answer:&nbsp; &nbsp; &nbsp;
                    <MathComponent
                      className="option_mathjax"
                      tex={String.raw`${
                        question[`Option${question.CorrectOption}`]
                      }`}
                      display={false}
                    />
                  </span>
                </div>
                <div className="result_diff">{question.DifficultyLevel}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
