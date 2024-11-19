import React, { useState } from 'react';
import './Unit2Test.css'; // Import the CSS for styling

const questions = [
  {
    question: "What are built-in functions in Python?",
    options: ["Functions that need to be imported from external libraries", "Functions that are predefined and available in Python", "Functions that are created by the user", "Functions that only work with strings"],
    answer: "Functions that are predefined and available in Python"
  },
  {
    question: "Which built-in function is used to display output in Python?",
    options: ["len()", "type()", "print()", "split()"],
    answer: "print()"
  },
  {
    question: "What does the len() function do?",
    options: ["Prints the length of an integer", "Returns the number of characters in a string", "Returns the number of items in an object", "Splits a string into words"],
    answer: "Returns the number of items in an object"
  },
  {
    question: "Which of the following is the correct way to find the type of a variable?",
    options: ["len(variable)", "type(variable)", "print(variable)", "join(variable)"],
    answer: "type(variable)"
  },
  {
    question: "How does the split() function work?",
    options: ["It combines elements into a single string", "It finds the length of a string", "It splits a string into a list based on a delimiter", "It sums the elements of a list"],
    answer: "It splits a string into a list based on a delimiter"
  },
  {
    question: "What is the purpose of the join() function in Python?",
    options: ["To sum up numbers", "To join strings into a single string with a separator", "To split a string into a list of words", "To find the maximum value in a list"],
    answer: "To join strings into a single string with a separator"
  },
  {
    question: "Which function would you use to sum all numbers in a list?",
    options: ["max()", "sum()", "len()", "min()"],
    answer: "sum()"
  },
  {
    question: "What is the output of max([5, 3, 9, 1])?",
    options: ["1", "3", "9", "5"],
    answer: "9"
  },
  {
    question: "Why should you use built-in functions in Python?",
    options: ["They save time and provide standard functionality", "They make your code longer", "They replace the need for custom functions", "They work only with integers"],
    answer: "They save time and provide standard functionality"
  }
];

const Unit2Test = () => {
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

export default Unit2Test;