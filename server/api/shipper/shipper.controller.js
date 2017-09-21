const repository = require('./shipper.repository');

function getAll(req, res) {
  repository.get()
    .then((shippers) => {
      res.json(shippers);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((shipper) => {
      if (!shipper) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(shipper);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _shipper = extractData(req);

  repository.add(_shipper)
    .then((shipper) => {
      res.status(201).json(shipper);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _shipper = extractData(req);

  repository.update(id, _shipper)
    .then((shipper) => {
      if (!shipper) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(shipper);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      companyName: req.body.companyName,
      phone: req.body.phone,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((shipper) => {
      if (!shipper) {
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
