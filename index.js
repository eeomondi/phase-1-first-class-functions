function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    function myNamedFunction() {
      console.log("Hello from named function!");
    }
    return myNamedFunction;
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("Hello from anonymous function!");
    };
  }