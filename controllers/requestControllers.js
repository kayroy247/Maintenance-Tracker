/**********************************************
 * @author Kayode Okunlade
 * @class RecipeControllers
 * This is a description of the controller class.
 ***********************************************/
require('babel-register');
import Joi from 'joi';

export default class RequestControllers {
static requests = [
  {
  userId: 1,
  reqs: [{
    reqId: 1,
    title: 'repair',
    description: 'engine',
  }],
}, {
  userId: 2,
  reqs: [{
    reqId: 1,
    title: 'Maintenance',
    description: 'house',
  }],
}, {
  userId: 3,
  reqs: [{
    reqId: 1,
    title: 'both',
    description: 'computer',
  }],
}];



  static validateUser() {
  return (request) => {
  const schema = {
    name: Joi.string().min(3).required(),
    userId: Joi.number(),
    title: Joi.string(),
    description: Joi.string(),
  };
  return Joi.validate(request, schema);
}
  }

static homePageDisplay() {
return (req, res) => {
  res.send('This is the Homepage');
}
}

static getAllRequests() {
return (req, res) => {
  res.send(requests);
}
}

static getUserRequests() {
return (req, res) => {
  const request = requests.find(c => c.userId === parseInt(req.params.id, 10));
  if (!request) return res.status(404).send('The user with the given ID was not found');
  return res.send(request);
}
}
static postRequest() {
 return (req, res) => {
  const result = validateUser(req.body);
  if (result.error) return res.status(400).send(result.error.details[0].message);
  const manage = requests[parseInt(req.body.userId, 10) - 1].reqs;
  const newReq = {
    reqId: manage.length + 1,
    title: req.body.title,
    description: req.body.description,
  };
  manage.push(newReq);
  return res.send(newReq);
}
}
static modifyRequest() {
    return (res, req) => {
  const request = requests.find(c => c.userId === parseInt(req.params.id, 10));
  if (!request) return res.status(404).send('The user with the given ID was not found');
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  request.title = req.body.title;
  request.description = req.body.description;
  return res.send(request);
    }
}

static deleteRequest() {
    return (req, res) => {
  const request = requests.find(c => c.userId === parseInt(req.params.id, 10));
  if (!request) return res.status(404).send('The user with the given ID was not found');
  const index = requests.indexOf(request);
  request.splice(index, 1);
  return res.send(request);
    }
}
}