const express = require('express')
const products = require('./controllers/products')
const app = express()
const jokes = require('./controllers/jokes')

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;


// MiddleWare
// app 
//   .use(express.json())
//   .use(express.static(path.join(__dirname, "../client/dist")))

// Actions
app
    .get('/', (req, res) => {
        res.send('Hello World! From Express')
    })
    .use('/products', products)
    .use('/jokes', jokes)


// app.get("*"), (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/dist/index.html"));
// };


app.listen(port, () => 
  console.log(`Server running at http://${hostname}:${port}/`)
);