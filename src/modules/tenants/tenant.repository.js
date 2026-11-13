const Tenant = require('./tenant.model');

const findByTaxId = (taxId) => {
  return Tenant.findOne({
    where: { taxId },
  });
};

const findById = (id) => {
  return Tenant.findByPk(id);
};

const create = (data, options = {}) => {
  return Tenant.create(data, options);
};

module.exports = {
  findByTaxId,
  findById,
  create,
};
