const express = require('express')
const app = express.Router()

// Actions
app
    .get('/', (req, res, next) => {
        const joke = fetch('https://v2.jokeapi.dev/joke/Any') 
            .then(response => response.json())
            .then(x => {
                if(x.safe == false)
                    throw new Error("Not safe for work")
                // if(x.safe == true) 
                //     throw new Error("Safe for work")
                res.send(x.joke)
            })
            .catch(err => {
                next(err) //calls error handler
            })

        

        
        
        
    })

module.exports = app