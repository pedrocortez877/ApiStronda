import yup from '../../Helpers/Yup.js';

export default (req, res, next) => {
  const schema = yup.object().shape({
    Id: yup.number().required().min(1),
  });

  return schema
    .validate(req.query)
    .then(() => next())
    .catch(({ errors }) => res.badRequest({ message: errors.pop() }));
};
