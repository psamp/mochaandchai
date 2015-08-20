window.Foo = (function() {

  function Foo() {
    this.plusOne = function(x) {
      var add = x + 1;
      return add;
    };
    this.sortArray = function (array) {
      // Create a variable that takes this fuction's param (assumed to be an array), slice() and thus copy it, and sort that copy so you have an entirely new array that's a sorted version of the one that was passed in.

      var sortThis = array.slice().sort();
      return sortThis;
    };
    this.hasValue = function(array, findThis){

      // Take the array param, and call indexOf on it, passing in the findThis param, and let this equal a variable called result. If result is less than zero, return false, else return true.

      var result = array.indexOf(findThis);

          if(result < 0) {
          return false;
        } else {
          return true;
        }
      };

    }

  Foo.prototype = {

  };

  // Set a greet key on all Foos that equals a function that takes whatever string you pass in and returns it within a greeting.

  Foo.greet = function(string) {
    var greet = "Hello, " + string + "!";
    return greet;
  };

  return Foo;

})();

console.log(window.Foo);
