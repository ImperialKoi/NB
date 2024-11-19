import React from 'react';

const Unit6 = ({ setActiveUnit }) => {
    return (
        <section id="unit6">
            <h2 className="text-3xl font-bold mb-8">Unit 6&#58; Basic Libraries</h2>
            <p className="mb-8">
                Libraries are collections of pre-written code that you can use in your own programs. They help you perform common tasks without having to write all the code from scratch. In this unit, we will cover some of the basic libraries that are commonly used in Python.
            </p>

            <h3 className="text-2xl font-bold mb-4">What is a Library?</h3>
            <p className="mb-4">
                A <strong>library</strong> is a set of functions and methods that allows you to perform specific tasks. Python comes with a standard library that provides many useful modules, but you can also install external libraries to extend its functionality.
            </p>

            <h4 className="text-xl font-bold mb-2">Common Python Libraries</h4>
            <ul className="list-disc list-inside mb-4">
                <li><strong>NumPy</strong>&#58; A library for numerical computations. It provides support for arrays, matrices, and many mathematical functions.</li>
                <li><strong>Pandas</strong>&#58; A library for data manipulation and analysis. It provides data structures like DataFrames for handling structured data.</li>
                <li><strong>Matplotlib</strong>&#58; A library for creating static, animated, and interactive visualizations in Python.</li>
                <li><strong>Requests</strong>&#58; A simple and elegant HTTP library for making web requests.</li>
                <li><strong>Beautiful Soup</strong>&#58; A library for web scraping that makes it easy to extract information from HTML and XML files.</li>
                <li><strong>Random</strong>&#58; The random library provides functions for generating random numbers and selecting random elements from data structures.</li>
                <li><strong>Math</strong>&#58; The math library offers mathematical functions like trigonometry, logarithms, and constants (e.g., pi and e).</li>
                <li><strong>Tkinter Soup</strong>&#58; The tkinter library is used to create graphical user interfaces (GUIs) in Python, offering buttons, labels, and windows.</li>
            </ul>

            <h4 className="text-xl font-bold mb-2">Using Libraries</h4>
            <p className="mb-4">
                To use a library in your Python code, you need to <strong>import</strong> it. For example, to use the <code>math</code> library, you would write&#58;
            </p>
            <pre className="mb-4">
                <code>
                import math
                </code>
            </pre>

            <h4 className="text-xl font-bold mb-2">Example&#58; Using the Math Library</h4>
            <p className="mb-4">
                Here&#58;s an example of using the <code>math</code> library to calculate the square root of a number&#58;
            </p>
            <pre className="mb-4">
                <code>
                import math<br />
                result = math.sqrt(16)<br />
                print(result)  &#35; Output&#58; 4.0
                </code>
            </pre>

            <h4 className="text-xl font-bold mb-2">Installing External Libraries</h4>
            <p className="mb-4">
                You can install external libraries using <code>pip</code>, Python&#39;s package manager. For example, to install the <code>requests</code> library, you would run the following command in your terminal&#58;
            </p>
            <pre className="mb-4">
                <code>
                pip install requests
                </code>
            </pre>

            <h4 className="text-xl font-bold mb-2">Example&#58; Using the Requests Library</h4>
            <p className="mb-4">
                Here&#58;s an example of making a GET request using the <code>requests</code> library&#58;
            </p>
            <pre className="mb-4">
                <code>
                import requests<br />
                response = requests.get(<q>https&#58;//api.example.com/data</q>)<br />
                print(response.json())  &#35; Outputs the JSON response
                </code>
            </pre>

            <h4 className="text-xl font-bold mb-2">Conclusion</h4>
            <p className="mb-4">
                Libraries are an essential part of programming in Python. They provide ready-to-use functions that save time and effort. Learning how to use libraries effectively can greatly enhance your coding capabilities.
            </p>

            <button 
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 mt-8" 
                onClick={() => setActiveUnit(12)}
            >
                Test Your Learning
            </button>
        </section>
    );
};

export default Unit6;   