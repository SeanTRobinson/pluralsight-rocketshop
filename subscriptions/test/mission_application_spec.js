var assert = require('assert');
var MembershipApplication = require('../lib/membership_application');

describe('Applying for a mission', function() {

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

    describe('Using valid email, first, last, hight, age, weight', function() {
        it('is valid', function() {
            assert(validApp.isValid(), 'Not valid');
        });

        it('reports a valid email', function() {
            assert(validApp.emailIsValid(), 'Not valid');
        });

        it('reports a valid height', function() {
            assert(validApp.heightIsValid(), 'Not valid');
        });

        it('reports a valid age', function() {
            assert(validApp.ageIsValid(), 'Not valid');
        });

        it('reports a valid weight', function() {
            assert(validApp.weightIsValid(), 'Not valid');
        });

        it('reports a valid name', function() {
            assert(validApp.nameIsValid(), 'Not valid');
        });

    });
});
