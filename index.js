const problems = [
    "1+2*3-4/5",  
    "5-3+2*1=4",  
    "4/2+3-1=4",  
    "2+3*4-5/1",  
    "5/1+2-3=4",
    "(4/2)+3-1",
    "4/x+5-3=2",
    "2-3+5-4=2",
]

const characters = [
    "1", "2", "3", "4", "5", "+", "-", "*", "/", "(" , ")", "x" , "√", "="
]    

let guesses = [];
let rightOrWrong = [];
let secondRigthOrWrong = [];
let thirdRightOrWrong = [];
let fourthRightOrWrong = [];
let array = [];
let tries = 1;
let indexOfGuesses = 0;
let guessIndex = 9;

const problem = problems[Math.floor(Math.random() * problems.length)];
console.log(problem);

const div = document.querySelector('.characters');

for(let i = 0; i < characters.length; i++) {
    const button = document.createElement('button');
    button.innerHTML = characters[i];
    button.onclick = () => {pushChracter(characters[i])};
    div.appendChild(button);
}

pushChracter = (character) => {
    guesses[indexOfGuesses] = character;
    document.querySelectorAll('.guess')[indexOfGuesses].innerHTML = character;
    if(indexOfGuesses === 8 || indexOfGuesses === 17 || indexOfGuesses === 26 || indexOfGuesses === 35 || indexOfGuesses === 44) {
        console.log('compare useffect indexofguesses === 9 //////////');
        compare(tries);  
    } else {
        console.log(indexOfGuesses +' indexofguesses that added character');
        console.log(guesses + ' guesses');
        indexOfGuesses++;
        console.log(indexOfGuesses + ' pushCharacter fc');
    }   
  
}

const compare = (tries) => {
    
    switch (tries) {
        case 1:
            for(let i = 0; i < problem.length; i++){
                if(problem[i] !== guesses[i]){
                    if(problem.includes(guesses[i])) {
                        console.log('placement');
                        rightOrWrong[i] = 'placement';
                        document.querySelectorAll('.guess')[i].style.backgroundColor = 'orange';
                        console.log(rightOrWrong);
                    } else {
                        console.log('wrong');
                        rightOrWrong[i] = 'wrong';
                        document.querySelectorAll('.guess')[i].style.backgroundColor = 'red';
                        console.log(rightOrWrong);
                    }
                } if (problem[i] === guesses[i]) {
                    console.log('correct');
                    rightOrWrong[i] = 'correct';
                    document.querySelectorAll('.guess')[i].style.backgroundColor = 'green';
                    console.log(rightOrWrong);
                }
            }

            checkStatus();
        break;

        case 2:
            for(let i = 0; i < problem.length; i++){
                if(problem[i] !== guesses[guessIndex]){
                    if(problem.includes(guesses[guessIndex]) && document.querySelectorAll('.secondGuess')[i].style.backgroundColor !== 'green') {
                        console.log('placement');
                        secondRigthOrWrong[i] = 'placement';
                        document.querySelectorAll('.secondGuess')[i].style.backgroundColor = 'orange';
                        console.log(secondRigthOrWrong + ' case 2 if working');
                    } else {
                        console.log('wrong');
                        secondRigthOrWrong[i] = 'wrong';
                        document.querySelectorAll('.secondGuess')[i].style.backgroundColor = 'red';
                        console.log(secondRigthOrWrong);
                    } 
                } if (problem[i] === guesses[guessIndex]) {
                    console.log('correct');
                    secondRigthOrWrong[i] = 'correct';
                    document.querySelectorAll('.secondGuess')[i].style.backgroundColor = 'green';
                    console.log(secondRigthOrWrong);
                } 
                guessIndex++;
            }

            checkStatus();

        break;

        case 3:
            for(let i = 0; i < problem.length ; i++){
                if(problem[i] !== guesses[guessIndex]){
                    if(problem.includes(guesses[guessIndex]) && document.querySelectorAll('.thirdGuess')[i].style.backgroundColor !== 'green') {
                        console.log('placement');
                        thirdRightOrWrong[i] = 'placement';
                        document.querySelectorAll('.thirdGuess')[i].style.backgroundColor = 'orange';
                        console.log(thirdRightOrWrong);
                    } else {
                        console.log('wrong');
                        thirdRightOrWrong[i] = 'wrong';
                        document.querySelectorAll('.thirdGuess')[i].style.backgroundColor = 'red';
                        console.log(thirdRightOrWrong);
                    }
                } if (problem[i] === guesses[guessIndex]) {
                    console.log('correct');
                    thirdRightOrWrong[i] = 'correct';
                    document.querySelectorAll('.thirdGuess')[i].style.backgroundColor = 'green';
                    console.log(thirdRightOrWrong);
                } 
                guessIndex++;
            }

            checkStatus();
            
        break;

        case 4:
            for(let i = 0; i < problem.length; i++){
                if(problem[i] !== guesses[guessIndex]){
                    if(problem.includes(guesses[guessIndex]) && document.querySelectorAll('.fourthGuess')[i].style.backgroundColor !== 'green') {
                        console.log('placement');
                        fourthRightOrWrong[i] = 'placement';
                        document.querySelectorAll('.fourthGuess')[i].style.backgroundColor = 'orange';
                        console.log(fourthRightOrWrong);
                    } else {
                        console.log('wrong');
                        fourthRightOrWrong[i] = 'wrong';
                        document.querySelectorAll('.fourthGuess')[i].style.backgroundColor = 'red';
                        console.log(fourthRightOrWrong);
                    }
                } if (problem[i] === guesses[guessIndex]) {
                    console.log('correct');
                    fourthRightOrWrong[i] = 'correct';
                    document.querySelectorAll('.fourthGuess')[i].style.backgroundColor = 'green';
                    console.log(fourthRightOrWrong);
                } 
                guessIndex++;
            }

            setTimeout(() => {
                checkStatus();  
            }, 1500);

        break;
    }
}

const checkStatus = () => {
    switch (tries) {
        case 1:
            for(let i = 0; i < 9; i++) {
                const div = document.querySelectorAll('.guess')[i];
                array.push(div);
            }
            finalFunction();
            array = [];
        break;

        case 2:
            for(let i = 0; i < 9; i++) {
                const div = document.querySelectorAll('.secondGuess')[i];
                array.push(div);
            }
            finalFunction();
            array = [];
        break;

        case 3: 
            for(let i = 0; i < 9; i++) {
                const div = document.querySelectorAll('.thirdGuess')[i];
                array.push(div);
            }
            finalFunction();
            array = [];
        break;

        case 4:
            for(let i = 0; i < 9; i++) {
                const div = document.querySelectorAll('.fourthGuess')[i];
                array.push(div);
            }
            finalFunction();
            array = [];
        break;
    }
}

const finalFunction = () => {

    if(array.some((element) => element.style.backgroundColor === 'red') || array.some((element) => element.style.backgroundColor === 'orange')) {
        console.log('wrong');
        indexOfGuesses++;
        tries++;
        if(tries === 5) {
            alert('game over');
            window.location.reload();
        }
        console.log(tries);
        array = [];
    }  else {
        setTimeout(() => {
            window.location.reload();
            alert('you won');
        }, 1500);
    }

}