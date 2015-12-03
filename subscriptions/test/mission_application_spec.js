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

        it('email is 4 or more chars and contians an @', function() {
            assert(validApp.emailIsValid(), 'Not valid');
        });

        it('height is between 60 and 75 inches', function() {
            assert(validApp.heightIsValid(), 'Not valid');
        });

        it('age is between 15 and 100', function() {
            assert(validApp.ageIsValid(), 'Not valid');
        });

        it('weight is between 100 and 300', function() {
            assert(validApp.weightIsValid(), 'Not valid');
        });

        it('first and last name are provided', function() {
            assert(validApp.nameIsValid(), 'Not valid');
        });

    });
});
