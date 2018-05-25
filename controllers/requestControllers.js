import Joi from 'joi';

const requests = [
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

  exports.validateUser = (request) => {
  const schema = {
    name: Joi.string().min(3).required(),
    userId: Joi.number(),
    title: Joi.string(),
    description: Joi.string(),
  };
  return Joi.validate(request, schema);
};

 exports.homePageDisplay = (req, res) => {
  res.send('This is the Homepage');
};

exports.getAllRequests = (req, res) => { res.send(requests);}


exports.getUserRequests = (req, res) => {
  const request = requests.find(c => c.userId === parseInt(req.params.id, 10));
  if (!request) return res.status(404).send('The user with the given ID was not found');
  return res.send(request);
};

exports.postRequest = (req, res) => {
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
};

exports.modifyRequest = (res, req) => {
  const request = requests.find(c => c.userId === parseInt(req.params.id, 10));
  if (!request) return res.status(404).send('The user with the given ID was not found');
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  request.title = req.body.title;
  request.description = req.body.description;
  return res.send(request);
    };


 exports.deleteRequest = (req, res) => {
  const request = requests.find(c => c.userId === parseInt(req.params.id, 10));
  if (!request) return res.status(404).send('The user with the given ID was not found');
  const index = requests.indexOf(request);
  request.splice(index, 1);
  return res.send(request);
    };

 
