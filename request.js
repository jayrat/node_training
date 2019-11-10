const https = require("https");

const options = {
	hostname: "en.wikipedia.org",
	port: 443,
	path: "/wiki/Snoopy",
	method: "GET"
};

const request = https.request(options, res => {
	res.setEncoding("UTF-8");

	res.on("data", console.log);
});

request.end();
