const repository = require('./order-detail.repository');

function getAll(req, res) {
  repository.get()
    .then((orderDetails) => {
      res.json(orderDetails);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((orderDetail) => {
      if (!orderDetail) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(orderDetail);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _orderDetail = extractData(req);

  repository.add(_orderDetail)
    .then((orderDetail) => {
      res.status(201).json(orderDetail);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _orderDetail = extractData(req);

  repository.update(id, _orderDetail)
    .then((orderDetail) => {
      if (!orderDetail) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(orderDetail);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      unitPrice: req.body.unitPrice,
      quantity: req.body.quantity,
      discount: req.body.discount,
      idOrder: req.body.idOrder,
      idProduct: req.body.idProduct,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((orderDetail) => {
      if (!orderDetail) {
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
