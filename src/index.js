module.exports = function check(str, bracketsConfig) {
  let stack = [], bracketsObject = {};
  for (let j = 0; j < bracketsConfig.length; j++) {
    bracketsObject[bracketsConfig[j][0]] = bracketsConfig[j][1];
  }

  for (let i = 0; i < str.length; i++) {

    let curSymb = str[i];
    let lastElem = stack[stack.length - 1];
    if (bracketsObject[lastElem] === curSymb){
      stack.pop();
    } 
    else {
      stack.push(curSymb);
    }
  }

  return stack.length === 0;
}