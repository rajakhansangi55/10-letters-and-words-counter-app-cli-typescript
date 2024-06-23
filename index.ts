#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to RA Letters & Words Counter App!")
let myLoop = true;
while(myLoop){
    const userInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'para',
            message: "Please enter your paragraph to count Letters and Words in it!"
      },{
        type:'list',
        name:'ask',
        message:"What do you want to count in your paragraph?",
        choices:["1. Letters", "2. Words", "3. Both Letters and Words"]
      }
    ]);
let {para, ask} = userInput                                    //Destructuring
if(para.length === 0) emptyInput();
if(ask === "1. Letters") lettersFun();
if(ask === "2. Words")  wordsFun();
if(ask === "3. Both Letters and Words") both();

    function emptyInput(){
console.log(`Your input is empty. Please, try again with valid input!\n `)
    }
    function lettersFun(){
      const lettersWithoutSpace = para.replace(/\s/g, "");
      const lettersCount = lettersWithoutSpace.length;
      console.log(`Total letters in your paragraph are "${lettersCount}"!\n`) 
    }
    function wordsFun(){
        const wordsArray = para.split(" ");
        const wordsCount = wordsArray.length;
        console.log(`Total words in you paragraph are "${wordsCount}"\n`)  
    }
    function both(){
       lettersFun();
       wordsFun(); 
    }
    let countMore = await inquirer.prompt({
        type:'confirm',
        name:'more',
        message:"Do you want more?",
        default: false,
    })
    if(!countMore.more){
        myLoop = false;
        console.log("Thank you for using our Letters & words Counter app!\n")
    }
}