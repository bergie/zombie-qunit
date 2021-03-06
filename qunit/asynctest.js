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

test("Test AJAX Cross-Domain call", function() {
    stop();
    var promise = jQuery.getJSON('http://schema.rdfs.org/all.json');
    promise.done(function(data) {
        ok(false, 'This request should have failed due to cross-site restrictions');
    });
    promise.fail(function(err) {
        ok(true, 'Request failed due to cross-site restrictions: ' + err.statusText);
    });
    promise.complete(function() {
        start();
    });
});

test("Test AJAX Cross-Domain with JSONP", function() {
    stop();
    var promise = jQuery.getJSON('https://api.twitter.com/1/statuses/public_timeline.json?count=3&include_entities=true&callback=?');
    promise.done(function(data) {
        ok(data, 'Got data back');
    });
    promise.fail(function(err) {
        ok(false, 'Request failed: ' + err.statusText);
    });
    promise.complete(function() {
        start();
    });
});
