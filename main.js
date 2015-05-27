//Problem 7: Average of even numbers
var isEven = function (value) {
	return value % 2 == 0;
}
var arrayWithEven = [1, 2, 3, 4, 6, 8];

var sum = 0;
var count = 0;

var sumFunction = function (prev, current) {
	sum += current;
	++count;
}

practise1.fold(practise1.filter(arrayWithEven, isEven), sumFunction);
console.log("Problem 7 result: " + sum / count);