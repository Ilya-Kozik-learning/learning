var sum = function (a, b, c) {
	return a + b + c;
};

var result = practise1.F(practise1.F(1, sum))(4,4);

alert(result);