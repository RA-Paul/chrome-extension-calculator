let show_text = "";
let function_list = ["+","-","×","÷"];
let answer = document.getElementById("answer");

for(let i = 0; i < 10; i++){
  let object = document.getElementById("bntton-"+i.toString());
  object.addEventListener("click",function (){
    show_text = show_text + i.toString();
    answer.textContent = show_text;
    resizeAnswer()
  })
}

let bntton_div = document.getElementById("bntton-div");
bntton_div.addEventListener("click",function (){
  if(show_text.length > 0 && !isNaN(parseFloat(show_text[show_text.length - 1]))){
    show_text = show_text + "÷";
  }else{
    show_text = show_text; 
  }
  answer.textContent = show_text;
  resizeAnswer()
})

let bntton_mul = document.getElementById("bntton-mul");
bntton_mul.addEventListener("click",function (){
  if(show_text.length > 0 && !isNaN(parseFloat(show_text[show_text.length - 1]))){
    show_text = show_text + "×";
  }else{
    show_text = show_text;
  }
  answer.textContent = show_text;
  resizeAnswer()
})

let bntton_min = document.getElementById("bntton-min");
bntton_min.addEventListener("click",function (){
  if(show_text.length > 0 && !isNaN(parseFloat(show_text[show_text.length - 1]))){
    show_text = show_text + "-";
  }else{
    show_text = show_text;
  }
  answer.textContent = show_text;
  resizeAnswer()
})

let bntton_add = document.getElementById("bntton-add");
bntton_add.addEventListener("click",function (){
  if(show_text.length > 0 && !isNaN(parseFloat(show_text[show_text.length - 1]))){
    show_text = show_text + "+";
  }else{
    show_text = show_text;
  }
  answer.textContent = show_text;
  resizeAnswer()
})


let bntton_dot = document.getElementById("bntton-dot");
bntton_dot.addEventListener("click",function (){
  if(show_text.length > 0 && !isNaN(parseFloat(show_text[show_text.length - 1]))){
    
    let number1 = show_text.lastIndexOf(function_list[0]);
    let number2 = show_text.lastIndexOf(function_list[1]);
    let number3 = show_text.lastIndexOf(function_list[2]);
    let number4 = show_text.lastIndexOf(function_list[3]);

    if((number1 + number2 + number3 + number4) !== -4){
      if(show_text.substring(Math.max(number1,number2,number3,number4)).indexOf(".") == -1){
        show_text = show_text + ".";
      }
    }else{
      if(show_text.indexOf(".") == -1){
        show_text = show_text + ".";
      }
    }

  }else{
    show_text = show_text;
  }
  answer.textContent = show_text;
  resizeAnswer()
})


let bntton_c = document.getElementById("bntton-c");
bntton_c.addEventListener("click",function (){
  show_text = "";
  answer.textContent = show_text;
  resizeAnswer()
})


let bntton_equ = document.getElementById("bntton-equ");
bntton_equ.addEventListener("click",function (){
  show_text = calculate(show_text).toString();
  answer.textContent = show_text;
  resizeAnswer()
})


function calculate(string){
  console.log(string)
  let first_list = ["×","÷"];
  let second_list = ["+","-"];
  let number1 = string.lastIndexOf(first_list[0]);
  let number2 = string.lastIndexOf(first_list[1]);
  let number3 = string.lastIndexOf(second_list[0]);
  let number4 = string.lastIndexOf(second_list[1]);
  if(number1 !== -1 || number2 !== -1 || number3 !== -1 || number4 !== -1){
    if(number3 !== -1 && number4 !== -1){
      if(number3 < number4){
        return Math.round((calculate(string.substring(0,number3)) + calculate(string.substring(number3 + 1))) * 100000000) / 100000000;
      }else{
        return Math.round((calculate(string.substring(0,number4)) - calculate(string.substring(number4 + 1))) * 100000000) / 100000000;
      }
    }else if(number3 !== -1){
      return Math.round((calculate(string.substring(0,number3)) + calculate(string.substring(number3 + 1))) * 100000000) / 100000000;
    }else if(number4 !== -1){
      return Math.round((calculate(string.substring(0,number4)) - calculate(string.substring(number4 + 1))) * 100000000) / 100000000;
    }

    if(number1 !== -1 && number2 !== -1){
      if(number1 < number2){
        return Math.round((calculate(string.substring(0,number1)) * calculate(string.substring(number1 + 1))) * 100000000) / 100000000;
      }else{
        return Math.round((calculate(string.substring(0,number2)) / calculate(string.substring(number2 + 1))) * 100000000) / 100000000;
      }
    }else if(number1 !== -1){
      return Math.round((calculate(string.substring(0,number1)) * calculate(string.substring(number1 + 1))) * 100000000) / 100000000;
    }else  if(number2 !== -1){
      return Math.round((calculate(string.substring(0,number2)) / calculate(string.substring(number2 + 1))) * 100000000) / 100000000;
    }
  }else{
    return Number(string);
  }
}

function resizeAnswer(){
  if(answer.scrollWidth > 384){
    answer.style.left = "-" + (answer.scrollWidth - 384) + "px";
  }else{
    answer.style.left = 0;
  }
}