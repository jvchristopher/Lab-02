'use strict'
let username = prompt("What is your name")
alert("Hello" + username + "!")

let answer0 = prompt("Did I attend a college?").toLowerCase()

if (answer0=== "yes" || answer0 === "y") {
    console.log ("You're correct! Go Bulldogs!") 
} else {
    // if "no" then you are incorrect
    console.log("That's incorrect. I attended college from 2018-2020.")
} 

let answer1 = prompt ("Was the Equity Alliance my first job after college?").toLowerCase()
if (answer1 === "yes" || answer1 === 'y'){
    console.log ("That's correct. I worked as a regional organizer during the 2020 election.")
} else {
    //if "no" then you are incorrect
    console.log ("That is incorrect. The Equity Alliance was my first job after college.")
}
let answer2 = prompt ("Did I move to Valdosta Georgia my senior year of High School?").toLowerCase()
if (answer2 === "yes" || answer2 ==="y"){
    console.log ("Thats incorrect. I did not move to Valdosta my senior year of High school.")
}  else{ 
    //if "no" then you are correct
    console.log ("That is correct. I am originally from Valdosta and moved to Warner Robins Georgia.")
}

let answer3 = prompt ("Do I have a real estate license?").toLowerCase()
if (answer3 === "yes" || answer3 ==="y"){
    console.log ("That is correct. I do hold a real estate license in the state of Tennessee.")
} else {
    //if "no" then you are incorrect
    console.log ("That is incorrect. I do have a real estate license.")
}
let answer4 = prompt ("Am I currently enrolled in CodeX Academy's Front End Developer Cohort")
if (answer4 ==="yes" || answer4 === "y"){
    console.log ("That is correct. I am apart of the programs Spring 2023 cohort.")

} else{ 
    //if "no" then you are incorrect
    console.log ("That is incorrect. I am currently enrolled in CodeX Academy's Front End Developer Program.")
}
