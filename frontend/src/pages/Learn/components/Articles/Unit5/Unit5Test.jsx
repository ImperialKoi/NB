import React, { useState } from 'react';
import './Unit5Test.css'; // Import the CSS for styling

const questions = [
  {
    question: "What is a function in Python?",
    options: [
      "A block of code that runs only once",
      "A block of code that runs when called",
      "A loop that iterates over a list",
      "A collection of key-value pairs"
    ],
    answer: "A block of code that runs when called"
  },
  {
    question: "How do you define a function in Python?",
    options: ["Using the `function` keyword", "Using the `def` keyword", "Using the `return` keyword", "Using parentheses `()`"],
    answer: "Using the `def` keyword"
  },
  {
    question: "What is the output of the following code? \n```python\ndef greet():\n    print('Hello, world!')\ngreet()\n```",
    options: ["Hello, world!", "Hello", "world!", "Nothing, because the function is not called"],
    answer: "Hello, world!"
  },
  {
    question: "What does the following code do? \n```python\ndef greet(name):\n    print('Hello,', name)\n```",
    options: [
      "It prints a static greeting 'Hello,' without using the name",
      "It greets the user by printing 'Hello,' followed by the name passed into the function",
      "It returns the name passed into the function",
      "It does nothing since the function is not called"
    ],
    answer: "It greets the user by printing 'Hello,' followed by the name passed into the function"
  },
  {
    question: "How can you return a value from a function?",
    options: ["Using the `output` keyword", "Using the `print` statement", "Using the `return` statement", "Using the `yield` statement"],
    answer: "Using the `return` statement"
  },
  {
    question: "What is the output of the following code? \n```python\ndef add(a, b):\n    return a + b\nresult = add(4, 6)\nprint(result)\n```",
    options: ["10", "46", "None", "Error: Missing print statement in function"],
    answer: "10"
  },
  {
    question: "Which of the following is an advantage of using functions?",
    options: [
      "Functions can only be used once",
      "Functions can run multiple times, allowing code reuse",
      "Functions do not need any parameters",
      "Functions cannot return any value"
    ],
    answer: "Functions can run multiple times, allowing code reuse"
  },
  {
    question: "What is the purpose of passing parameters into a function?",
    options: [
      "To display them on the console",
      "To perform different tasks using input data within the function",
      "To define multiple functions at once",
      "To avoid using the return statement"
    ],
    answer: "To perform different tasks using input data within the function"
  },
  {
    question: "Which statement correctly defines a function that calculates the area of a rectangle?",
    options: [
      "```def calculate_area(length, width): return length + width```",
      "```def calculate_area(length, width): return length * width```",
      "```def calculate_area(): print(length * width)```",
      "```def area(): return length * width```"
    ],
    answer: "```def calculate_area(length, width): return length * width```"
  },
  {
    question: "Which of the following statements about functions is true?",
    options: [
      "Functions are only useful when dealing with large programs",
      "Functions cannot take any input data",
      "Functions help improve code organization and reusability",
      "Functions must always return a value"
    ],
    answer: "Functions help improve code organization and reusability"
  }
];

const Unit5Test = () => {
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

export default Unit5Test;