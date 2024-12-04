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
    "1", "2", "3", "4", "5", "+", "-", "*", "/", "(" , ")", "x" , "="
]   

let array = [];
let array2 = [];
let array3 = [];
let array4 = [];
let array5 = [];
let final = [];
let tries = 1;
let keydown = "";

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

array = currentProblem.split(""); // Split the problem into an array of characters
array2 = currentProblem.split(""); 
array3 = currentProblem.split(""); 
array4 = currentProblem.split(""); 
array5 = currentProblem.split(""); 

let guesses = []; // Array to store the guesses
let numberOfGuesses = 0; // Number of guesses made
let character = "";
let index = 0;
let placement = [];

const pushCharacter = (char) => {
    guesses[numberOfGuesses] = char;
    document.getElementsByClassName("guess")[numberOfGuesses].innerText = char;
    numberOfGuesses++;
    
    if(numberOfGuesses == 9 || numberOfGuesses == 18 || numberOfGuesses == 27 || numberOfGuesses == 36 || numberOfGuesses == 45){
        compare(numberOfGuesses); //now compare the guesses with the current problem 
    } 
}

const compare = (numberOfGuesses) => {


    switch (numberOfGuesses) {
        case 9:
            for(let i = 0; i < currentProblem.length; i++) {
                if(array[i] !== guesses[i]) {  
                    if(array.includes(guesses[i])) {
                        document.getElementsByClassName("guess")[i].style.backgroundColor = "orange";
                        character = guesses[i];
                        placement.push(character);
                        index = array.indexOf(character);
                        array[index] = "Q"; // Change the character in the array to Q so it won't be compared again
                    } else {
                        document.getElementsByClassName("guess")[i].style.backgroundColor = "red";
                    }
                } else {
                    array[i] = "Q"; // Change the character in the array to Q so it won't be compared again
                    document.getElementsByClassName("guess")[i].style.backgroundColor = "#00b400";
                }
            }
            checkStatus();
        break;

        case 18:
            for(let i = 0; i < currentProblem.length; i++) {
                if(array2[i] !== guesses[i + 9]) {  
                    if(array2.includes(guesses[i + 9])) {
                        document.getElementsByClassName("guess")[i + 9].style.backgroundColor = "orange";
                        character = guesses[i + 9];
                        index = array2.indexOf(character);
                        array2[index] = "Q"; // Change the character in the array2 to Q so it won't be compared again
                    } else {
                        document.getElementsByClassName("guess")[i + 9].style.backgroundColor = "red";
                    }
                } else {
                    document.getElementsByClassName("guess")[i + 9].style.backgroundColor = "#00b400";
                    array2[i] = "Q"; // Change the character in the array2 to Q so it won't be compared again
                }
            }
            checkStatus();

        break;

        case 27:
            for(let i = 0; i < currentProblem.length; i++) {
                if(array3[i] !== guesses[i + 18]) {  
                    if(array3.includes(guesses[i + 18])) {
                        document.getElementsByClassName("guess")[i + 18].style.backgroundColor = "orange";
                        character = guesses[i + 18];
                        index = array3.indexOf(character);
                        array3[index] = "Q"; // Change the character in the array3 to Q so it won't be compared again
                    } else {
                        document.getElementsByClassName("guess")[i + 18].style.backgroundColor = "red";
                    }
                } else {
                    document.getElementsByClassName("guess")[i + 18].style.backgroundColor = "#00b400";
                    array3[i] = "Q"; // Change the character in the array3 to Q so it won't be compared again
                }
            }
            checkStatus();

        break;

        case 36:
            for(let i = 0; i < currentProblem.length; i++) {
                if(array4[i] !== guesses[i + 27]) {  
                    if(array4.includes(guesses[i+ 27])) {
                        document.getElementsByClassName("guess")[i + 27].style.backgroundColor = "orange";
                        character = guesses[i + 27];
                        index = array4.indexOf(character);
                        array4[index] = "Q"; // Change the character in the array to Q so it won't be compared again
                    } else {
                        document.getElementsByClassName("guess")[i + 27].style.backgroundColor = "red";
                    }
                } else {
                    document.getElementsByClassName("guess")[i + 27].style.backgroundColor = "#00b400";
                    array4[i] = "Q"; // Change the character in the array to Q so it won't be compared again
                }
            }
            checkStatus();

        break;

        case 45:
            for(let i = 0; i < currentProblem.length; i++) {
                if(array5[i] !== guesses[i + 36]) {  
                    if(array5.includes(guesses[i + 36])) {
                        document.getElementsByClassName("guess")[i + 36].style.backgroundColor = "orange";
                        character = guesses[i + 36];
                        index = array5.indexOf(character);
                        array5[index] = "Q"; // Change the character in the array to Q so it won't be compared again
                        
                    } else {
                        document.getElementsByClassName("guess")[i + 36].style.backgroundColor = "red";
                    }
                } else {
                    document.getElementsByClassName("guess")[i + 36].style.backgroundColor = "#00b400";
                    array5[i] = "Q"; // Change the character in the array to Q so it won't be compared again
                }
            }
            setTimeout(() => {
                checkStatus();
            }, 1000);

        break;
       
    }
}

const checkStatus = () => {
    switch (tries) {
        case 1:
            for(let i = 0; i < 9; i++) {
                const div = document.getElementsByClassName("guess")[i];
                final.push(div);
            }
            finalFunction();
            final = [];
        break;

        case 2:
            for(let i = 0; i < 9; i++) {
                const div = document.getElementsByClassName("guess")[i + 9];
                final.push(div);
            }
            finalFunction();
            final = [];
        break;

        case 3: 
            for(let i = 0; i < 9; i++) {
                const div = document.getElementsByClassName("guess")[i + 18];
                final.push(div);
            }
            finalFunction();
            final = [];
        break;

        case 4:
            for(let i = 0; i < 9; i++) {
                const div = document.getElementsByClassName("guess")[i + 27];
                final.push(div);
            }
            finalFunction();
            final = [];
        break;

        case 5:
            for(let i = 0; i < 9; i++) {
                const div = document.getElementsByClassName("guess")[i + 36];
                final.push(div);
            }
            finalFunction();
            final = [];
        break;
    }
}

const finalFunction = () => {

    if(final.some((element) => element.style.backgroundColor === 'red') || final.some((element) => element.style.backgroundColor === 'orange')) {
        tries++;
        if(tries === 6) {
            alert('game over');
            window.location.reload();
        }
        final = [];
    }  else {
        setTimeout(() => {
            window.location.reload();
            alert('you won');
        }, 1500);
    }

}


document.addEventListener('keydown', (e) => {
    keydown = e.key;
    
    if(characters.includes(keydown)) {
        pushCharacter(keydown);
    } else if(keydown === "Backspace") {
        guesses[numberOfGuesses - 1] = "";
        document.getElementsByClassName("guess")[numberOfGuesses - 1].innerText = "";
        numberOfGuesses--;
    } else if(keydown === "Enter") {
        compare(numberOfGuesses);
    }

    
})

//THE GAME