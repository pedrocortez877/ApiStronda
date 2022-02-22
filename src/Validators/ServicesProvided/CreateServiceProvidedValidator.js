import yup from '../../Helpers/Yup.js';

export default (req, res, next) => {
  const schema = yup.object().shape({
    Name: yup.string().required(),
    Description: yup.string().required(),
    LaborValue: yup.number().required(),
    Note: yup.string(),
  });

  return schema
    .validate(req.body)
    .then(() => next())
    .catch(({ errors }) => res.status(400).json({ message: errors.pop() }));
};
