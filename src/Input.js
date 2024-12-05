import React, { useState } from 'react';

function Input() {
  // Declare state to store the input value
  const [inputValue, setInputValue] = useState('');

  // Event handler to update state on input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Update the state with the current input value
  };

  return (
    <div>
      <h2>React Input Handler</h2>
      <input
        type="text"
        placeholder="Type something..."
        value={inputValue} // Bind input to the state
        onChange={handleInputChange} // Call handler on input change
      />
      <p>Updated Value: {inputValue}</p> {/* Display the updated value */}
    </div>
  );
}

export default Input;



// 02 Implement a React form with uncontrolled components. Submit the form and display the input values on the
// without managing them in the components state.

// import React, { useRef } from 'react';
// import './App.css';

// function App() {
//   // Create refs for each input field
//   const nameRef = useRef();
//   const emailRef = useRef();

//   // Handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent default form submission
//     // Accessing the current value of the inputs using refs
//     const name = nameRef.current.value;
//     const email = emailRef.current.value;

//     // Display the input values in the console or on the screen
//     alert(`Name: ${name}, Email: ${email}`);
//   };

//   return (
//     <div className="App">
//       <h1>React Uncontrolled Form</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name: </label>
//           <input type="text" ref={nameRef} placeholder="Enter your name" />
//         </div>
//         <div>
//           <label>Email: </label>
//           <input type="email" ref={emailRef} placeholder="Enter your email" />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;

