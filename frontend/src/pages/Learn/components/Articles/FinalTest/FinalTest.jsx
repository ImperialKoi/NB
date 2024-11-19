import React, { useState } from 'react';
import './FinalTest.css'; // Import the CSS for styling

const questions = [
    // Variables Section
    {
      question: "What is a variable in Python?",
      options: [
        "A fixed value",
        "A container for storing data values",
        "A built-in function",
        "A reserved keyword"
      ],
      answer: "A container for storing data values"
    },
    {
      question: "Which of the following is a valid variable name in Python?",
      options: ["1st_number", "first-number", "_firstNumber", "first number"],
      answer: "_firstNumber"
    },
    {
      question: "How do you assign a value of 10 to a variable called `x`?",
      options: ["x == 10", "x = 10", "x <- 10", "assign x to 10"],
      answer: "x = 10"
    },
    {
      question: "Which data type would you use to store a decimal number in Python?",
      options: ["int", "str", "float", "bool"],
      answer: "float"
    },
    {
      question: "What is the correct data type for the value `True`?",
      options: ["int", "str", "float", "bool"],
      answer: "bool"
    },
    {
      question: "What is the result of the expression `10 // 3`?",
      options: ["3", "3.33", "1", "4"],
      answer: "3"
    },
      {
      question: "Which of the following is used to create a list in Python?",
      options: ["{}", "[]", "()", "<>"],
      answer: "[]"
    },
    {
      question: "How do you access the second item in a list called `fruits`?",
      options: ["fruits[2]", "fruits[1]", "fruits(2)", "fruits(1)"],
      answer: "fruits[1]"
    },
    {
      question: "What does the `append()` method do for a list?",
      options: ["Removes an item", "Adds an item", "Sorts the list", "Reverses the list"],
      answer: "Adds an item"
    },
    {
      question: "What is a dictionary in Python?",
      options: [
        "A collection of ordered items",
        "A collection of key-value pairs",
        "A type of loop structure",
        "A way to store floating-point numbers"
      ],
      answer: "A collection of key-value pairs"
    },
    {
      question: "How do you access the value associated with a key in a dictionary?",
      options: ["dictionary(key)", "dictionary[key]", "dictionary{key}", "dictionary->key"],
      answer: "dictionary[key]"
    },
  
    // Functions Section
    {
      question: "What keyword is used to define a function in Python?",
      options: ["function", "def", "func", "declare"],
      answer: "def"
    },
    {
      question: "How do you call a function named `greet`?",
      options: ["call greet()", "greet[]", "greet()", "execute greet()"],
      answer: "greet()"
    },
    {
      question: "What is the purpose of the `return` statement in a function?",
      options: [
        "To print the result",
        "To stop the function",
        "To pass a value back to the caller",
        "To call another function"
      ],
      answer: "To pass a value back to the caller"
    },
  
    // Libraries Section
    {
      question: "What is a library in Python?",
      options: [
        "A collection of variables",
        "A set of functions and methods to perform specific tasks",
        "A type of data structure",
        "A part of the Python interpreter"
      ],
      answer: "A set of functions and methods to perform specific tasks"
    },
    {
      question: "Which Python library is commonly used for numerical computations?",
      options: ["NumPy", "Pandas", "Matplotlib", "Beautiful Soup"],
      answer: "NumPy"
    },
    {
      question: "How do you install external Python libraries?",
      options: [
        "Using the `import` command",
        "Using the `install` keyword",
        "Using the `pip` command",
        "Using the `load` command"
      ],
      answer: "Using the `pip` command"
    },
    {
      question: "What is the purpose of the `requests` library?",
      options: [
        "To perform HTTP requests",
        "To analyze data in DataFrames",
        "To perform matrix operations",
        "To generate random numbers"
      ],
      answer: "To perform HTTP requests"
    }
  ];  

const FinalTest = () => {
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

export default FinalTest;