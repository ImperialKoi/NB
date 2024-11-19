import React, { useState } from 'react';
import './Unit6Test.css'; // Import the CSS for styling

const questions = [
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
    question: "Which library would you use for data manipulation and analysis?",
    options: ["Requests", "NumPy", "Pandas", "Math"],
    answer: "Pandas"
  },
  {
    question: "What is the purpose of the `matplotlib` library?",
    options: [
      "To make HTTP requests",
      "To create visualizations like graphs and charts",
      "To perform matrix operations",
      "To scrape websites"
    ],
    answer: "To create visualizations like graphs and charts"
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
    question: "What would be the output of the following code?\n```python\nimport math\nresult = math.sqrt(25)\nprint(result)\n```",
    options: ["5.0", "25", "4.0", "Error: Invalid function call"],
    answer: "5.0"
  },
  {
    question: "Which of the following libraries would be useful for web scraping?",
    options: ["Pandas", "Requests", "NumPy", "Beautiful Soup"],
    answer: "Beautiful Soup"
  },
  {
    question: "What does the following code do?\n```python\nimport requests\nresponse = requests.get('https://api.example.com/data')\nprint(response.json())\n```",
    options: [
      "Sends a GET request to the provided URL and prints the JSON response",
      "Downloads a file from the URL",
      "Creates a local server to host an API",
      "Generates random data and converts it to JSON"
    ],
    answer: "Sends a GET request to the provided URL and prints the JSON response"
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
  },
  {
    question: "Which of the following is NOT a common use of Python libraries?",
    options: [
      "To speed up development by using pre-written code",
      "To create complex mathematical models",
      "To directly execute machine language",
      "To simplify tasks like web scraping and data analysis"
    ],
    answer: "To directly execute machine language"
  }
];

const Unit6Test = () => {
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

export default Unit6Test;