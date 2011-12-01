Example of running QUnit tests with the Zombie headless browser
===============================================================

This repository provides an example of running [QUnit](http://docs.jquery.com/QUnit) client-side tests with the [Zombie](http://zombie.labnotes.org/) headless browser and [nodeunit](https://github.com/caolan/nodeunit).

## Installing

    $ npm install --dev

## Running tests

    $ npm test

or:

    $ ./node_modules/nodeunit/bin/nodeunit test

## Travis integration

See the `.travis.yml` for example on how to integrate these tests with the [Travis Continuous Integration service](http://travis-ci.org/).

For example, this repository is being run with Travis:

[![Build Status](https://secure.travis-ci.org/bergie/zombie-qunit.png)](http://travis-ci.org/bergie/zombie-qunit)

## Contributing

If you figure out more QUnit or jQuery features to test against, or a better way to get detailed information about the tests run passed from QUnit to nodeunit, please file pull requests.
