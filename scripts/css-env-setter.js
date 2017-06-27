// This will replace the static asset variable in the CSS
const fs =   require('fs'),
			argv = require('minimist')(process.argv.slice(2));

let STATIC_ASSETS_URL = process.env.STATIC_ASSETS_URL;

if(typeof STATIC_ASSETS_URL == 'undefined') {
	STATIC_ASSETS_URL = 'https://s3-eu-west-1.amazonaws.com/web1devci.static-assets';
}

fs.readFile(argv.file, 'utf8', function (err,data) {
	if (err) {
		return console.log(err);
	}
	var result = data.replace(new RegExp('<% STATIC_ASSETS_URL %>', 'g'), STATIC_ASSETS_URL);
	fs.writeFile(argv.file, result, 'utf8', function (err) {
		 if (err) return console.log(err);
	});
});
