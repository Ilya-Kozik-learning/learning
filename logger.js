define(function () {
	'use strict'

	function Logger(writeInfoMethod, writeErrorMethod) {
		alert("constructor");

		///log methods
		function _logInfo(writeMethod, message) {
			writeMethod("Info:" + message);
		};

		function _logError(writeMethod, message) {
			writeMethod("Error:" + message);
		};
		///

		///writers
		function _writeToConsole(message) {
			console.log(message);
		};

		function _writeToAlert(message) {
			alert(message);
		};

		function _writeToCurrentWindow(message) {
			var body = window.document.getElementsByTagName("body")[0];
			body.innerHTML += "\n" + message;
		}
		///

		///check
		if (writeInfoMethod) {
			if (typeof writeInfoMethod != 'function' || writeInfoMethod.length < 1) {
				throw new TypeError("writeInfoMethod should be function(string)");
			}
		}
		else {
			writeInfoMethod = _writeToConsole;
		}

		if (writeErrorMethod) {
			if (typeof writeErrorMethod != 'function' || writeErrorMethod.length < 1) {
				throw new TypeError("writeErrorMethod should be function(string)");
			}
		}
		else {
			writeErrorMethod = _writeToConsole;
		}
		///

		var self = {
			///writers
			writeToConsole: _writeToConsole,
			writeToAlert: _writeToAlert,
			writeToCurrentWindow: _writeToCurrentWindow,
			///

			///log methods
			logInfo: _logInfo.bind(this, writeInfoMethod),
			logError: _logError.bind(this, writeErrorMethod)
			///
		}

		self.constructor = Logger;

		return self;
	}

	return {
		Logger: Logger
	};
});