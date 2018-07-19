var fs = require('fs');
var postcss = require('postcss');
var sprites = require('postcss-sprites');

var css = fs.readFileSync('./css/smiles.css', 'utf8');
var opts = {
	stylesheetPath: './dist',
	spritePath: './dist/images/'
};

postcss([sprites(opts)])
.process(css, {
	from: './css/smiles.css',
	to: './dist/smiles.css'
})
.then(function(result) {
	fs.writeFileSync('./dist/smiles.css', result.css);
});
