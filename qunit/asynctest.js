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
    var promise = jQuery.ajax({
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

test("Test AJAX call to external resource", function() {
    stop();
    var promise = jQuery.getJSON('http://schema.rdfs.org/all.json');
    promise.done(function(data) {
        ok(data, 'Check that we got data');
    });
    promise.fail(function(err) {
        ok(false, 'Request failed: ' + err.statusText);
    });
    promise.complete(function() {
        start();
    });
});
