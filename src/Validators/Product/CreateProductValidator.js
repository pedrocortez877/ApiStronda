import yup from '../../Helpers/Yup.js';

export default (req, res, next) => {
  const schema = yup.object().shape({
    Name: yup.string().required(),
    Description: yup.string().required(),
    BrandName: yup.string().required(),
  });

  return schema
    .validate(req.body)
    .then(() => next())
    .catch(({ errors }) => res.badRequest({ message: errors.pop() }));
};
