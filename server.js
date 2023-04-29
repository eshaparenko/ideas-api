const express = require('express');
const ideas = require('./data')
const port = 5000

const app = express();

//Body parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const ideaRouter = require('./routes/ideas');
app.use('/api/ideas', ideaRouter)

app.listen(port, () => console.log(`Server listning on port ${port}`))
 
