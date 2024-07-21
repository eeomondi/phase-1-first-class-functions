// receivesAFunction function
function receivesAFunction(callback) {
  callback();
}

// returnsANamedFunction function
function returnsANamedFunction() {
  return function namedFunction() {
    console.log("I'm a named function!");
  };
}

// returnsAnAnonymousFunction function
function returnsAnAnonymousFunction() {
  return function() {
    console.log("I'm an anonymous function!");
  };
}