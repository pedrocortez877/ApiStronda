import yup from '../Helpers/Yup';

export default (req, res, next) => {
  const schema = yup.object.shape({
    User: yup.string.required(),
    KeyAccess: yup.string.required(),
  });

  return schema
    .validade(req.body)
    .then(() => next())
    .catch(({ errors }) => res.status(400).json({ message: errors.pop() }));
};
