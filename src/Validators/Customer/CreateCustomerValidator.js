import yup from '../../Helpers/Yup.js';

export default (req, res, next) => {
  const schema = yup.object().shape({
    Name: yup.string().required(),
    DocumentNumber: yup.string().required().max(14),
    DocumentType: yup.string().required(),
    IdAddress: yup.number().required().min(1),
    PhoneNumber: yup.string().required(),
  });

  return schema
    .validate(req.body)
    .then(() => next())
    .catch(({ errors }) => res.status(400).json({ message: errors.pop() }));
};
