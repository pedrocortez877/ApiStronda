import yup from '../../Helpers/Yup.js';

export default (req, res, next) => {
  const schema = yup.object().shape({
    Street: yup.string().required(),
    StreetNumber: yup.number().required(),
    Neighborhood: yup.string().required(),
    City: yup.string().required(),
    State: yup.string().required(),
    Complement: yup.string().required(),
  });

  return schema
    .validate(req.body)
    .then(() => next())
    .catch(({ errors }) => res.status(400).json({ message: errors.pop() }));
};
