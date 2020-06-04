'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;
//to check browser is having metamask or not
//typeof window is a js function which checks the code is running on server or browser
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  //we are in the browser  & metamask is running.
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  //user is not having metamask on the browser
  var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/40b34e71b2da4e86a73a045b7e5569cf');
  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFFQSxJQUFJLFlBQUo7QUFDQTtBQUNBO0FBQ0EsSUFBSSxPQUFPLEFBQVAsV0FBa0IsQUFBbEIsZUFBaUMsT0FBTyxPQUFPLEFBQWQsU0FBc0IsQUFBM0QsYUFBdUUsQUFDckU7QUFDQTtTQUFPLEFBQUksQUFBSixrQkFBUyxPQUFPLEFBQVAsS0FBWSxBQUFyQixBQUFQLEFBR0Q7QUFMRCxPQUtLLEFBQ0g7QUFDQTtNQUFNLFdBQVUsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUNkLEFBRGMsQUFBaEIsQUFHQTtTQUFPLEFBQUksQUFBSixrQkFBUyxBQUFULEFBQVAsQUFDRDtBQUVEOztrQkFBZSxBQUFmIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvY2hldGFueWEvd29ya3NwYWNlL2NhbXBfY3JlYXRvci9jYW1wX2NyZWF0b3JfdjEifQ==