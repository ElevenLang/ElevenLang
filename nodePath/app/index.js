console.log(__dirname);
var path = require('path');
console.log(path.join(__dirname, './a'));
console.log(path.join(__dirname, 'a/b'));
console.log(path.join('/foo', 'bar', 'baz/asdf', '/dfd', 'a', '..'));
console.log(path.join('/foo', 'bar', 'baz/asdf', '/dfd', '/a'));
console.log(path.join('/foo', 'bar', 'baz/asdf', '/dfd', '../a'));
