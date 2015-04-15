var cacheFn = require('../index');
var _ = require('lodash');

var arr = require('./data');

var obj = {
    arr : arr,
    add : function(index){
        console.log('run into function once');
        var result = 0;
        _.forEach(this.arr, function(item, _i){
            if(index <= _i){
                result += item;
            }
        });
        return result;
    }
};


var cacheAdd = cacheFn(obj.add, obj);

console.log(cacheAdd(5));
console.log(cacheAdd(8));
console.log(cacheAdd(5));
console.log(cacheAdd(8));
console.log(cacheAdd(6));
