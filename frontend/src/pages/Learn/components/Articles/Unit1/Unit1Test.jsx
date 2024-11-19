import React, { useState } from 'react';
import './Unit1Test.css'; // Import the CSS for styling

const questions = [
  {
    question: "What is a variable in programming?",
    options: ["A fixed value", "A container that holds information", "A programming language", "A type of data"],
    answer: "A container that holds information"
  },
  {
    question: "What can variables store?",
    options: ["Integers", "Strings", "Booleans", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Which of the following is a valid variable name?",
    options: ["1age", "user name", "_score", "total score"],
    answer: "_score"
  },
  {
    question: "What keyword is used to declare a variable in JavaScript that cannot be reassigned?",
    options: ["var", "let", "const", "static"],
    answer: "const"
  },
  {
    question: "In Python, how would you declare a variable to hold your age?",
    options: ["age : 15", "int age = 15", "age = 15", "age => 15"],
    answer: "age = 15"
  },
  {
    question: "Why are variables useful in programming?",
    options: ["They make the code harder to read.", "They allow you to store data that can change and improve code reusability.", "They can only hold fixed values.", "They increase the size of the program."],
    answer: "They allow you to store data that can change and improve code reusability."
  },
  {
    question: "Which of the following is an example of a boolean variable?",
    options: ["age = 15", "name = str(Alice)", "isGameOver = false", "scores = [100, 200, 300]"],
    answer: "isGameOver = false"
  },
  {
      question: "What is one of the main benefits of using meaningful variable names?",
      options: ["It makes the code longer.", "It improves readability and maintainability of the code.", "It increases the speed of the program.", "It limits the types of data that can be stored."],
      answer: "It improves readability and maintainability of the code."
  }
];

const Unit1Test = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedbackClass, setFeedbackClass] = useState('');
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    const isCorrect = option === questions[currentQuestionIndex].answer;
    
    if (isCorrect) {
      setScore(score + 1);
      setFeedbackClass('correct');
    } else {
      setFeedbackClass('incorrect');
    }

    // Move to the next question after a short delay
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setFeedbackClass('');
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  return (
    <div className="quiz-container">
      {!showScore ? (
        <div>
          <h2>{questions[currentQuestionIndex].question}</h2>
          <div className={`feedback ${feedbackClass}`}>{feedbackClass === 'correct' ? 'Correct!' : feedbackClass === 'incorrect' ? 'Incorrect!' : ''}</div>
          {questions[currentQuestionIndex].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)} className={`option-button ${feedbackClass}`}>
              {option}
            </button>
          ))}
          <div className="score">Score: {score}</div>
        </div>
      ) : (
        <div className="score-display">
          <h2>Quiz Complete!</h2>
          <p>Your final score is: {score} out of {questions.length}</p>
        </div>
      )}
    </div>
  );
};

export default Unit1Test;