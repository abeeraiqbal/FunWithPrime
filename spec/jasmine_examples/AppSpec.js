describe("App", function() {
    var app;
 
    //This will be called before running each spec
    beforeEach(function() {
        app = new App();
    });
 
    describe("when app is run it should tell a number prime or not", function(){
         
        //Spec for sum operation
        it("should be able to give 8 is not a prime number", function() {
            expect(app.primeNumberOrNot(5)).toEqual(false);
        });
    });
    describe("when app is run it should calculate a next prime", function(){
         
        //Spec for sum operation
        it("should be able to give 8 is not a prime number", function() {
            expect(app.getNextPrimeNumber(23)).toEqual(29);
        });
    });
});