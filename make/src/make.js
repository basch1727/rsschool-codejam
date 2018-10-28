    
    const make = function make (...args) {
    let lastArg = args[args.length - 1];
    if(typeof lastArg === "function") {
        arguments.length = arguments.length - 1;
        return Array.prototype.reduce.call(arguments, lastArg, 0);
    } else {
        return make.bind(this, ...args);
    }
    }
    module.exports = { make };

    