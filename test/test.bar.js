describe('Bar', function(){
  var bar;

  beforeEach(function () {
    bar = new Bar();
  });

  describe('squared', function() {
    it('squares a number', function(){
      expect( bar.squared(5)).eq(25);
    });
  });

  describe('cubed', function() {
    it('cubes a number', function(){
        expect( bar.cubed(5)).eq(125);
    });
  });

  // exponentOf only takes one param in bar.js, but the return function has a param of "num". A function for exponents should take two params, compute and return them, but right now it only sends back a function and takes one single parameter. For this test to pass, exponentOf would have to look like this:

  // exponentOf: function(exponent, num) {
  //       return Math.pow(num, exponent);
  //  };
  // };

  describe('exponentOf', function() {
    it('returns a number at the power of itself or another number', function(){
      var exponent = bar.exponentOf(5, 5);
      expect( bar.exponentOf(exponent)).eq(3125);
    });
  });

  describe('reverseString', function() {
    it('reverses a string', function(){
      expect( bar.reverseString('hello')).eq('olleh');
    });
  });

  describe('cipher', function() {
    it('turns a string into a cipher', function(){
      expect( bar.cipher('Princess')).eq('´ÖÍÒÇÉ××');
    });
  });

  describe('decipher', function() {
      it('deciphers a string', function(){
        expect( bar.decipher('´ÖÍÒÇÉ××')).eq('Princess');
      });
  });

  describe('rot13', function() {
    it('rotates all letters in a string by 13 places', function(){
      expect( bar.rot13('Princess')).eq('Cevaprff');
    });
  });

});
