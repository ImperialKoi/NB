import React from 'react';

const Unit4 = ({ setActiveUnit }) => {
    return (
        <section id="unit4">
            <h2 className="text-3xl font-bold mb-8">Unit 4: Lists, Arrays, and Dictionaries</h2>
            <p className="mb-8">
                In programming, data is often stored in collections. These collections can hold multiple values at once, allowing you to organize and manage your data more effectively. In Python, the most common types of collections are <strong>Lists</strong> and <strong>Dictionaries</strong>. 
            </p>
            
            <h3 className="text-2xl font-bold mb-4">Lists and Arrays</h3>
            <p className="mb-4">
                A <strong>list</strong> (called an array in some other languages) is an ordered collection of items that can hold multiple pieces of data. Lists can store any type of data, including numbers, strings, or even other lists.
            </p>

            <h4 className="text-xl font-bold mb-2">Creating a List</h4>
            <p className="mb-4">In Python, you can create a list using square brackets:</p>
            <pre className="mb-4">
                <code>
                fruits = <q>apple</q>, <q>banana</q>, <q>cherry</q><br />
                scores = [100, 85, 75]
                </code>
            </pre>

            <h4 className="text-xl font-bold mb-2">Accessing List Items</h4>
            <p className="mb-4">You can access items in a list by their index (position). Note that Python uses 0-based indexing, meaning the first item is at position 0.</p>
            <pre className="mb-4">
                <code>
                fruits = [<q>apple</q>, <q>banana</q>, <q>cherry</q>]<br />
                print(fruits[0])  &#35; Output&#58; <q>apple</q><br />
                print(fruits[1])  &#35; Output&#58; <q>banana</q>
                </code>
            </pre>

            <h4 className="text-xl font-bold mb-2">Modifying a List</h4>
            <p className="mb-4">You can change the value of a specific item in a list by assigning a new value to its index:</p>
            <pre className="mb-4">
                <code>
                fruits = [<q>apple</q>, <q>banana</q>, <q>cherry</q>]<br />
                fruits[1] = <q>orange</q><br />
                print(fruits)  &#35; Output&#58; [<q>apple</q>, <q>orange</q>, <q>cherry</q>]
                </code>
            </pre>

            <h4 className="text-xl font-bold mb-2">Common List Operations</h4>
            <p className="mb-4">Python provides many built-in functions for working with lists:</p>
            <ul className="list-disc list-inside mb-4">
                <li><strong>Append</strong>&#58; Add an item to the end of the list.</li>
                <pre>
                    <code>fruits.append(<q>mango</q>)</code>
                </pre>
                <li><strong>Remove</strong>&#58; Remove an item from the list.</li>
                <pre>
                    <code>fruits.remove(<q>banana</q>)</code>
                </pre>
                <li><strong>Length</strong>&#58; Get the number of items in the list.</li>
                <pre>
                    <code>len(fruits)</code>
                </pre>
            </ul>

            <h3 className="text-2xl font-bold mb-4">Dictionaries</h3>
            <p className="mb-4">
                A <strong>dictionary</strong> is a collection of key-value pairs. Each key is unique, and it maps to a specific value. Dictionaries are useful when you want to store data in a way that makes it easy to retrieve values based on unique keys.
            </p>

            <h4 className="text-xl font-bold mb-2">Creating a Dictionary</h4>
            <p className="mb-4">In Python, you can create a dictionary using curly braces, where each key is associated with a value:</p>
            <pre className="mb-4">
                <code>
                    student = {"{"}<q>name</q>&#58; <q>Alice</q>, <q>age</q>&#58; 15, <q>grade</q>&#58; <q>10th</q>{"}"}<br />
                    scores = {"{"}<q>math</q>&#58; 90, <q>science</q>&#58; 85, <q>english</q>&#58; 88{"}"}
                </code>
            </pre>

            <h4 className="text-xl font-bold mb-2">Accessing Dictionary Items</h4>
            <p className="mb-4">You can access values in a dictionary by referring to their keys&#58;</p>
            <pre className="mb-4">
                <code>
                student = {"{"}<q>name</q>&#58; <q>Alice</q>, <q>age</q>&#58; 15, <q>grade</q>&#58; <q>10th</q>{"}"}<br />
                print(student[<q>name</q>])  &#35; Output&#58; <q>Alice</q><br />
                print(student[<q>age</q>])   &#35; Output&#58; 15
                </code>
            </pre>

            <h4 className="text-xl font-bold mb-2">Modifying a Dictionary</h4>
            <p className="mb-4">You can change the value associated with a specific key by reassigning it&#58;</p>
            <pre className="mb-4">
                <code>
                student[<q>age</q>] = 16<br />
                print(student)  &#35; Output&#58; {"{"}<q>name</q>&#58; <q>Alice</q>, <q>age</q>&#58; 16, <q>grade</q>&#58; <q>10th</q>{"}"}
                </code>
            </pre>

            <h4 className="text-xl font-bold mb-2">Common Dictionary Operations</h4>
            <ul className="list-disc list-inside mb-4">
                <li><strong>Adding a New Key-Value Pair</strong>&#58; You can add new items by assigning a value to a new key.</li>
                <pre>
                    <code>student[<q>school</q>] = <q>Abbey Park High</q></code>
                </pre>
                <li><strong>Removing a Key-Value Pair</strong>&#58; You can remove an item using the <code>del</code> keyword.</li>
                <pre>
                    <code>del student[<q>grade</q>]</code>
                </pre>
                <li><strong>Getting All Keys or Values</strong>&#58; You can retrieve all keys or values in a dictionary.</li>
                <pre>
                    <code>student.keys()</code><br />
                    <code>student.values()</code>
                </pre>
            </ul>

            <h3 className="text-2xl font-bold mb-4">Why Use Lists and Dictionaries?</h3>
            <ul className="list-disc list-inside">
                <li className="mb-2"><strong>Organize Data</strong>&#58; Lists and dictionaries allow you to organize related pieces of data together, making your programs more structured.</li>
                <li className="mb-2"><strong>Efficient Lookups</strong>&#58; Dictionaries are especially useful for quick lookups of data when you have a unique key.</li>
                <li><strong>Flexibility</strong>&#58; Both lists and dictionaries can store different types of data, including other lists or dictionaries.</li>
            </ul>

            <div className="mb-8"></div>

            <h3 className="text-2xl font-bold mb-4">Example Use Case</h3>
            <p>Imagine you're keeping track of student grades&#58;</p>
            <div className="mb-4"></div>

            <h4 className="text-xl font-bold mb-2">Python Example</h4>
            <pre>
                <code>
                students = [<q>Alice</q>, <q>Bob</q>, <q>Charlie</q>]<br />
                grades = {"{"}<q>Alice</q>&#58; 90, <q>Bob</q>&#58; 85, <q>Charlie</q>&#58; 88{"}"}<br />
                print(grades[<q>Alice</q>])  &#35; Output&#58; 90
                </code>
            </pre>

            <button 
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 mt-8" 
                onClick={() => setActiveUnit(8)}
            >
                Test Your Learning
            </button>
        </section>
    );
};

export default Unit4;