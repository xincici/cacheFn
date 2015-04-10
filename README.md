# cacheFn
Make your calculate heavy function more effective!

## usage
```shell
npm install cache-fn
```

```javascript
var cacheFn = require('cache-fn');
function yourFunc(){
    //your code here
}

var yourCacheFunc = cacheFn(yourFunc);
//as long as yourFunc is a calculate heavy function
//yourCacheFunc is a more effective function that does the same thing yourFunc does for you
//and it remembers the calling of yourFunc and it's return value
//next time, when you call it again with the same arguments, it will directly return the value
```
