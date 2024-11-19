import React from 'react';

const Unit3 = ({ setActiveUnit }) => {
    return (
        <section id="unit3">
            <h2 className="text-3xl font-bold mb-8">Unit 3: Loops and Conditionals</h2>
            <p className="mb-8">
                Loops and conditionals are essential control structures in Python. They allow you to execute code based on 
                conditions and repeat tasks efficiently.
            </p>
            
            <h3 className="text-2xl font-bold mb-4">Conditionals</h3>
            <p className="mb-4">
                Conditionals are used to execute code based on certain conditions. Python uses <strong>if</strong>, 
                <strong>elif</strong> (else if), and <strong>else</strong> to handle conditional logic.
            </p>

            <h4 className="text-xl font-bold mb-2">Basic Conditional Syntax</h4>
            <pre className="mb-4">
                <code>
                if condition: <br />
                    # code to execute if the condition is True <br />
                elif another_condition: <br />
                    # code to execute if the previous condition is False and this one is True <br />
                else: <br />
                    # code to execute if all conditions are False
                </code>
            </pre>

            <h4 className="text-xl font-bold mb-2">Example</h4>
            <pre className="mb-4">
                <code>
                age = 18 <br />
                if age &gt;= 18: <br />
                    print("You are an adult.") <br />
                elif age &lt; 18 and age &gt; 12: <br />
                    print("You are a teenager.") <br />
                else: <br />
                    print("You are a child.")  <br />
                </code>
            </pre>

            <p className="mb-8">In this example, Python checks the conditions and executes the block where the condition is True.</p>

            <h3 className="text-2xl font-bold mb-4">Loops</h3>
            <p className="mb-4">
                Loops allow you to repeat code multiple times. Python has two types of loops: <strong>for</strong> and 
                <strong>while</strong> loops.
            </p>

            <h4 className="text-xl font-bold mb-2">For Loop</h4>
            <p className="mb-4">
                The <strong>for</strong> loop iterates over a sequence (like a list or a range of numbers).
            </p>

            <pre className="mb-4">
                <code>
                fruits = ["apple", "banana", "cherry"] <br />
                for fruit in fruits: <br />
                    print(fruit)
                </code>
            </pre>
            <p className="mb-4">Output:</p>
            <pre className="mb-8">
                <code>
                apple <br />
                banana <br />
                cherry
                </code>
            </pre>

            <h4 className="text-xl font-bold mb-2">While Loop</h4>
            <p className="mb-4">
                The <strong>while</strong> loop runs as long as a condition is True.
            </p>

            <pre className="mb-4">
                <code>
                count = 0 <br />
                while count &lt; 5: <br />
                    print(count) <br />
                    count += 1
                </code>
            </pre>
            <p className="mb-4">Output:</p>
            <pre className="mb-8">
                <code>
                0 <br />
                1 <br />
                2 <br />
                3 <br />
                4
                </code>
            </pre>

            <h3 className="text-2xl font-bold mb-4">Breaking Out of Loops</h3>
            <p className="mb-4">
                You can use the <strong>break</strong> statement to exit a loop before it finishes all iterations.
            </p>
            <pre className="mb-4">
                <code>
                for i in range(10): <br />
                    if i == 5: <br />
                        break <br />
                    print(i)
                </code>
            </pre>
            <p className="mb-4">Output:</p>
            <pre className="mb-8">
                <code>
                0 <br />
                1 <br />
                2 <br />
                3 <br />
                4
                </code>
            </pre>

            <h3 className="text-2xl font-bold mb-4">Continue in Loops</h3>
            <p className="mb-4">
                The <strong>continue</strong> statement skips the rest of the code inside the loop for the current iteration and 
                continues with the next iteration.
            </p>
            <pre className="mb-4">
                <code>
                for i in range(10): <br />
                    if i % 2 == 0: <br />
                        continue <br />
                    print(i)
                </code>
            </pre>
            <p className="mb-4">Output:</p>
            <pre className="mb-8">
                <code>
                1 <br />
                3 <br />
                5 <br />
                7 <br />
                9
                </code>
            </pre>

            <h3 className="text-2xl font-bold mb-4">Why Use Loops and Conditionals?</h3>
            <ul className="list-disc list-inside mb-8">
                <li className="mb-2"><strong>Efficiency:</strong> Loops help you avoid repetitive code, making your programs more concise.</li>
                <li className="mb-2"><strong>Flexibility:</strong> Conditionals let you control the flow of your program based on different conditions.</li>
                <li><strong>Automation:</strong> With loops, you can automate repetitive tasks like data processing and iteration.</li>
            </ul>

            <h3 className="text-2xl font-bold mb-2">Conclusion</h3>
            <p>
                Loops and conditionals are fundamental for writing dynamic, efficient programs. They allow your code to make decisions 
                and repeat actions. In the next unit, we will explore how to use data structures like lists, dictionaries, and tuples 
                to manage data in Python.
            </p>
            <p className="mb-12">Ready to test your knowledge with some challenges? Click the button below!</p>
            <button 
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700" 
                onClick={() => setActiveUnit(6)}
            >
                Test Your Learning
            </button>
        </section>
    );
};

export default Unit3;