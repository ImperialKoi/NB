import React, { useState } from 'react';
import './Unit3Test.css'; // Import the CSS for styling

const questions = [
  {
    question: "What are conditionals used for in Python?",
    options: ["To repeat code", "To execute code based on a condition", "To iterate over a list", "To break out of a loop"],
    answer: "To execute code based on a condition"
  },
  {
    question: "Which of the following is the correct syntax for an if statement in Python?",
    options: ["if (condition)", "if condition:", "if: condition", "if condition"],
    answer: "if condition:"
  },
  {
    question: "What is the purpose of the elif keyword in Python?",
    options: ["To handle additional conditions if the previous ones are False", "To end the if-else block", "To execute code unconditionally", "To iterate over a sequence"],
    answer: "To handle additional conditions if the previous ones are False"
  },
  {
    question: "What will be printed when age = 15 and the following code is executed? \n```python\nage = 15 \nif age >= 18: \n  print('You are an adult.') \nelif age < 18 and age > 12: \n  print('You are a teenager.') \nelse: \n  print('You are a child.')\n```",
    options: ["You are an adult.", "You are a child.", "You are a teenager.", "No output"],
    answer: "You are a teenager."
  },
  {
    question: "What type of loop should you use when you know the number of iterations in advance?",
    options: ["while loop", "for loop", "if loop", "elif loop"],
    answer: "for loop"
  },
  {
    question: "How does a while loop function in Python?",
    options: ["It iterates over a sequence", "It runs as long as the condition is True", "It only runs once", "It runs until a break statement is encountered"],
    answer: "It runs as long as the condition is True"
  },
  {
    question: "Which of the following statements can be used to exit a loop prematurely?",
    options: ["continue", "return", "exit", "break"],
    answer: "break"
  },
  {
    question: "What is the purpose of the continue statement?",
    options: ["To terminate the loop", "To exit the current iteration and continue with the next one", "To start a new loop", "To reverse the loop direction"],
    answer: "To exit the current iteration and continue with the next one"
  },
];

const Unit3Test = () => {
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

export default Unit3Test;