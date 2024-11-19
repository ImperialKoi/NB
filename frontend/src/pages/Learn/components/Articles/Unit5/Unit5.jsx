import React from 'react';

const Unit5 = ({ setActiveUnit }) => {
    return (
        <section id="unit5">
            <h2 className="text-3xl font-bold mb-8">Unit 5&#58; Functions</h2>
            <p className="mb-8">
                Functions are a key building block in programming. They allow you to group code together and reuse it whenever necessary, which helps to make your code more organized and efficient.
            </p>
            
            <h3 className="text-2xl font-bold mb-4">What is a Function?</h3>
            <p className="mb-4">
                A <strong>function</strong> is a block of code that runs when it is called. You can pass data into a function, and it can return data back after processing. Functions are used to perform specific tasks and can be called as many times as needed.
            </p>

            <h4 className="text-xl font-bold mb-2">Creating a Function</h4>
            <p className="mb-4">
                In Python, you define a function using the <code>def</code> keyword, followed by the function name and parentheses. Here&#58;s an example of a simple function that prints a message&#58;
            </p>
            <pre className="mb-4">
                <code>
                def greet()&#58;<br />
                &ensp;print(<q>Hello, world!</q>)
                </code>
            </pre>

            <h4 className="text-xl font-bold mb-2">Calling a Function</h4>
            <p className="mb-4">Once you have defined a function, you can call it by using its name followed by parentheses&#58;</p>
            <pre className="mb-4">
                <code>
                greet() &#35; Output&#58; <q>Hello, world!</q>
                </code>
            </pre>

            <h4 className="text-xl font-bold mb-2">Functions with Parameters</h4>
            <p className="mb-4">
                Functions can also take <strong>parameters</strong>, which are values passed into the function when it is called. This allows the function to use different data. Here&#58;s an example of a function that takes a name as a parameter and prints a personalized greeting&#58;
            </p>
            <pre className="mb-4">
                <code>
                def greet(name)&#58;<br />
                &ensp;print(<q>Hello,</q>, name)<br /><br />

                greet(<q>Alice</q>)  &#35; Output&#58; <q>Hello, Alice</q><br />
                greet(<q>Bob</q>)    &#35; Output&#58; <q>Hello, Bob</q>
                </code>
            </pre>

            <h4 className="text-xl font-bold mb-2">Functions with Return Values</h4>
            <p className="mb-4">Functions can also return values using the <code>return</code> statement. This allows you to store the result of the function and use it elsewhere in your code. Here&#58;s an example&#58;</p>
            <pre className="mb-4">
                <code>
                def add(a, b)&#58;<br />
                &ensp;return a + b<br /><br />

                result = add(3, 5)<br />
                print(result)  &#35; Output&#58; 8
                </code>
            </pre>

            <h4 className="text-xl font-bold mb-2">Why Use Functions?</h4>
            <ul className="list-disc list-inside mb-4">
                <li><strong>Code Reusability</strong>&#58; Once a function is defined, you can call it anywhere in your code, eliminating the need to write the same code multiple times.</li>
                <li><strong>Better Organization</strong>&#58; Functions help to break your program into smaller, more manageable pieces.</li>
                <li><strong>Flexibility</strong>&#58; Functions can take parameters and return values, allowing you to write more dynamic and reusable code.</li>
            </ul>

            <h4 className="text-xl font-bold mb-2">Example Use Case&#58; Calculating Area</h4>
            <p className="mb-4">Let&#58;s say you want to write a function that calculates the area of a rectangle. You can create a function that takes the length and width as parameters and returns the calculated area&#58;</p>
            <pre className="mb-4">
                <code>
                def calculate_area(length, width)&#58;<br />
                &ensp; return length * width<br /><br />

                area = calculate_area(5, 10)<br />
                print(area)  &#35; Output&#58; 50
                </code>
            </pre>

            <button 
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 mt-8" 
                onClick={() => setActiveUnit(10)}
            >
                Test Your Learning
            </button>
        </section>
    );
};

export default Unit5;