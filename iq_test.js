function iqTest(numbers){
  oddArray = [];
  evenArray = [];
  var diffInd;
  var arrOfNums = numbers.split(" ");
  arrOfNums.forEach(function(num, ind) {
    ind++;
    num % 2 === 0 ? evenArray.push(ind) : oddArray.push(ind);
  });
  evenArray.length == 1 ? diffInd = parseInt(evenArray.toString()) : diffInd = parseInt(oddArray.toString());
  return diffInd;
}