const repository = require('./customer-demographic.repository');

function getAll(req, res) {
  repository.get()
    .then((customerDemographics) => {
      res.json(customerDemographics);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((customerDemographic) => {
      if (!customerDemographic) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(customerDemographic);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _customerDemographic = extractData(req);

  repository.add(_customerDemographic)
    .then((customerDemographic) => {
      res.status(201).json(customerDemographic);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _customerDemographic = extractData(req);

  repository.update(id, _customerDemographic)
    .then((customerDemographic) => {
      if (!customerDemographic) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(customerDemographic);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      customerDesc: req.body.customerDesc,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((customerDemographic) => {
      if (!customerDemographic) {
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
