function rokket() {
    let args = [].slice.apply(arguments);
    function resultFn(){
        args = args.concat([].slice.apply(arguments));
        let size = args.length;
        if(size>=3){
            return args.reduce( (actual, current) => { 
                return actual * current;
            });
            
        }
        return resultFn;
    }
    return resultFn();
}

console.log(rokket(2)(5)(3)) // this outputs 30
console.log(rokket(4)(2)(2)) // this outputs 16
console.log(rokket(8)(2)(1)) // this also outputs 16

// node CompositeFunction.js