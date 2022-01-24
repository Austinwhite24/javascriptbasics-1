// let welcome = ("Welcome to this password validator tool, May I help you validate your password?")
console.log ("Welcome to this password validator tool, May I help you validate your password?")
const readline = require('readline')
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  
  

  reader.question(`Please type in your password.`, function(answer){
    console.log(answer + ` is ` + answer.length + ` code units long` ); 
    if (answer.length >= 10) {
        console.log("Your password is long enough, Good job!")
    } else {
     console.log(" Your password is not 10 characters long, you must have at least 10 characters ")
    }


reader.close()
        })
  
        // (answer.lenth < 10)
               
//  reader.question('what is your password?', function(answer){
//         if(answer.length >= 10 && answer.includes('1')){
//           console.log('that password is good')
//         } else {
//               console.log('That password does not meet the requirments')
//         }
        
//       reader.close()
//  })




