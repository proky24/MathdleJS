const problems = [
    "1+2*3-4/5",  
    "5-3+2*1=4",  
    "4/2+3-1=4",  
    "2+3*4-5/1",  
    "5/1+2-3=4",
    "1+2*x³-4/5",
    "(4/2)+3-1",
    "2+x²*4-5/1",
    "(3+x³)*2-5",
    "4/x+5-3=2",
    "5+4/(x³-3)"
]

const characters = [
    "1", "2", "3", "4", "5", "+", "-", "*", "/", "(" , ")", "x" , "x²", "x³", "√", "="
]    

let guesses = [];
let rightOrWrong = [];
let array = [];
let tries = 1;
let indexOfGuesses = 0;

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
    document.querySelectorAll('.guess')[indexOfGuesses].innerText = guesses[indexOfGuesses];
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
                  console.log('wrong');
                  rightOrWrong[i] = 'wrong';
                  document.querySelectorAll('.guess')[i].style.backgroundColor = 'red';
                  console.log(rightOrWrong);
                } else {
                  console.log('correct');
                  rightOrWrong[i] = 'correct';
                  document.querySelectorAll('.guess')[i].style.backgroundColor = 'green';
                  console.log(rightOrWrong);
                }
            }

            checkStatus();
        break;

        case 2:
            for(let i = problem.length; i < problem.length + problem.length; i++){
                if(problem[i] !== guesses[i]){
                  console.log('wrong');
                  rightOrWrong[i] = 'wrong';
                  document.querySelectorAll('.guess')[i].style.backgroundColor = 'red';
                  console.log(rightOrWrong);
                } else {
                  console.log('correct');
                  rightOrWrong[i] = 'correct';
                  document.querySelectorAll('.guess')[i].style.backgroundColor = 'green';
                  console.log(rightOrWrong);
                }
            }

            checkStatus();

        break;

        case 3:
            for(let i = problem.length + problem.length; i < problem.length + problem.length + problem.length; i++){
                if(problem[i] !== guesses[i]){
                  console.log('wrong');
                  rightOrWrong[i] = 'wrong';
                  document.querySelectorAll('.guess')[i].style.backgroundColor = 'red';
                  console.log(rightOrWrong);
                } else {
                  console.log('correct');
                  rightOrWrong[i] = 'correct';
                  document.querySelectorAll('.guess')[i].style.backgroundColor = 'green';
                  console.log(rightOrWrong);
                }
            }

            checkStatus();

        break;

        case 4:
            for(let i = problem.length + problem.length + problem.length; i < problem.length + problem.length + problem.length + problem.length; i++){
                if(problem[i] !== guesses[i]){
                  console.log('wrong');
                  rightOrWrong[i] = 'wrong';
                  document.querySelectorAll('.guess')[i].style.backgroundColor = 'red';
                  console.log(rightOrWrong);
                } else {
                  console.log('correct');
                  rightOrWrong[i] = 'correct';
                  document.querySelectorAll('.guess')[i].style.backgroundColor = 'green';
                  console.log(rightOrWrong);
                }
            }

            checkStatus();

        break;

        case 5: 
            for(let i = problem.length + problem.length + problem.length + problem.length; i < problem.length + problem.length + problem.length + problem.length + problem.length; i++){
                if(problem[i] !== guesses[i]){
                    console.log('wrong');
                    rightOrWrong[i] = 'wrong';
                    document.querySelectorAll('.guess')[i].style.backgroundColor = 'red';
                    console.log(rightOrWrong);
                } else {
                    console.log('correct');
                    rightOrWrong[i] = 'correct';
                    document.querySelectorAll('.guess')[i].style.backgroundColor = 'green';
                    console.log(rightOrWrong);
                }
            }

            setTimeout(() => {
                checkStatus();  
            }, 2000);

        break;


    }


    /*for(let i = 0; i < problem.length; i++){
      if(problem[i] !== guesses[i]){
        console.log('wrong');
        rightOrWrong[i] = 'wrong';
        document.querySelectorAll('.guess')[i].style.backgroundColor = 'red';
        console.log(rightOrWrong);
      } else {
        console.log('correct');
        rightOrWrong[i] = 'correct';
        document.querySelectorAll('.guess')[i].style.backgroundColor = 'green';
        console.log(rightOrWrong);
      }
    }*/
}

const checkStatus = () => {
    for(let i = 0; i < 9; i++) {
        const div = document.querySelectorAll('.guess')[i];
        array.push(div);
    }
    if(array.some((element) => element.style.backgroundColor === 'red')) {
        console.log('wrong');
        tries++;
        if(tries === 5) {
            alert('game over');
            window.location.reload();
        }
        console.log(tries);
        /*if(tries === 3) {
            console.log('game over');
            document.querySelector('.game-over').style.display = 'block';
        } else {
            console.log('try again');
            document.querySelector('.try-again').style.display = 'block';
        }*/
    }  else {
        setTimeout(() => {
            window.location.reload();
            alert('you won');
        }, 1500);
    }
}