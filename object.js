define(function () {
	'use strict'

	function object(o) {
		var F = function () { };
		F.prototype = o;

		return new F();
	}

	return {
		object: object
	}
});