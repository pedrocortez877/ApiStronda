import yup from '../../Helpers/Yup.js';

export default (req, res, next) => {
  const schema = yup.object().shape({
    Street: yup.string().required(),
    StreetNumber: yup.number().required(),
    Neighborhood: yup.string().required(),
    City: yup.string().required(),
    State: yup.string().required(),
    Complement: yup.string().required(),
    ZipCode: yup.number().required().min(1),
  });

  return schema
    .validate(req.body)
    .then(() => next())
    .catch(({ errors }) => res.badRequest({ message: errors.pop() }));
};
