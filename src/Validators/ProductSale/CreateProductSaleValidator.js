import yup from '../../Helpers/Yup.js';

export default (req, res, next) => {
  const schema = yup.object().shape({
    IdCustomer: yup.number().min(1).required(),
    SaleProductValue: yup.number().required(),
    Invoice: yup.boolean(),
  });

  return schema
    .validate(req.body)
    .then(() => next())
    .catch(({ errors }) => res.status(400).json({ message: errors.pop() }));
};
