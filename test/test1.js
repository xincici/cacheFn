var cacheFn = require('../index');
var _ = require('lodash');

function add(arr, index){
    console.log('run into function once');
    var result = 0;
    _.forEach(arr, function(item, _i){
        if(index <= _i){
            result += item;
        }
    });
    return result;
}

var arr = require('./data');

var cacheAdd = cacheFn(add);

console.log(cacheAdd(arr, 5));
console.log(cacheAdd(arr, 8));
console.log(cacheAdd(arr, 5));
console.log(cacheAdd(arr, 8));
console.log(cacheAdd(arr, 6));
