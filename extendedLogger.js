define(function (require) {
	'use strict'

	var objectModule = require('object');
	var loggerModule = require('logger');

	///writers
	function _writeToConsoleExtended(message) {
		console.log(message + " !Extended");
	};
	///

	function ExtendedLogger(writeInfoMethod, writeErrorMethod, writeSecurityMethod) {
		var base = new loggerModule.Logger(writeInfoMethod, writeErrorMethod);
		var self = objectModule.object(base);

		///log methods
		function _logSecurity(writeMethod, message) {
			writeMethod("Security:" + message);
		}
		///

		///write methods check
		if (writeSecurityMethod) {
			if (typeof writeSecurityMethod == 'function') {
				if (writeSecurityMethod.length < 1)
					throw new TypeError("writeSecurityMethod should be function(string)");
			}
			else if (typeof writeSecurityMethod == 'string') {
				writeSecurityMethod = loggerModule.Logger.static.writeToWebAPI.bind(writeSecurityMethod);
			}
			else {
				throw new TypeError("writeSecurityMethod should be function(string) or url to Web API");
			}
		}
		else {
			writeSecurityMethod = loggerModule.Logger.static.writeToConsole;
		}
		///

		self.logSecurity = _logSecurity.bind(this, writeSecurityMethod);

		self.constructor = ExtendedLogger;

		return self;
	}

	ExtendedLogger.static = loggerModule.Logger.static;
	ExtendedLogger.static.writeToConsoleExtended = _writeToConsoleExtended;

	return {
		ExtendedLogger: ExtendedLogger
	};
});