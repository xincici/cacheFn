var cache = [];

var cacheFn = function(func, thisArg){
    return function(){
        thisArg = thisArg ? thisArg : null;
        var args = [].slice.call(arguments);
        for(var i=0,l=cache.length; i<l; i++){
            var tmp = cache[i];
            if(tmp.func !== func || tmp.thisArg !== thisArg){
                continue;
            }
            if(tmp.args.length === args.length){
                for(var p=0,q=args.length; p<q; p++){
                    if(tmp.args[p] !== args[p]){
                        break;
                    }
                }
                if(p === q){
                    return tmp.result;
                }
            }
        }
        var result = func.apply(thisArg, args);
        var cObj = {
            func: func,
            thisArg : thisArg,
            args : args,
            result : result
        };
        cache.push(cObj);
        return result;
    }
};

module.exports = cacheFn;
