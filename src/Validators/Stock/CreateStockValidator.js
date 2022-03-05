import yup from '../../Helpers/Yup.js';

export default (req, res, next) => {
  const schema = yup.object().shape({
    IdProduct: yup.number().required().min(1),
    IdSuppler: yup.number().required().min(1),
    Quantity: yup.number().required().min(1),
  });

  return schema
    .validate(req.body)
    .then(() => next())
    .catch(({ errors }) => res.badRequest({ message: errors.pop() }));
};
