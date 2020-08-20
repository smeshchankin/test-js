let assert = {
    equals: function (expected, actual, message) {
        let stdout = console.error;
        if (expected === actual) {
            stdout = console.log;
        } else if (expected == actual) {
            stdout = console.warn;
        }
        stdout(message + ': expected = %s, actual = %s', expected, actual);
    }
};
