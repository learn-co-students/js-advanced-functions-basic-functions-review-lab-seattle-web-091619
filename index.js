// Your code here



function saturdayFun(toDo = "roller-skate"){

    return `This Saturday, I want to ${toDo}!`
}

function mondayWork(toDo = "go to the office"){


    return `This Monday, I will ${toDo}.`
}

function wrapAdjective(star ="*"){

      return  function Wowah(adj){
        return `You are ${star}${adj}${star}!`
    }



}

let Calculator = {
    add(num1, num2){

        return num1+num2
    },
    subtract(num1, num2){

        return num1-num2
    },
    multiply(num1, num2){

        return num1*num2
    },
    divide(num1, num2){

        return num1/num2
    }



}

function actionApplyer(int, arr){

    for (let i =0; i< arr.length;i++){

       int =  arr[i](int)

    }
return int
}