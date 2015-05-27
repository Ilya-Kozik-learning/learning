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

//Problem 8: Sum of random numbers
var randomFunction = function (stateValue) {
	if (stateValue >= 10) {
		return false;
	}

	return {
		element: Math.floor((Math.random() * 5) + 1),
		stateValue: stateValue + 1
	};
}

sum = 0;
currentResult = practise1.fold(practise1.unfold(randomFunction, 0), sumFunction);
console.log("Problem 8 result: " + sum);

//