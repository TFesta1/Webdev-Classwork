const express = require('express')
const products = require("./controllers/products");
const app = express()


const hostname = '127.0.0.1';
// If there's an env var set, use that. Otherwise, use 3000
const port = process.env.PORT || 3000 ; //80 for unsecure HTTP traffic, 443 for secure HTTPS traffic


// Using Vue3
/*
We're using the Composition API in Vue3

npm init vue@latest

npm run build (the dist folder can be used to build)
npm run dev (run your server)
*/

// Start variables as "const", then change to "let" if needed


// function(req, res) => {}    OR   (req, res) => {};.
// The difference is that the first one is a function declaration, and the second one is a function expression, which means that the second one is a function that is assigned to a variable.

app
  .get('/', (req, res) => {
    res.send('Hello World! From express')
  })

  .use("/products", products)

// to run, type: node server/index.js
// npm run start ("start" is a script in package.json)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})