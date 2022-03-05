import yup from '../../Helpers/Yup.js';

export default async (req, res, next) => {
  const schemaServiceSale = yup
    .object()
    .required()
    .shape({
      IdCustomer: yup.number().required().min(1),
      Invoice: yup.boolean(),
    });

  const schemaProductsServiceSale = yup.array().of(
    yup.object().shape({
      Quantity: yup.number().required().min(1),
      IdProduct: yup.number().required().min(1),
      ProductValue: yup.number().required(),
    })
  );

  const schemaServicesOfASaleService = yup
    .array()
    .required()
    .of(
      yup.object().shape({
        IdService: yup.number().required().min(1),
        ServiceValue: yup.number().required(),
      })
    );

  try {
    const validateServiceSale = await schemaServiceSale.validate(
      req.body.ServiceSale
    );

    const validateItemsServiceSale = await schemaProductsServiceSale.validate(
      req.body.ProductsOfThisSale
    );

    const validateServiceProvided = await schemaServicesOfASaleService.validate(
      req.body.ServicesOfThisSale
    );

    if (
      validateServiceSale &&
      validateItemsServiceSale &&
      validateServiceProvided
    )
      next();
  } catch (e) {
    return res.badRequest({ message: e.errors.pop() });
  }
};
