// Your code here
function saturdayFun(string="roller-skate"){
  console.log(`This Saturday, I want to ${string}!`)
  return (`This Saturday, I want to ${string}!`)
}

function mondayWork(string = "go to the office"){
  console.log(`This Monday, I will ${string}.`)
  return(`This Monday, I will ${string}.`)
}

function wrapAdjective(wrap="*"){
  console.log("aaa")
  return function(name="a hard worker"){
    console.log(`You are ${wrap}${name}${wrap}!`)
    return `You are ${wrap}${name}${wrap}!`
    }
}

let Calculator  = {add: function add(num1, num2){
                    return (num1 + num2)
                  },
                  subtract: function subtract(num1, num2){
                    return (num1 - num2)
                  },
                  multiply: function multiply(num1, num2){
                    return (num1 * num2)
                  },
                  divide: function divide(num1, num2){
                    return (num1 / num2)
                  }
                }
  // it("return 4, the result of the first arg, 13 being acted upon by several transformation functions", function() {
  //   let message = "13, multiplied by 2, added to 1000 and then modulo 7 is 4. Apply each function in the Array of functions on the given base (13) OR on the result of the use of the previous function to get this result"
  //   arrayOfTransforms = [
  //     function(a){ return a * 2 },
  //     function(a){ return a + 1000},
  //     function(a){ return a % 7 }
  //   ]
  //   expect(actionApplyer(13, arrayOfTransforms)).to.equal(4, message)
  // })
function actionApplyer(num, arr=[]){
  let number = num
  if (arr.length === 0){
      return num
  }
  else{
    let total = 0
    arr.forEach(function(i){
      i(number)
    })
      return [num, message]
  }
}
