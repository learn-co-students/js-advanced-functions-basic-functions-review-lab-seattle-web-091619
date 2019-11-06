// Your code here
const saturdayFun = (activity='roller-skate') => {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = (activity='go to the office') => {
  return `This Monday, I will ${activity}.`;
}

const wrapAdjective = (flair = "*") => {
  return function(defaultParameter = "special"){
      return `You are ${flair}${defaultParameter}${flair}!`;
  }
}

let Calculator = {
  add(num1, num2){
      return num1 + num2;
  },

  subtract(num1, num2){
      return num1 - num2;
  },

  multiply(num1, num2){
      return num1 * num2;
  },

  divide(num1, num2){
      return num1 / num2;
  }
};

function actionApplyer(int, arr){
  if (arr.length === 0) {
      return int;
  } else {
      let currentInt = int;
      for (let i = 0; i < arr.length; i++){
          currentInt = arr[i](currentInt);
      }
      return currentInt;
  }
}