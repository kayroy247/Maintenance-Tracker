'use strict';

Object.defineProperty(exports, "__esModule", {
          value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _requestControllers = require('../controllers/requestControllers');

var _requestControllers2 = _interopRequireDefault(_requestControllers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 3000;

app.use(_express2.default.json());

app.get('/', RecipeControllers.homePageDisplay());

app.get('/api/v1/users/requests', RecipeControllers.getAllRequests());

app.get('/api/v1/users/requests/:id', RecipeControllers.getUserRequests());

app.post('/api/v1/users/requests', RecipeControllers.postRequest());

app.put('/api/v1/users/requests/:id', RecipeControllers.modifyRequest());

app.delete('/api/v1/users/requests/:id', RecipeControllers.deleteRequest());

app.listen(port, function () {
          return console.log('listening on port 3000');
});

exports.default = app;
