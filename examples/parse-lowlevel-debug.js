const TOMLParser = require("../lib/toml-parser").makeParserClass(
	require("../lib/parser-debug.js"),
);
const prettyError = require("../parse-pretty-error");
const util = require("util");
const dump = (d) =>
	util.inspect(d, { colors: true, depth: Number.POSITIVE_INFINITY });

success();
failure();

function success() {
	const testtoml = `a = [1.0,1e0]`;

	console.log("Parsing:", testtoml);
	const parser = new TOMLParser();
	try {
		parser.parse(testtoml);
		console.log("Result:", dump(parser.finish()));
	} catch (err) {
		console.error("Error:", prettyError(err, testtoml).message);
	}
}

function failure() {
	const testtoml = `a = [1.0,1e0`;

	console.log("Parsing:", testtoml);
	const parser = new TOMLParser();
	try {
		parser.parse(testtoml);
		console.log("Result:", dump(parser.finish()));
	} catch (err) {
		console.error("Error:", prettyError(err, testtoml).message);
	}
}
