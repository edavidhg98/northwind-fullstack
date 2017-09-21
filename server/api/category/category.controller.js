const repository = require('./category.repository');

function getAll(req, res) {
  repository.get()
    .then((categorys) => {
      res.json(categorys);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((category) => {
      if (!category) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(category);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _category = extractData(req);

  repository.add(_category)
    .then((category) => {
      res.status(201).json(category);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _category = extractData(req);

  repository.update(id, _category)
    .then((category) => {
      if (!category) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(category);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      categoryName: req.body.categoryName,
      description: req.body.description,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((category) => {
      if (!category) {
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
