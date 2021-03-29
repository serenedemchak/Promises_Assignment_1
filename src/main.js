const { welcome, goodbye, tell } = require("../utils/fortune-teller");

function getFortune(question) {

    const tellPromise = tell(question).catch((error) => {
        console.log(`There was an error: ${error}`)
    });

tellPromise.then((fortune) => {
    console.log(`Your question was: ${question}`);
    console.log(`Your fortune is: ${fortune}`);
})
return tellPromise
}

function fullSession(question) {
    output = []
   const promise = welcome()
   .then(console.log)
.then(() => {
    tell(question)
    .then((fortune) => {
    console.log(`Your question was: ${question}`);
    console.log(`Your fortune is: ${fortune}`);
    })
    .then(() => {
        goodbye.then(console.log)
    })
    .catch((error) => {
        console.log(`There was an error: ${error}`)
    })
})
return promise
}


module.exports = { getFortune, fullSession };
