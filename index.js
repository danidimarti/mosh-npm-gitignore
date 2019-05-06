var _ = require('underscore');

//How the require function resolves a module: 
//Core module
//File or folder
//node_modules folder

var result = _.contains([1,2,3], 2)
console.log(result)
