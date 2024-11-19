import React, { useState } from 'react';
import './Unit4Test.css'; // Import the CSS for styling

const questions = [
  {
    question: "What is a list in Python?",
    options: ["A collection of key-value pairs", "An ordered collection of items", "A variable that holds a single value", "A function used to organize data"],
    answer: "An ordered collection of items"
  },
  {
    question: "How do you create a list in Python?",
    options: ["Using square brackets", "Using curly braces", "Using parentheses", "Using quotation marks"],
    answer: "Using square brackets"
  },
  {
    question: "What will be printed by the following code? \n```python\nfruits = ['apple', 'banana', 'cherry']\nprint(fruits[1])\n```",
    options: ["apple", "banana", "cherry", "orange"],
    answer: "banana"
  },
  {
    question: "How can you modify an item in a list at a specific index?",
    options: ["Use the append method", "Reassign the value at that index", "Use the remove method", "Use the pop method"],
    answer: "Reassign the value at that index"
  },
  {
    question: "Which of the following is used to add an item to the end of a list?",
    options: [".add()", ".insert()", ".append()", ".extend()"],
    answer: ".append()"
  },
  {
    question: "How do you create a dictionary in Python?",
    options: ["Using square brackets", "Using parentheses", "Using curly braces", "Using angle brackets"],
    answer: "Using curly braces"
  },
  {
    question: "How do you access a value in a dictionary?",
    options: ["Using its index", "Using its key", "Using its value", "Using its type"],
    answer: "Using its key"
  },
  {
    question: "What is the output of the following code? \n```python\nstudent = {'name': 'Alice', 'age': 15, 'grade': '10th'}\nprint(student['age'])\n```",
    options: ["Alice", "10th", "15", "name"],
    answer: "15"
  },
  {
    question: "Which method retrieves all keys from a dictionary?",
    options: [".items()", ".values()", ".keys()", ".get()"],
    answer: ".keys()"
  },
  {
    question: "What is an advantage of using dictionaries over lists?",
    options: ["Faster lookups with unique keys", "Automatic ordering of data", "Ability to store functions", "Ability to store only strings"],
    answer: "Faster lookups with unique keys"
  }
];

const Unit4Test = () => {
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

export default Unit4Test;