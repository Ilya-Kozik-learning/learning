define(function () {
	'use strict'

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

	function _writeToWebAPI(url, message) {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("Post", url, true);
		xmlhttp.send();
	}
	///

	function Logger(writeInfoMethod, writeErrorMethod) {
		///log methods
		function _logInfo(writeMethod, message) {
			writeMethod("Info:" + message);
		};

		function _logError(writeMethod, message) {
			writeMethod("Error:" + message);
		};
		///

		///write methods check
		if (writeInfoMethod) {
			if (typeof writeInfoMethod == 'function') {
				if (writeInfoMethod.length < 1)
					throw new TypeError("writeInfoMethod should be function(string)");
			}
			else if (typeof writeInfoMethod == 'string') {
				writeInfoMethod = _writeToWebAPI.bind(writeInfoMethod);
			}
			else {
				throw new TypeError("writeInfoMethod should be function(string) or url to Web API");
			}
		}
		else {
			writeInfoMethod = _writeToConsole;
		}

		if (writeErrorMethod) {
			if (typeof writeErrorMethod == 'function') {
				if (writeErrorMethod.length < 1)
					throw new TypeError("writeErrorMethod should be function(string)");
			}
			else if (typeof writeErrorMethod == 'string') {
				writeErrorMethod = _writeToWebAPI.bind(this, writeErrorMethod);
			}
			else {
				throw new TypeError("writeErrorMethod should be function(string) or url to Web API");
			}
		}
		else {
			writeErrorMethod = _writeToConsole;
		}
		///

		///automatic handling errors
		window.onerror = function (message) {
			_logError(writeErrorMethod, message);
			return true;
		};
		///

		var self = {
			///log methods
			logInfo: _logInfo.bind(this, writeInfoMethod),
			logError: _logError.bind(this, writeErrorMethod)
			///
		}

		self.constructor = Logger;

		return self;
	}

	Logger.static = {
		writeToConsole: _writeToConsole,
		writeToAlert: _writeToAlert,
		writeToCurrentWindow: _writeToCurrentWindow
	}
	///

	return {
		Logger: Logger
	};
});