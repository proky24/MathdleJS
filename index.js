//THE WHOLE THING SPAWN

const problems = [
    "1+2*3-4/5",  
    "5-3+2*1=4",  
    "4/2+3-1=4",  
    "2+3*4-5/1",  
    "5/1+2-3=4",
    "(4/2)+3-1",
    "4/x+5-3=2",
    "2-3+5-4=2"
]

const characters = [
    "1", "2", "3", "4", "5", "+", "-", "*", "/", "(" , ")", "x" , "√", "="
]   

let array = [];

const characterContainer = document.getElementById("characterContainer");
const guessesContainer = document.getElementById("guessesContainer");

for(let i = 0; i < characters.length; i++) {
    const button = document.createElement("button");
    button.innerText = characters[i];
    button.onclick = () => {pushCharacter(characters[i])};
    characterContainer.appendChild(button);
}

for(let i = 0; i < 45; i++){
    const div = document.createElement("div");
    div.classList.add("guess");
    guessesContainer.appendChild(div);
}

//THE WHOLE THING SPAWN

//THE GAME
const currentProblem = problems[Math.floor(Math.random() * problems.length)]; // Randomly select a problem
console.log(currentProblem);
array = currentProblem.split(""); // Split the problem into an array of characters

let problemDuplicates = []; // Array to store the duplicates in the problem
array.filter((item, index) => {
    if(array.indexOf(item) != index) { // If the character is a duplicate
        problemDuplicates.push(item); // Add it to the duplicates array
    }
});

problemDuplicates.forEach((item) => {
    problemDuplicates.push(item); // Add the duplicate to the array twice
})

console.log(problemDuplicates + " duplicates");

let guesses = []; // Array to store the guesses
let numberOfGuesses = 0; // Number of guesses made

const pushCharacter = (char) => {
    guesses[numberOfGuesses] = char;
    document.getElementsByClassName("guess")[numberOfGuesses].innerText = char;
    numberOfGuesses++;
    
    if(numberOfGuesses == 9 || numberOfGuesses == 18 || numberOfGuesses == 27 || numberOfGuesses == 36 || numberOfGuesses == 45){
        console.log("compare");
        compare(numberOfGuesses); //now compare the guesses with the current problem 
    } 
}

const compare = (numberOfGuesses) => {


    switch (numberOfGuesses) {
        case 9:
            for(let i = 0; i < currentProblem.length; i++) {
                if(array[i] !== guesses[i]) {  
                    if(problemDuplicates.includes(guesses[i]) || array.includes(guesses[i]) && document.getElementsByClassName("guess")[i].style.backgroundColor != "green") {
                        document.getElementsByClassName("guess")[i].style.backgroundColor = "orange";
                        problemDuplicates.splice(problemDuplicates.indexOf(guesses[i]), 1); // Remove the duplicate from the duplicates array
                    } else {
                        document.getElementsByClassName("guess")[i].style.backgroundColor = "red";
                    }
                } else {
                    document.getElementsByClassName("guess")[i].style.backgroundColor = "green";
                    array[i] = "Q"; // Change the character in the array to Q so it won't be compared again
                }
            }
        break;

       
    }
}