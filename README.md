# cacheFn
Make your calculate heavy function more effective!

## usage
```shell
npm install cache-fn
```

```javascript
var cacheFn = require('cache-fn');
function yourFunc(args1 [, args2 ...]){
    //your code with heavy calculation here
}

var yourCacheFunc = cacheFn(yourFunc);
//as long as yourFunc is a calculate heavy function
//yourCacheFunc is a more effective function that does the same thing yourFunc does for you
//and it remembers the calling of yourFunc and it's return value
//next time, when you call it again with the same arguments, it will directly return the value
```

## use thisArg argument
```javascript
var cacheFn = require('cache-fn');
var obj = {
    foo : 'xxx',
    fn1 : function(args1 [, args2 ...]){
        //complex calculation code here
    }
};
var cacheFn1 = cacheFn(obj.fn1, obj);  //pass obj as the second argument 
//cacheFn1 is now a cached function
//obj.fn1 will be executed with this point to obj
```
