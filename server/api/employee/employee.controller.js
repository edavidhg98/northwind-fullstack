const repository = require('./employee.repository');

function getAll(req, res) {
  repository.get()
    .then((employees) => {
      res.json(employees);
    })
    .catch(handleError(res));
}

function getById(req, res) {
  const id = req.params.id;
  repository.getById(id)
    .then((employee) => {
      if (!employee) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(employee);
    })
    .catch(handleError(res));
}

function insert(req, res) {
  const _employee = extractData(req);

  repository.add(_employee)
    .then((employee) => {
      res.status(201).json(employee);
    })
    .catch(handleError(res));
}

function update(req, res) {
  const id = req.params.id;
  const _employee = extractData(req);

  repository.update(id, _employee)
    .then((employee) => {
      if (!employee) {
        return res.status(404).json({ error: `El recurso con el id ${id} no se encuentra` });
      }
      res.json(employee);
    })
    .catch(handleError(res));
}

function extractData(req) {
  return {
      lastName: req.body.lastName,
      firstName: req.body.firstName,
      title: req.body.title,
      titleOfCourtesy: req.body.titleOfCourtesy,
      birthDate: req.body.birthDate,
      hireDate: req.body.hireDate,
      address: req.body.address,
      city: req.body.city,
      region: req.body.region,
      postalCode: req.body.postalCode,
      country: req.body.country,
      homePhone: req.body.homePhone,
      extension: req.body.extension,
      notes: req.body.notes,
      photoPath: req.body.photoPath,
      idEmployee: req.body.idEmployee,
    };
}

function remove(req, res) {
  const id = req.params.id;
  repository.remove(id)
    .then((employee) => {
      if (!employee) {
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
