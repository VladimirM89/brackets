module.exports = function check(str, bracketsConfig) {
  let stack = [], bracketsMap = {};
  for (let j = 0; j < bracketsConfig.length; j++) {
  bracketsMap[bracketsConfig[j][0]] = bracketsConfig[j][1];
  }

  for (let i = 0; i < str.length; i++) {

    let curSymb = str[i];
    let lastElem = stack[stack.length - 1];
    if (bracketsMap[lastElem] === curSymb){
      stack.pop()
    } 
    else {
      stack.push(curSymb);
    }
  }

  return stack.length === 0;
}