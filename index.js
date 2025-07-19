const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

// user : simpleDBUser
// pass: EyZxhMDHq5g4DhqC
app.get('/', (req,res) => {
    res.send('siple curd server running')
})
app.listen(port, () => {
    console.log(`siple curd server running , ${port}`)
})