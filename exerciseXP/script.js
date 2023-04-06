// let userNum = 0;
// let computerNum = 0;

const playTheGame = () => {
    confirm();
    yes()
};

const confirm = () => {
  let question = prompt("Would you like to play a game?");
  if (question.includes("yes")) {
    yes();
  } else {
    return alert("No problem, Goodbye");
  }
};

const onlyNum = (str) => {
  const regex = new RegExp(/^[0-9]*$/);
  return regex.test(str);
};

const yes = () => {
    let question = prompt("Enter a number between 0 and 10");
    while (Number(question) !== guessComputerNum()) {
      console.log(question, guessComputerNum());
      if (!onlyNum(question)) {
        return alert("Swhat");
      }
      if (!isBetweenZeroNten(question)) {
        return alert("Sorry Not a number, nope");
      }
      question = prompt("Enter a number between 0 and 10");
    }
    return console.log('win')
  
//   if (!onlyNum(question) || question == undefined) {
//     return alert("Sorry Not a number, Goodbye");
//   } else {
//     question = Number(question);
//     userNum = question;
//     guessComputerNum();
//     console.log(userNum);
//     return userNum;
//   }
};

const guessComputerNum = () => {
  let computerValue = Math.floor(Math.random() * 11);
  return computerValue;
};

// const compareNums = (userNum, computerNum) => {
//     let store = 0;
//     console.log(userNum,computerNum)
//     // if (userNum === computerNum) {
//     //     return console.log('Winner')
//     // }
//     // else {
//     //     yes()
//     // }
// };

const isBetweenZeroNten = (num) => {
    return num >= 0 && num <= 0;
}
