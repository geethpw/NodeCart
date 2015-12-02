var Stripe = require('stripe');

module.exports = function(wagner) {
  var stripe = Stripe("sk_test_tRpPySmRJ9oohxIf426LGS8R");

  wagner.factory('Stripe', function() {
    return stripe;
  });

  return {
    Stripe: stripe
  };
};
