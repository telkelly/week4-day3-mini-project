let userNum = 0;
let computerNum = 0;

const playTheGame = () => {
    confirm()
    compareNums(userNum, computerNum)
    console.log('lol')
}

const confirm = () => {
    let question = prompt('Would you like to play a game?');
        if (question.includes('yes')) {
            yes()
        } else {
            return alert("No problem, Goodbye");
        }
}

const onlyNum = (str) => {
  const regex = new RegExp(/^[0-9]*$/);
  return regex.test(str);
}
    
const yes = () => {
    let question = prompt('Enter a number between 0 and 10');
    if (!onlyNum(question)) {
        return alert("Sorry Not a number, Goodbye");
    } else {
        question = Number(question);
        userNum = question;
        guessComputerNum()
        console.log(userNum);
        return userNum;
    }
}

const guessComputerNum = () => {
    let computerValue = Math.floor(Math.random() * 11);
    console.log(computerNum);
  return computerNum = computerValue;
}

const compareNums = (userNum, computerNum) => {
    if (userNum === computerNum) {
        return console.log('Winner')
    } else if (userNum > computerNum) {
        return console.log('looser')
    } else {
        return console.log('lose')
    }
}