// let welcome = ("Welcome to this password validator tool, May I help you validate your password?")
console.log ("Welcome to this password validator tool, May I help you validate your password?")
const readline = require('readline')
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  
  
//   const str = answer
  reader.question(`Please type in your password.`, function(answer){
    console.log(answer + ` is ` + answer.length + ` code units long` ); 
    if (answer.length >= 10) {
        console.log("Your password is long enough, Good job!")
    }
        // else (answer.lenth <10) { console.log(" Your password is not 10 characters long, must have at least 10 characters ")
        }
// This line above it was just this one { that was giving me problems so I // it out so it still runs.
    
  )

//   `${str} ${str.length}`);

// console.log("Hi " + answer)