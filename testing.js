var sum = function () {
	return "test";
};

var sum1 = function (a) {
	return a;
}

var sum2 = function (a, b) {
	return a + b;
}

var sum3 = function (a, b, c) {
	return a + b + c;
}

var sum4 = function (a, b, c, d) {
	return a + b + c + d;
}


var result = practise1.curry(sum)();

alert(result);

result = practise1.curry(sum1)("one parameter test");

alert(result);

result = practise1.curry(sum2)(" 1 ")(" 2 ");

alert(result);

result = practise1.curry(sum3)(" 1 ")(" 2 ")(" 3 ");

alert(result);

result = practise1.curry(sum4)(" 1 ")(" 2 ")(" 3 ")(" 4 ");

alert(result);