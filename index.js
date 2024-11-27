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

let guesses = [];
let rightOrWrong = [];
let secondRigthOrWrong = [];
let thirdRightOrWrong = [];
let fourthRightOrWrong = [];
let array = [];
let tries = 1;
let indexOfGuesses = 0;
let guessIndex = 9;
let duplicateInt = 0;


const problem = problems[Math.floor(Math.random() * problems.length)];
let problemArray = problem.split('');
console.log(problemArray);
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
                    if(problemArray.includes(guesses[i])) {
                        const something = guesses[i];
                        let matchingElement = 0;
                        problemArray.some((element) => {if(element === something){matchingElement = problemArray.indexOf(element)}});
                        /*if(problemArray.filter((element) => element === something).length == 2){

                        }*/
                        problemArray[matchingElement] = 'Q';
                        console.log(problemArray + ' problemArray placement');
                        console.log(problem + ' problem');
                        rightOrWrong[i] = 'placement';
                        console.log('placement');
                        document.querySelectorAll('.guess')[i].classList.add('placement');
                    } else {
                        rightOrWrong[i] = 'wrong';
                        console.log('wrong');
                        document.querySelectorAll('.guess')[i].classList.add('wrong');
                    }
                } else {
                    /*const duplicate = guesses[i];
                    problemArray.forEach((element) => {if(element === duplicate){duplicateInt++}});
                    if(duplicateInt > 1 && problemArray.filter((element) => element === duplicate).length > 1) {
                        console.log('duplicate ' + duplicateInt);
                        console.log('wrong');
                        rightOrWrong[i] = 'wrong';
                        document.querySelectorAll('.guess')[i].classList.add('wrong');
                    }*/ /*else {*/
                        problemArray[i] = 'Q';
                        console.log(problemArray + ' problemArray correct');
                        console.log(problem + ' problem');
                        console.log('correct');
                        rightOrWrong[i] = 'correct';
                        document.querySelectorAll('.guess')[i].classList.add('correct');
                    /*}*/
                }
            }
            
            checkStatus();
        break;

        case 2:
            for(let i = 0; i < problem.length; i++){
                if(problem[i] !== guesses[guessIndex]){
                    if(problemArray.includes(guesses[guessIndex])) {
                        /*const something = guesses[guessIndex - 9];
                        console.log(something + ' something');
                        let matchingElement = 0;
                        problemArray.some((element) => {if(element === something){matchingElement = problemArray.indexOf(element)}});*/
                        problemArray[matchingElement] = 'Q';
                        secondRigthOrWrong[i] = 'placement';
                        document.querySelectorAll('.secondGuess')[i].classList.add('placement');
                        console.log(secondRigthOrWrong + ' case 2 if working');
                    } else {
                        console.log('wrong');
                        secondRigthOrWrong[i] = 'wrong';
                        document.querySelectorAll('.secondGuess')[i].classList.add('wrong');
                        console.log(secondRigthOrWrong);
                    } 
                } else {
                    problemArray[i] = 'Q';
                    secondRigthOrWrong[i] = 'correct';
                    document.querySelectorAll('.secondGuess')[i].classList.add('correct');
                    console.log(secondRigthOrWrong);
                } 
                guessIndex++;
            }

            checkStatus();

        break;

        case 3:
            for(let i = 0; i < problem.length ; i++){
                if(problem[i] !== guesses[guessIndex]){
                    if(problemArray.includes(guesses[guessIndex])) {
                        /*const something = guesses[guessIndex - 18];
                        let matchingElement = 0;
                        problemArray.some((element) => {if(element === something){matchingElement = problemArray.indexOf(element)}});*/
                        problemArray[matchingElement] = 'Q';
                        thirdRightOrWrong[i] = 'placement';
                        document.querySelectorAll('.thirdGuess')[i].classList.add('placement');
                        console.log(thirdRightOrWrong);
                    } else {
                        console.log('wrong');
                        thirdRightOrWrong[i] = 'wrong';
                        document.querySelectorAll('.thirdGuess')[i].classList.add('wrong');
                        console.log(thirdRightOrWrong);
                    }
                } else {
                    problemArray[i] = 'Q';
                    thirdRightOrWrong[i] = 'correct';
                    document.querySelectorAll('.thirdGuess')[i].classList.add('correct');
                    console.log(thirdRightOrWrong);
                } 
                guessIndex++;
            }

            checkStatus();
            
        break;

        case 4:
            for(let i = 0; i < problem.length; i++){
                if(problem[i] !== guesses[guessIndex]){
                    if(problem.includes(guesses[guessIndex - 27])) {
                        /*const something = guesses[guessIndex];
                        let matchingElement = 0;
                        problemArray.some((element) => {if(element === something){matchingElement = problemArray.indexOf(element)}});*/
                        problemArray[matchingElement] = 'Q';
                        fourthRightOrWrong[i] = 'placement';
                        document.querySelectorAll('.fourthGuess')[i].classList.add('placement');
                        console.log(fourthRightOrWrong);
                    } else {
                        console.log('wrong');
                        fourthRightOrWrong[i] = 'wrong';
                        document.querySelectorAll('.fourthGuess')[i].classList.add('wrong');;
                        console.log(fourthRightOrWrong);
                    }
                } else {
                    problemArray[i] = 'Q';
                    fourthRightOrWrong[i] = 'correct';
                    document.querySelectorAll('.fourthGuess')[i].classList.add('correct');
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
        break;

        case 2:
            for(let i = 0; i < 9; i++) {
                const div = document.querySelectorAll('.secondGuess')[i];
                array.push(div);
            }
            finalFunction();
        break;

        case 3: 
            for(let i = 0; i < 9; i++) {
                const div = document.querySelectorAll('.thirdGuess')[i];
                array.push(div);
            }
            finalFunction();
        break;

        case 4:
            for(let i = 0; i < 9; i++) {
                const div = document.querySelectorAll('.fourthGuess')[i];
                array.push(div);
            }
            finalFunction();
        break;
    }
}

const finalFunction = () => {

    if(array.some((element) => element.classList.contains('wrong')) || array.some((element) => element.classList.contains('placement'))) {
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