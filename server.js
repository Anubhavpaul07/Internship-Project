const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Handle form submission
app.post('/submit', (req, res) => {
    const { Name, Email } = req.body;  // Use the same field names as in the HTML

    // Use backticks for template literals
    res.send(`Thank you, ${Name}. Your email, ${Email}, has been submitted.`);
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
