var MathOperations = function () {
    this.power = function(base, exponent) {
      return Math.pow(base, exponent);
    }
  
    this.squareRoot = function(number) {
      return Math.sqrt(number);
    }
  
    this.fibonacci = function(n) {
      if (n <= 1) {
        return n;
      }
      return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }
  };
  