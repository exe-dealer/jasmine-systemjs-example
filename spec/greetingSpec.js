describe('greeting', function () {
    var greeting = require('../src/greeting');

    it('should say hello', function () {
        expect(greeting()).toEqual('hello');
    });
});
