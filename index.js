(function() {
    function sum(x, y) {
        return x + y;
    }

    assert.equals(5, sum(2, 3), 'Test sum of numbers 2 and 3');
    assert.equals('5', sum(2, 3), 'Test sum of numbers 2 and 3 !== \'5\'');
    assert.equals(6, sum(2, 3), 'Test sum of numbers 2 and 3 != 6');
}());
