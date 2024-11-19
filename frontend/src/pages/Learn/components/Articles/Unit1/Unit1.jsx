import React from 'react';

const Unit1 = ({ setActiveUnit }) => {
    return (
    <section id="unit1">
        <h2 className="text-3xl font-bold mb-8">Unit 1: Variables</h2>
        <p className='mb-8'>
            Variables are one of the most fundamental concepts in programming. Think of a variable as a container that holds 
            information that can change or be reused. This information, or data, can be anything from numbers and text to more 
            complex objects depending on the programming language you're using.
        </p>
        
        <h3 className="text-2xl font-bold mb-4">What is a Variable?</h3>
        <p className='mb-4'>
            A variable is like a labeled box in which you can store a piece of data. Once you've stored this data, you can use it 
            later, update it, or check what’s inside.
        </p>
        <p className='mb-8'>
            In most programming languages, variables have <strong>names</strong> (to identify them) and <strong>values </strong> 
            (the data stored in them). For example, if we want to store your age, we might create a variable named 
            <code>age</code> and set its value to 15.
        </p>
        
        <h3 className="text-2xl font-bold mb-2">Syntax: How to Create a Variable</h3>
        <p className='mb-4'>Different programming languages have different ways of declaring variables, but the concept is the same. Here are examples in two common languages:</p>
        
        <h4 className="text-xl font-bold mb-2">Python</h4>
        <pre className='mb-4'>
            <code>age = 15 <br></br>
            name = "Alice"</code>   
        </pre>

        <h4 className="text-xl font-bold mb-2">JavaScript</h4>
        <pre className='mb-4'>
        <code>
        let age = 15;
        <br></br> 
        const name = "Alice";  // const means the value can't be changed
        </code>
        </pre>
        <div className='mb-8'></div>

        <h3 className="text-2xl font-bold mb-2">Rules for Naming Variables</h3>
        <ul className="list-disc list-inside">
            <li  className='mb-4'><strong>Start with a letter or underscore</strong>: Variable names cannot start with a number.
                <br /> <div className='mb-2'></div>Good: <code>age</code>, <code>_score</code><br /> <div className='mb-2'></div>Bad: <code>1age</code></li>
                <li><strong>No spaces</strong>: Use underscores or camelCase for multi-word names.
                <br /><div className='mb-2'></div>Good: <code>user_name</code>, <code>userName</code><br /> Bad: <code>user name</code></li><div className='mb-4'></div>
                <li><strong>Be descriptive</strong>: Use names that reflect the data the variable holds, like          
                <code> totalScore</code> or <code>playerName</code>.<div className='mb-8'></div>
            </li>
        </ul>

        <h3 className="text-2xl font-bold mb-2">Assigning and Reassigning Values</h3>
        <p className='mb-4'>Once you've declared a variable, you can assign it a value. In some languages, you can also reassign it later.</p>

        <h4 className="text-xl font-bold mb-2">Example in Python</h4>
        <pre>
        <code>
        score = 10  # Assign the value 10 to 'score' <br />
        score = 20  # Reassign 'score' to 20
        </code>
        </pre>
        <div className='mb-4'></div>

        <h4 className="text-xl font-bold mb-1">Example in JavaScript</h4>
        <pre>
        <code>
        let score = 10;  // Assign the value 10 <br />
        score = 20;      // Reassign to 20
        </code>
        </pre>
        <div className='mb-4'></div>

        <p>Note that if you use <code>const</code> in JavaScript, the value cannot be reassigned.</p>

        <div className='mb-8'></div>

        <h3 className="text-2xl font-bold mb-2">Variable Types</h3>
        <p>Variables can store different types of data, such as:</p>
        <div className='mb-2'></div>
        <ul className="list-disc list-inside">
            <li className='mb-2'><strong>Numbers</strong>: <code>age = 15</code>, <code>price = 99.99</code></li>
            <li className='mb-2'><strong>Text (Strings)</strong>: <code>name = "Alice"</code></li>
            <li className='mb-2'><strong>Boolean (True/False)</strong>: <code>isGameOver = false</code></li>
            <li className='mb-2'><strong>Lists/Arrays</strong>: <code>scores = [100, 200, 300]</code></li>
            <li><strong>Objects</strong> (more advanced): Represent more complex structures, like a player's profile in a game.</li>
        </ul>

        <div className='mb-8'></div>

        <h3 className="text-2xl font-bold mb-2">Why Use Variables?</h3>
        <ul className="list-disc list-inside">
            <li className='mb-2'><strong>Flexibility</strong>: Variables allow you to store data that can change, making your programs more dynamic.</li>
            <li className='mb-2'><strong>Reusability</strong>: Instead of writing the same value multiple times, you can store it in a variable and reuse it.</li>
            <li><strong>Clarity</strong>: Variables help make your code more readable. Instead of hard-coding values everywhere, 
            you use meaningful names, making the program easier to understand and maintain.</li>
        </ul>
        <div className='mb-8'></div>

        <h3 className="text-2xl font-bold mb-2">Example Use Case</h3>
        <p>Let’s say you’re building a simple calculator that adds two numbers:</p>
        <div className='mb-4'></div>

        <h4 className="text-xl font-bold mb-2">Python</h4>
        <pre>
        <code>
        number1 = 5 <br />
        number2 = 10 <br />
        sum = number1 + number2 <br />
        print(sum)  # Output: 15 <br />
        </code>
        </pre>
        <div className='mb-4'></div>

        <h4 className="text-xl font-bold mb-2">JavaScript</h4>
        <pre>
        <code>
        let number1 = 5; <br />
        let number2 = 10; <br />
        let sum = number1 + number2; <br />
        console.log(sum);  // Output: 15 <br />
        </code>
        </pre>
        <div className='mb-8'></div>

        <h3 className="text-2xl font-bold mb-2">Conclusion</h3>
        <p>
            Variables are the building blocks of every program. They store the data your program works with and allow you to 
            create flexible, dynamic solutions. By mastering variables, you're setting yourself up for success in learning more 
            complex programming concepts!
        </p>
        <p className='mb-12'>Next, we'll dive into how variables interact with operators to perform calculations and make decisions.</p>
        <button 
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700" 
                onClick={() => setActiveUnit(2)}
            >
                Test Your Learning
        </button>
    </section>
    );
};

export default Unit1;