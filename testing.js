var testFunction = function (value) {
	return value % 2 == 0;
}
var testArray = [1, 2, 3, 4, 6, 8];

console.log(testArray);
console.log(practise1.filter(testArray, testFunction));