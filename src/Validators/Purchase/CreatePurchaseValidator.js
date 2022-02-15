import yup from '../../Helpers/Yup.js';

export default (req, res, next) => {
  const schema = yup.object().shape({
    IdSupplier: yup.number().required().min(1),
    Invoice: yup.boolean(),
  });

  return schema
    .validate(req.body.Purchase)
    .then(() => next())
    .catch(({ errors }) => res.status(400).json({ message: errors.pop() }));
};
