// Create a button element
const button = document.createElement('button');
button.textContent = 'Click me';

// Create a paragraph element
const paragraph = document.createElement('p');
paragraph.textContent = 'Hello, World!';

// Append the button and paragraph to the body
document.body.appendChild(button);
document.body.appendChild(paragraph);

// Add an event listener to the button
button.addEventListener('click', () => {
    paragraph.textContent = 'Button clicked!';
});