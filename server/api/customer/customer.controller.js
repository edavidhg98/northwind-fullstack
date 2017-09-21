const repository = require('./customer.repository');

function getAll(req, res) {
  repository.get()
    .then((customers) => {
      res.json(customers);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((customer) => {
      if (!customer) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(customer);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _customer = extractData(req);

  repository.add(_customer)
    .then((customer) => {
      res.status(201).json(customer);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _customer = extractData(req);

  repository.update(id, _customer)
    .then((customer) => {
      if (!customer) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(customer);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      companyName: req.body.companyName,
      contactName: req.body.contactName,
      contactTitle: req.body.contactTitle,
      address: req.body.address,
      city: req.body.city,
      region: req.body.region,
      postalCode: req.body.postalCode,
      country: req.body.country,
      phone: req.body.phone,
      fax: req.body.fax,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((customer) => {
      if (!customer) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.status(204).json();
    })
    .catch(handleError(res));
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json({ msg: `Error al realizar la petición ${err}` });
    } else {
      res.status(statusCode).json({ msg: `Ocurrión un error en el servidor ${err}` });
    }
  };
}

module.exports = {
  getAll,
  getById,
  insert,
  update,
  remove
};
