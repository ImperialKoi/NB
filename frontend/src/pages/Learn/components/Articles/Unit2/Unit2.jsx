import React from 'react';

const Unit2 = ({ setActiveUnit }) => {
    return (
        <section id="unit2">
            <h2 className="text-3xl font-bold mb-8">Unit 2: Basic Functions</h2>
            <p className='mb-8'>
                Functions are essential tools in programming that allow you to perform specific operations easily and efficiently. In Python, there are many built-in functions that you can use to manipulate data and perform common tasks.
            </p>
            
            <h3 className="text-2xl font-bold mb-4">What are Built-in Functions?</h3>
            <p className='mb-4'>
                Built-in functions are functions that are readily available in Python without needing to import any additional modules. They simplify coding by providing ready-made solutions for common tasks.
            </p>

            <h3 className="text-2xl font-bold mb-2 mt-8">Common Built-in Functions</h3>

            <h4 className="text-xl font-bold mb-2">1. print()</h4>
            <p className='mb-4'>
                The <code>print()</code> function outputs text or variables to the console. It is commonly used for debugging or displaying information.
            </p>
            <pre className='mb-4'>
                <code>
                    print("Hello, World!")  <br />
                    # Output: Hello, World!
                </code>
            </pre>

            <h4 className="text-xl font-bold mb-2">2. len()</h4>
            <p className='mb-4'>
                The <code>len()</code> function returns the number of items in an object, such as a string, list, or tuple.
            </p>
            <pre className='mb-4'>
                <code>
                    my_string = "Hello" <br />
                    length = len(my_string)  <br />
                    print(length)  # Output: 5
                </code>
            </pre>

            <h4 className="text-xl font-bold mb-2">3. type()</h4>
            <p className='mb-4'>
                The <code>type()</code> function returns the type of an object, helping you understand what kind of data you are working with.
            </p>
            <pre className='mb-4'>
                <code>
                    my_number = 10 <br />
                    print(type(my_number))  # Output: int
                </code>
            </pre>

            <h4 className="text-xl font-bold mb-2">4. split()</h4>
            <p className='mb-4'>
                The <code>split()</code> function splits a string into a list of substrings based on a specified delimiter (default is whitespace).
            </p>
            <pre className='mb-4'>
                <code>
                    my_string = "Hello, how are you?" <br />
                    words = my_string.split() <br />
                    print(words)  # Output: ['Hello,', 'how', 'are', 'you?']
                </code>
            </pre>

            <h4 className="text-xl font-bold mb-2">5. join()</h4>
            <p className='mb-4'>
                The <code>join()</code> function concatenates a list of strings into a single string, with a specified separator.
            </p>
            <pre className='mb-4'>
                <code>
                    words = ['Hello', 'how', 'are', 'you?'] <br />
                    sentence = " ".join(words) <br />
                    print(sentence)  # Output: Hello how are you?
                </code>
            </pre>

            <h4 className="text-xl font-bold mb-2">6. sum()</h4>
            <p className='mb-4'>
                The <code>sum()</code> function returns the sum of all items in an iterable, such as a list or tuple.
            </p>
            <pre className='mb-4'>
                <code>
                    numbers = [1, 2, 3, 4, 5] <br />
                    total = sum(numbers) <br />
                    print(total)  # Output: 15
                </code>
            </pre>

            <h4 className="text-xl font-bold mb-2">7. max() and min()</h4>
            <p className='mb-4'>
                The <code>max()</code> function returns the largest item, while <code>min()</code> returns the smallest item from an iterable.
            </p>
            <pre className='mb-4'>
                <code>
                    values = [10, 20, 5, 15] <br />
                    print(max(values))  # Output: 20 <br />
                    print(min(values))  # Output: 5
                </code>
            </pre>

            <h3 className="text-2xl font-bold mb-2 mt-8">Why Use Built-in Functions?</h3>
            <ul className="list-disc list-inside mb-4">
                <li className='mb-2'><strong>Efficiency</strong>: Built-in functions save time by providing common functionality.</li>
                <li className='mb-2'><strong>Readability</strong>: Using descriptive built-in functions makes your code easier to understand.</li>
                <li><strong>Consistency</strong>: They ensure standard behavior across Python programs, reducing errors.</li>
            </ul>

            <h3 className="text-2xl font-bold mb-2 mt-8">Example Use Case</h3>
            <p className='mb-4'>Let's say you want to process a list of names, count them, and create a comma-separated string:</p>
            <pre>
                <code>
                    names = ["Alice", "Bob", "Charlie"] <br />
                    count = len(names)  <br />
                    print("Number of names:", count)  <br />
                    name_string = ", ".join(names) <br />
                    print("Names:", name_string)  <br />
                    # Output: Number of names: 3 <br />
                    # Output: Names: Alice, Bob, Charlie
                </code>
            </pre>

            <h3 className="text-2xl font-bold mb-2 mt-8">Conclusion</h3>
            <p>
                Built-in functions are powerful tools in Python that simplify tasks and enhance code readability. By utilizing these functions, you can write more efficient and effective programs. In the next unit, we'll explore how to create your own functions to encapsulate logic and operations!
            </p>
            <p className='mb-12'>Next, we'll dive into defining and using custom functions.</p>
            <button 
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700" 
                onClick={() => setActiveUnit(4)}
            >
                Test Your Learning
            </button>
        </section>
    );
};

export default Unit2;