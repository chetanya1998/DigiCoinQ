'use strict';

var routes = require('next-routes')();

routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;

//routes.add('...','...');
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUVLLEFBRkwsSUFFUyxBQUZULGtCQUUyQixBQUYzQixrQkFHSyxBQUhMLElBR1MsQUFIVCx1QkFHZ0MsQUFIaEMsbUJBSUssQUFKTCxJQUlTLEFBSlQsZ0NBSXlDLEFBSnpDLDZCQUtLLEFBTEwsSUFLUyxBQUxULG9DQUs2QyxBQUw3Qzs7QUFPQSxPQUFPLEFBQVAsVUFBaUIsQUFBakI7O0FBRUEiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2NoZXRhbnlhL3dvcmtzcGFjZS9jYW1wX2NyZWF0b3IvY2FtcF9jcmVhdG9yX3YxIn0=