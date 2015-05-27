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
			F: function () {
				var args = Array.prototype.slice.call(arguments);
				var func = args.pop();

				var resultFunction = function () {
					var newArgs = Array.prototype.slice.call(arguments);

					return func.apply(undefined, args.concat(newArgs));
				};

				return resultFunction;
			},
			curry: function (func) {
				return _curry(func);
			}
		}
	}());