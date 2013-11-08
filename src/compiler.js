'use strict';

var fs = require('fs');

var Js2JsCompiler = function(logger, verbose) {
	this._logger = logger;
	this._verbose = verbose;
}

Js2JsCompiler.prototype.compile = function(inputLocation, outputLocation) {
	// todo: check if files or folders
	var input = fs.lstatSync(inputLocation);
	if(input.isFile()) { // files
		return this.compileFile(inputLocation, outputLocation);
	}
	else if(input.isDirectory()) { // folders
		// todo: create output directory if it doesn't exists
		return this.compileDirectory(inputLocation, outputLocation);
	}
	else {
		return err('Input and output location should be both files or directories.');
	}
}

Js2JsCompiler.prototype.compileDirectory = function(inputLocation, outputLocation) {
	var files = fs.readdirSync(input);
	for(file in files) {
		var result = this.compileFile(inputLocation + file, outputLocation + file);
		if(!result.ok) {
			return result;
		}
	}
	return ok();
}

Js2JsCompiler.prototype.compileCode = function(code) {
	return code; // as we need to compile javascript to javascript, we do nothing here
}

Js2JsCompiler.prototype.compileFile = function(inputFile, outputFile) {
	this._logIfVerbose('Compiling ' + inputFile + '...');
	var code = fs.readFileSync(inputFile);
	var compiled = this.compileCode(code);
	this._logIfVerbose('Done!');
	fs.writeFileSync(outputFile, compiled);
	this._logIfVerbose('Output is written to: ' + outputFile);
	return ok();
}

Js2JsCompiler.prototype._logIfVerbose = function(message) {
	if(this._logger && this._verbose) {
		this._logger(message);
	}
}

function ok() {
	return {
		ok:true
	}
}

function err(status) {
	return {
		ok: false,
		status: status
	}
}

exports.Js2JsCompiler = Js2JsCompiler;