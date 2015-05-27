var testFunction = function (stateValue) {
	if (stateValue > 3) {
		return false;
	}
	else {
		return { stateValue: stateValue + 1, element: 7 * stateValue };
	}
}

console.log(practise1.unfold(testFunction, 1));