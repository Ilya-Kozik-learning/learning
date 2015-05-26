var practise1 = (
	function () {
		"use strict";

		return {
			F: function () {
				var args = Array.prototype.slice.call(arguments);
				var func = args.pop();

				var resultFunction = function () {
					var newArgs = Array.prototype.slice.call(arguments);

					return func.apply(null, args.concat(newArgs));
				};

				return resultFunction;
			}
		}
	}());