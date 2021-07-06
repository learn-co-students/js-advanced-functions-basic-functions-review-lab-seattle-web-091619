let Calculator ={

    add(num1, num2){
        return num1+num2
    },

    subtract(num1,num2){
        return num1-num2
    },

    multiply(num1,num2){
        return num1*num2
    },

    divide(num1,num2){
        return num1/num2
    }
}

function saturdayFun(thing = 'roller-skate'){
    return `This Saturday, I want to ${thing}!`
}

function mondayWork(thing = "go to the office"){
    return `This Monday, I will ${thing}.`
}

function wrapAdjective(flair = '*'){
    return (defaultParameter = "special") => {
        return `You are ${flair}${defaultParameter}${flair}!`
    }

}

function actionApplyer(int,array){
    for(let i = 0;i < array.length; i++){
        int = array[i](int)
    }
    return int
}