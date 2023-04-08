const playTheGame = () => {
  const isUserReady = confirm("Do you wanna play?");
  if (!isUserReady) {
    alert("No problem, goodbye");
    return;
  }

  let computerNum = guessComputerNum();

  let question = prompt("Enter a number between 0 and 10");

  let tries = 0;

  while (Number(question) != computerNum) {
    tries = tries + 1;
    if (tries == 3) {
     return alert(`Sorry too many tries, the number was ${computerNum}`);
    }
    if (!onlyNum(question)) {
      return alert("It's not a good number");
    }
    if (!isBetweenZeroNten(Number(question))) {
      return alert("It's not a good number");
    }

    if (computerNum > Number(question)) {
      alert("Your num is smaller");
    }
    if (computerNum < Number(question)) {
      alert("Your num is bigger");
    }
    question = prompt("Enter a number between 0 and 10");
  }

  console.log("You are winner");
};

const onlyNum = (str) => {
  const regex = new RegExp(/^[0-9]*$/);
  return regex.test(str);
};

const guessComputerNum = () => {
  let computerValue = Math.floor(Math.random() * 11);
  return computerValue;
};

const isBetweenZeroNten = (num) => {
  return num > 0 && num < 10;
};
