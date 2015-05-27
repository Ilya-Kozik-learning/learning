var practise1 = (
	function () {
		"use strict";

		var _curry = function (func, args) {
			if (func.length <= 1) {
				return func;
			}

			if (args) {
				if (func.length - 1 == args.length) {
					return function (last) {
						args.push(last);

						return func.apply(undefined, args);
					};
				}
				else {
					return function (arg) {
						args.push(arg);

						return _curry(func, args);
					}
				}
			}
			else {
				return function (arg) {
					args = [arg];

					return _curry(func, args);
				}
			}
		};

		return {
			//problem 1
			partial: function () {
				var args = Array.prototype.slice.call(arguments);
				var func = args.pop();

				var resultFunction = function () {
					var newArgs = Array.prototype.slice.call(arguments);

					return func.apply(undefined, args.concat(newArgs));
				};

				return resultFunction;
			},
			//problem 2
			curry: function (func) {
				return _curry(func);
			},
			//problem 3
			fold: function (array, callback, initialValue) {
				var previousValue = initialValue;

				for (var i in array) {
					callback(previousValue, array[i], i, array);

					previousValue = array[i];
				}
			},
			//problem 4
			unfold: function (callback, initialValue) {
				var result = [];
				var stateValue = initialValue;
				var tuple;

				while (tuple = callback(stateValue)) {
					result.push(tuple.element);
					stateValue = tuple.stateValue;
				}

				return result;
			},
			//problem 5
			map: function (array, callback) {
				var result = [];

				for (var i in array) {
					result[i] = callback(array[i]);
				}

				return result;
			},
			//problem 6
			filter: function (array, callback) {
				var result = [];

				for (var i in array) {
					if (callback(array[i])) {
						result.push(array[i]);
					}
				}

				return result;
			},
			//problem 9
			first: function (array, callback) {
				for (var i in array) {
					if (callback(array[i])) {
						return array[i];
					}
				}
			},
			//problem 10
			lazy: function (func) {
				return func.bind.apply(func, arguments);
			},
			//promlem 11
			memoization: function (func) {
				var result;
				var lazy = func.bind.apply(func, arguments);
				return function () {
					if (!result) {
						result = lazy();
					}

					return result;
				}
			}
		}
	}());