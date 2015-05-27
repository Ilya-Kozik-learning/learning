var test1 = [1, 3, 5, 7, 9];
var test2 = ["test", 1, 14];
var test3 = [3, 2, 1];
test3["strangeIndex"] = 7;

var testingFunction = function (prev, current, index, array) {
	console.log(prev);
	console.log(current);
	console.log(index);
	console.log(array);
};

practise1.fold(test3, testingFunction, "opana");