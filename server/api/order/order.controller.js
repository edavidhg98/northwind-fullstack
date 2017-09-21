const repository = require('./order.repository');

function getAll(req, res) {
  repository.get()
    .then((orders) => {
      res.json(orders);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((order) => {
      if (!order) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(order);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _order = extractData(req);

  repository.add(_order)
    .then((order) => {
      res.status(201).json(order);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _order = extractData(req);

  repository.update(id, _order)
    .then((order) => {
      if (!order) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(order);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      orderDate: req.body.orderDate,
      requiredDate: req.body.requiredDate,
      shippedDate: req.body.shippedDate,
      freight: req.body.freight,
      shipName: req.body.shipName,
      shipAddress: req.body.shipAddress,
      shipCity: req.body.shipCity,
      shipRegion: req.body.shipRegion,
      shipPostalCode: req.body.shipPostalCode,
      shipCountry: req.body.shipCountry,
      idCustomer: req.body.idCustomer,
      idEmployee: req.body.idEmployee,
      idShipper: req.body.idShipper,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((order) => {
      if (!order) {
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
