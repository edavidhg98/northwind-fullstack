const repository = require('./territory.repository');

function getAll(req, res) {
  repository.get()
    .then((territorys) => {
      res.json(territorys);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((territory) => {
      if (!territory) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(territory);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _territory = extractData(req);

  repository.add(_territory)
    .then((territory) => {
      res.status(201).json(territory);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _territory = extractData(req);

  repository.update(id, _territory)
    .then((territory) => {
      if (!territory) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(territory);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      territoryDescription: req.body.territoryDescription,
      idRegion: req.body.idRegion,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((territory) => {
      if (!territory) {
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
