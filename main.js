define(function (require) {
	'use strict'

	var loggerModule = require('logger');
	var logger = loggerModule.Logger(loggerModule.Logger.static.writeToCurrentWindow, loggerModule.Logger.static.writeToAlert);

	logger.logInfo("test info");
	logger.logError("test error");

	var extendedLoggerModule = require('extendedLogger');
	var extendedLogger = extendedLoggerModule.ExtendedLogger(extendedLoggerModule.ExtendedLogger.static.writeToConsole,
		extendedLoggerModule.ExtendedLogger.static.writeToConsoleExtended, extendedLoggerModule.ExtendedLogger.static.writeToConsoleExtended);

	extendedLogger.logInfo("test info");
	extendedLogger.logError("test error");
	extendedLogger.logSecurity("test security");

	var result = test / "hello";
});