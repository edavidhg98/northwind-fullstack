const repository = require('./product.repository');

function getAll(req, res) {
  repository.get()
    .then((products) => {
      res.json(products);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((product) => {
      if (!product) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(product);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _product = extractData(req);

  repository.add(_product)
    .then((product) => {
      res.status(201).json(product);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _product = extractData(req);

  repository.update(id, _product)
    .then((product) => {
      if (!product) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(product);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      productName: req.body.productName,
      quantityPerUnit: req.body.quantityPerUnit,
      unitPrice: req.body.unitPrice,
      unitsInStock: req.body.unitsInStock,
      unitsOnOrder: req.body.unitsOnOrder,
      reorderLevel: req.body.reorderLevel,
      discontinued: req.body.discontinued,
      idCategory: req.body.idCategory,
      idSupplier: req.body.idSupplier,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((product) => {
      if (!product) {
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
