var Interface = function(name, methods) {
    if(arguments.length != 2) {
        throw new Error("Interface constructor need only two arguments");
    }

    this.name = name;
    this.methods = [];

    for(var i=0, len=methods.length; i<len; i++) {
        if(typeof methods[i] !== 'string') {
            throw new Error("method name need to be string");
        }

        this.methods.push(methods[i]);
    }
};


// static class

Interface.ensureImplements = function(object) {
    if(arguments.length < 2) {
        throw new Error("Arguments need to be more than 2");
    }

    for(var i=1, len=arguments.length; i < len; i++) {
        var interface = arguments[i];
        if(interface.constructor !== Interface) {
            throw new Error("Arguments here need to be instance of Interface");
        }

        for(var j=0, methodsLen=interface.methods.length; j<methodsLen; j++) {
            var method = interface.methods[j];
            if(!object[method] || typeof object[method] != 'function') {
                throw new Error(method + " method is not found");
            }
        }
    }
};