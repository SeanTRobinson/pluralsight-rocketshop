var assert = require('assert');
var MembershipApplication = require('../lib/membership_application');

describe('Membership application requirements', function() {

    var validApp;

    before(function() {
        validApp = new MembershipApplication({
            first: 'Test',
            last: 'User',
            email: 'test@test.com',
            age: 30,
            height: 66,
            weight: 180
        });
    });

    describe('Application is valid if...', function() {

        it('all validators pass', function() {
            assert(validApp.isValid(), 'Not valid');
        });

    });

    describe('Application invalid if...', function() {

        it('email is 4 characters or less', function() {
          var app = new MembershipApplication({email: 'd@d'});
          assert(!app.emailIsValid());
        });

        it('email does not contain an @', function() {
          var app = new MembershipApplication({email: 'ddd'});
          assert(!app.emailIsValid());
        });

        it('email is omitted', function() {
          var app = new MembershipApplication();
          assert(!app.emailIsValid());
        });

        it('height is less than 60 inches', function() {
          var app = new MembershipApplication({height: 59});
          assert(!app.heightIsValid());
        });

        it('height is greater than 75 inches', function() {
          var app = new MembershipApplication({height: 76});
          assert(!app.heightIsValid());
        });

        it('height is omitted', function() {
          var app = new MembershipApplication();
          assert(!app.heightIsValid());
        });

        it('age is less than 15', function() {
          var app = new MembershipApplication({age: 14});
          assert(!app.ageIsValid());
        });

        it('age is greater than 100', function() {
          var app = new MembershipApplication({age: 101});
          assert(!app.ageIsValid());
        });

        it('age is omitted', function() {
          var app = new MembershipApplication();
          assert(!app.ageIsValid());
        });

        it('weight is less than 100', function() {
          var app = new MembershipApplication({age: 99});
          assert(!app.weightIsValid());
        });

        it('weight is greater than 300', function() {
          var app = new MembershipApplication({age: 301});
          assert(!app.weightIsValid());
        });

        it('weight is omitted', function() {
          var app = new MembershipApplication();
          assert(!app.weightIsValid());
        });

        it('first is ommited', function() {
          var app = new MembershipApplication({last: 'last'});
          assert(!app.nameIsValid());
        });

        it('last is ommited', function() {
          var app = new MembershipApplication({first: 'first'});
          assert(!app.nameIsValid());
        });

    });
});
