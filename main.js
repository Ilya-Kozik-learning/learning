define(function (require) {
	var logger = require('logger').Logger(null, null);

	logger.writeToConsole("test console");
	logger.writeToAlert("test alert");
	logger.writeToCurrentWindow("test current window");

	logger.logInfo("test info");
	logger.logError("test error")
});