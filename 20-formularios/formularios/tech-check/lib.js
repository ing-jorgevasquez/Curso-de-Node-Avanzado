// this does NOT work
// exports = {a: 1, b: 2};

// this does work
exports.a = 1;
exports.b = 3;
// module.exports = { a: 1, b: 2 };
// module.exports = { validation: (module.exports === exports) };

function a() {
    console.log("Hi");
}
function b() {
    console.log("Hello");
}

module.exports = a;
module.exports = { a, b }; // this reasignes the module.exports object
exports.b = 3; // this is simply ignored

// When we use both module.exports and exports, the module.exports object is returned, and the exports object is ignored.
