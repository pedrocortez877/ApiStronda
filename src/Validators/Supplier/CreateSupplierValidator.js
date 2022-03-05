import yup from '../../Helpers/Yup.js';

export default (req, res, next) => {
  const schema = yup.object().shape({
    Name: yup.string().required(),
    Cnpj: yup.string().required().max(14),
  });

  return schema
    .validate(req.body)
    .then(() => next())
    .catch(({ errors }) => res.badRequest({ message: errors.pop() }));
};
