Function.prototype.newBind = function(target,...args){
    var _this = this;
    var temp = function(){};
    var f = function (){
        var argu = [].slice.call(arguments,0);
        return _this.apply(this.constructor== _this ? this:(target || window),args.concat(argu));
    }
    temp.prototype = _this.prototype;
    f.prototype = new temp();
    return f;
}