function generateNumber() {
  // generate a random integer(hint : Math.random)
  let randomNum=Math.floor(Math.random()*101)+1
  // console.log(num);
  let numOut=document.getElementById("number");
  numOut.textContent=(randomNum);
  checkOddEven(randomNum)
}

function checkOddEven(num) {
  // logic for even / odd
  let res=document.getElementById("odd-even");
  if(num%2==0){
    res.textContent="The number is even";
  }else{
    res.textContent="The number is odd";
  }
}

window.onload = function () {
  // add event listeners to the button here
  let btn=document.getElementById("generate-number");
  btn.addEventListener("click",function(){
    generateNumber()
  })
};

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
