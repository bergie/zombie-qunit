module("Module C: Asynchronous tests");

test("Test asynchronous testing", function() {
    stop();
    setTimeout(function() {
        ok(true, "We're async!");
        start();
    }, 100);
});

test("Test AJAX call", function() {
    stop();
    promise = jQuery.ajax({
        url: '/package.json',
        dataType: 'json'
    });
    promise.done(function(data) {
        equal(data.name, 'zombie-qunit');
    });
    promise.fail(function(err) {
        equal(true, false, 'Request failed');
    });
    promise.complete(function() {
        start();
    });
});
