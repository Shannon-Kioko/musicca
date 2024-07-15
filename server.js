// Calling express() function to create an Express application
// whose output is then stored in yhr variable called app 
const express = require('express');
// Adding cors as middleware to the Express application
const cors = require('cors')
const app = express();
app.use(cors());

app.use('/signup', (req,res) => {
    res.send({
        token: 'test123'
    })
})

app.listen(4000, () => {
    console.log('API is running on http://localhost:4000/signup')
})
