module.exports = function toReadable (number) {
  
  if (number < 20) {
    
    return numsArr[number];
    
  }
  
  const ones = getDigitByPosition(number, 1);
    
  const tens = getDigitByPosition(number, 2);
    
  if (number < 100) {

    return getTensStr(tens, ones);
  
  }
  
  const hundreds = getDigitByPosition(number, 3);
      
  return numsArr[hundreds] + ' hundred' + (tens || ones ? ' ' + getTensStr(tens, ones) : '');
  
}

const numsArr = [
  'zero',       'one',        'two',        'three',      'four', 
  'five',       'six',        'seven',      'eight',      'nine',
  'ten',        'eleven',     'twelve',     'thirteen',   'fourteen',
  'fifteen',    'sixteen',    'seventeen',  'eighteen',   'nineteen'
];
  
const tensArr = [
  '',         '',         'twenty',   'thirty',   'forty',
  'fifty',    'sixty',    'seventy',  'eighty',   'ninety'
];

function getDigitByPosition(num, pos) {
  
  const digitStr = String(num).split('').reverse()[pos - 1];
    
  const digitNum = Number(digitStr);
  
  return digitNum;
  
}
  
function getTensStr(tens, ones) {
  
  if (tens < 2) {
    
    return numsArr[tens * 10 + ones];
    
  }
  
  return tensArr[tens] + (ones ? ' ' + numsArr[ones] : '');
  
}
